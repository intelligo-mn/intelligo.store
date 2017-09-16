<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Contacts;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Mail\Mailer;
class ContactController extends Controller
{

    public function __construct(Mailer $mailer)
    {
        $this->mail =$mailer;
        parent::__construct();
    }


    public function index()
    {
        $labels=Categories::byType('maillabel')->lists('name','id' );

        return view('_contact.contactpage', compact('labels'));
    }


    public function create(Request $request)
    {
        $ll=$request->all();



        $v = \Validator::make($ll, [
            'name'      => 'required',
            'email'     => 'required|email',
            'subject'   => 'required|min:5|max:255',
            'text'      => 'required|max:1500',
            'label'     => 'required',
        ]);

        if ($v->fails()) {
            \Session::flash('error.message', $v->errors()->first());
            return redirect()->back()->withInput($ll);
        }

        if(getcong('BuzzyContactCopyEmail') > ""){
            if(!isset($ll['g-recaptcha-response'])){
                \Session::flash('error.message', trans('buzzycontact.yourresponseincorrect'));
                return redirect()->back()->withInput($ll);
            }

            $content = curlit('https://www.google.com/recaptcha/api/siteverify?secret='.getcong('reCaptchaSecret').'&response='.$ll['g-recaptcha-response'].'&remoteip='.$_SERVER['REMOTE_ADDR']);

            $res= json_decode($content, true);

            if($res['success'] == false){
                \Session::flash('error.message', trans('buzzycontact.yourresponseincorrect'));
                return redirect()->back()->withInput($ll);
            }

            $this->composesubject=$ll['subject'];
            $this->fromemail=$ll['email'];
            $this->composeto = getcong('BuzzyContactCopyEmail')>"" ? getcong('BuzzyContactCopyEmail') : getcong('siteemail');
            $this->sitename =getcong('BuzzyContactName')>"" ? getcong('BuzzyContactName') : getcong('sitename');


            $this->mail->send('_contact.emails.mailbox', array('body' => $ll['text']), function($message)
            {
                $message->sender($this->fromemail, $this->sitename);
                $message->subject($this->composesubject);
                $message->from($this->fromemail, $this->sitename);
                $message->to($this->composeto);
                $message->getSwiftMessage();
            });
        }


        $cat=Categories::byType('mailcat')->where('name_slug', 'inbox')->first();
        $newrecord= new Contacts;
        $newrecord->name=$ll['name'];
        $newrecord->email=$ll['email'];
        $newrecord->subject=$ll['subject'];
        $newrecord->text=$ll['text'];
        $newrecord->category_id=$cat->id;
        $newrecord->label_id=$ll['label'];
        $newrecord->read=0;
        $newrecord->save();



        \Session::flash('success.message', trans('buzzycontact.successgot'));
        return redirect('/');
    }

}
