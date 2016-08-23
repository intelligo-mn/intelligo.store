<?php

namespace App\Http\Controllers\Admin;

use App\Categories;
use App\Contacts;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Contracts\Mail\Mailer;

class ContactController extends MainAdminController
{
    public function __construct(Mailer $mailer)
    {

        // $this->middleware('DemoAdmin', ['only' => ['dostar', 'doimportant', 'addcat', 'mailcatdelete', 'maillabeldelete', 'doaction', 'newmailsent']]);

        $this->mail =$mailer;

        $this->fromemail = getcong('moduContactEmail') > "" ? getcong('moduContactEmail') : getcong('siteemail');
        $this->sitename =getcong('moduContactName') > "" ? getcong('moduContactName') : getcong('sitename');


        $mailcat = Categories::byType('mailcat')->oldest('id')->get();
        $mailprivatecat = Categories::byType('mailprivatecat')->oldest('id')->get();
        $mailsections = Categories::byType('maillabel')->oldest('id')->get();


        \View::share(compact('mailcat', 'mailprivatecat', 'mailsections'));

        parent::__construct();
    }

    public function index($type = "")
    {
            $requ=\Request::query('qemail');

        if($requ>""){

            $catname='Search results for "'.$requ.'"';
            $caticon='search';
            $lastmails  = Contacts::where("email", "LIKE", "%$requ%")->latest('created_at')->paginate(10);
            return view('_contact.mailbox.index', compact('lastmails', 'catname', 'caticon'));
        }

        if(!empty($type)){
            $cat=Categories::where('name_slug', $type)->first();
            if(!$cat){
              return  redirect('/admin/mailbox/inbox');
            }

            $catname=$cat->name;
            $caticon=$cat->description;

            $cattype=$cat->type;
            if($cattype == 'mailcat'){
                $mailcattt = "category_id";
            }elseif($cattype == 'mailprivatecat'){
                $mailcattt = "category_id";
            }else{
                $mailcattt = "label_id";
            }

            $lastmails  = Contacts::where($mailcattt, $cat->id)->latest('created_at')->paginate(10);
        }else{
            return  redirect('/admin/mailbox/inbox');

        }


        return view('_contact.mailbox.index', compact('lastmails', 'catname', 'caticon'));

    }

    public function read($id)
    {

        $lastmail  = Contacts::find($id);
        if(!$lastmail){
            return redirect('/admin/mailbox');
        }

        $lastmail->read =1;
        $lastmail->save();

        return view('_contact.mailbox.read', compact('lastmail'));

    }

    public function newmail(Request $request)
    {

        $lastmail=null;
        if(null !==$request->query('mail')){
            $lastmail  = Contacts::findOrFail($request->query('mail'));
        }


        return view('_contact.mailbox.new', compact('lastmail'));

    }

    public function dostar(Request $request)
    {
        $requests=$request->all();
        $mail=$requests['mail'];

        $mail  = Contacts::findOrFail($mail);
        if($mail->stared ==1){
            $mail->stared =0;
            $mail->save();
            return "unstared";
        }else{
            $mail->stared =1;
            $mail->save();
            return "stared";
        }

    }

    public function doimportant(Request $request)
    {
        $requests=$request->all();
        $mail=$requests['mail'];

        $mail  = Contacts::findOrFail($mail);
        if($mail->important ==1){
            $mail->important =0;
            $mail->save();
            return "unimportant";
        }else{
            $mail->important =1;
            $mail->save();
            return "important";
        }


    }

    public function addcat(Request $request)
    {
        $inputs=$request->all();
        $name=$inputs['name'];
        $type=$inputs['type'];

        $mail  = new Categories;

        $v = \Validator::make($inputs, [
            'name' => 'required',
            'type' => 'required',
        ]);

        if ($v->fails()) {
            return array('type'=>'error','message'=>$v->errors()->first(),'url'=>'/');
        }

        $cat = new Categories;
        $cat->name = $name;
        $cat->name_slug = str_slug($name , '-');

        $cat->description = sprintf('#%06X', mt_rand(0, 0xFFFFFF));


        $cat->type = $type;
        $cat->save();

        return array('type'=>'success','url'=>redirect()->back());
    }

    public function mailcatdelete($id)
    {
        $cat  = Categories::findOrFail($id);
        $cat->delete();
        Contacts::where('category_id', $id)->delete();
        \Session::flash('success.message', trans("admin.Deleted"));
        return redirect('admin/mailbox');
    }

    public function maillabeldelete($id)
    {
        $cat  = Categories::findOrFail($id);
        $cat->delete();
        \Session::flash('success.message', trans("admin.Deleted"));
        return redirect('admin/mailbox');
    }

    public function doaction(Request $request)
    {
        $requests=$request->all();


        $typo=$request['typo'];
        $type=$request['type'];


       if(!isset($requests['contacts']) or count($requests['contacts']) ==0){
           return array('type'=>'error', 'message'=>trans("admin.atleastonemail"),'url'=>'/admin/mailbox/');
       }

        foreach($requests['contacts'] as $con){
            $mail  = Contacts::findOrFail($con);

            if($type=='move'){

                $mail->category_id =Categories::byType('mailcat')->where('name_slug', $typo)->first()->id;

            }elseif($type=='do'){

                    if($typo=='read'){

                        $mail->read =1;

                     }elseif($typo=='unread'){

                        $mail->read =0;

                     }elseif($typo=='important'){

                        $mail->important =1;

                     }elseif($typo=='unimportant'){

                        $mail->important =0;

                     }elseif($typo=='stared'){

                        $mail->stared =1;

                     }elseif($typo=='unstared'){

                        $mail->stared =0;
                     }

            }

                if($type=='deleteperma'){
                    $mail->delete();
                }else{
                    $mail->save();
                }
        }


        return array('type'=>'success','url'=>redirect()->back());


    }

    public function newmailsent(Request $request)
    {
        $requests=$request->all();
        $type=$requests['type'];


        $v = \Validator::make($requests, [
            'email-to'     => 'required|email',
            'email-subject'   => 'required|min:3|max:255',
            'email-body'      => 'required|max:5500',
        ]);

        if ($v->fails()) {
            return array('type'=>'error','message'=>$v->errors()->first(),'url'=>'/');
        }


        $this->composeto =$requests['email-to'];
        $this->composesubject =$requests['email-subject'];
        $this->composebody =$requests['email-body'];

        if($type=='sendit'){

            $this->mail->send('_contact.emails.mailbox', array('body' =>$this->composebody), function($message)
            {
                $message->sender($this->fromemail, $this->sitename);
                $message->subject($this->composesubject);
                $message->from($this->fromemail, $this->sitename);
                $message->to($this->composeto);
                $message->getSwiftMessage();
            });

        }

        if($type=='sendit'){
            $cator=Categories::byType('mailcat')->where('name_slug', 'sent')->first()->id;
            $catorurl="/admin/mailbox/inbox";
            $catormessage=trans("admin.emailsended");
        }else if($type=='draftsave'){
            $cator=Categories::byType('mailcat')->where('name_slug', 'drafts')->first()->id;
            $catorurl="/admin/mailbox/drafts";
            $catormessage=trans("admin.Savedasdraft");
        }


        $newrecord= new Contacts;
        $newrecord->name="";
        $newrecord->email=$this->composeto;
        $newrecord->subject=$this->composesubject;
        $newrecord->text=$this->composebody;
        $newrecord->category_id=$cator;
        $newrecord->label_id=0;
        $newrecord->read=1;
        $newrecord->save();

        return array('type'=>'success','message'=>$catormessage,'url'=>$catorurl);
    }




}
