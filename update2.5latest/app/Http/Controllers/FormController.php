<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class FormController extends Controller
{
    public function __construct(){
        
        parent::__construct();

        $this->middleware('auth');
    }



    public function addnewform(Request $request)
    {

        if(!$request->ajax()){
            return redirect('/');
        }

        if($request->query('addnew')=='text'){

            return view('_forms.__addtextform');

        }else if($request->query('addnew')=='image'){

            return view('_forms.__addimageform');

        }else if($request->query('addnew')=='poll'){

            return view('_forms._buzzypoll.__addpollform');

        }else  if($request->query('addnew')=='embed'){

            return view('_forms.__addembedform');

        }else if($request->query('addnew')=='video'){

            return view('_forms.__addvideoform');

        }else if($request->query('addnew')=='tweet'){

            return view('_forms.__addspecialentryform', [
                'typeofwidget' => 'tweet',
                'titleofwidget' => trans('updates.tweet'),
                'iconofwidget' => 'fa-twitter',
                'urlto' => trans('updates.urltotweet'),

            ]);

        }else  if($request->query('addnew')=='facebookpost'){

            return view('_forms.__addspecialentryform', [
                'typeofwidget' => 'facebookpost',
                'titleofwidget' => trans('updates.facebookpost'),
                'iconofwidget' => 'fa-facebook',
                'urlto' => trans('updates.urltofacebookpost'),

            ]);

        }else if($request->query('addnew')=='instagram'){

            return view('_forms.__addspecialentryform', [
                'typeofwidget' => 'instagram',
                'titleofwidget' => trans('updates.instagram'),
                'iconofwidget' => 'fa-instagram',
                'urlto' => trans('updates.urltoinstagram'),

            ]);

        }else if($request->query('addnew')=='soundcloud'){

            return view('_forms.__addspecialentryform', [
                'typeofwidget' => 'soundcloud',
                'titleofwidget' => trans('updates.soundcloud'),
                'iconofwidget' => 'fa-soundcloud',
                'urlto' => trans('updates.urltosoundcloud'),

            ]);

        }else if($request->query('addnew')=='question'){

            return view('_forms._buzzyquiz.__addquestionform');

        }else  if($request->query('addnew')=='result'){

            return view('_forms._buzzyquiz.__addresultform');

        }else if($request->query('addnew')=='answer'){

            return view('_forms._buzzyquiz.__addanswerform');

        }else if($request->query('addnew')=='pollanswer'){

            return view('_forms._buzzypoll.__addanswerform');

        }

    }
    public function get_content_data(Request $request)
    {

        $url = $request->input('dataurl');


        if(strpos($url, $_SERVER['HTTP_HOST'])){

            $slug = explode('/', $url);

            $post = getposturl("as", $slug[4]);
            if (!$post or $post->type=='quiz') {
                return array('status' => trans('updates.error'), 'errors' => trans('updates.nodata'));
            }


            $data=[];

            $data['headline']=$post->title;
            $data['description']=$post->body;
            $data['preview']=makepreview($post->thumb, 's', 'posts');

            $dataentry=view('posts.editentrylistCreate', ['entrys' => $post->entry])->render();

            $data['entries']=$dataentry;

            return $data;

        }else{

            $homepage = curlit($url);
            if (!$homepage) {
                return array('status' => trans('updates.error'), 'errors' => trans('updates.nodata'));
            }

            $tags = $this->getMetaTags($homepage);

            preg_match_all('#<p[^>]*>(.*)</p>#isU', $homepage, $matches);

            $toReturn="";
            foreach($matches[0] as $key => $name)
            {

             $toReturn = $toReturn.$name;

            }

            $toReturn .= '<center><a href="'.$url.'" title="DoSomething"><img src="http://i.imgur.com/LcnR0X5.png" alt="DoSomething" /></a></center>';

            if(isset($tags['title'])){
                $title=$tags['title'];
            }elseif(isset($tags['twitter:title'])){
                $title=$tags['twitter:title'];
            }elseif(isset($tags['article:title'])){
                $title=$tags['article:title'];
            }else{
                $title="";
            }

            if(isset($tags['og:image'])){
             $image=$tags['og:image'];
            }elseif(isset($tags['twitter:image'])){
                $image=$tags['twitter:image'];
            }elseif(isset($tags['article:image'])){
                $image=$tags['article:image'];
            }elseif(isset($tags['image'])){
                $image=$tags['image'];
            }else{
                $image="";
            }

            if(isset($tags['og:description'])){
             $description=$tags['og:description'];
            }elseif(isset($tags['description'])){
                $description=$tags['description'];
            }elseif(isset($tags['article:description'])){
                $description=$tags['article:description'];
            }else{
                $description="";
            }

            $data['headline']= $title;
            $data['description']=$description;
            $data['preview']=$image;


            $data['entries']='<div class="entry" data-type="text"  data-entry-id="491" >
                                <div class="entryactions"> <button class="button button-red get-button delete-entry"  data-block="entry"><i class="fa fa-trash"></i></button>  <button class="button button-white get-button up-down-trigger up-entry"><i class="fa fa-arrow-up"></i></button>  <button class="button button-white get-button up-down-trigger down-entry"><i class="fa fa-arrow-down"></i></button> </div>
                                <h3><i class="fa fa-file-text"></i> Text</h3>
                                <div class="inpunting ordering">
                                    <button class="order-number button button-gray">1</button>
                                    <input data-type="title" class="cd-input" placeholder="Title (optional)" type="text" value="'.$title.'">
                                </div>
                                <div class="inpunting">
                                    <textarea data-type="body" class="message" id="edit" placeholder="Add some text about this entry." cols="50" rows="10">'.$toReturn.'</textarea>
                                </div>

                                <div class="moredetail text">
                                    <div class="detailhide" style="display:none">
                                        <div class="inpunting">

                                        <input data-type="source" class="cd-input " placeholder="Source (optional)" type="text" value="">

                                        </div>
                                     </div>
                                    <a href="javascript:;" class="trigger"><span class="down">More Details <i class="fa fa-angle-down"></i></span><span class="up">Less Details  <i class="fa fa-angle-up"></i></span></a>
                                 </div>
                            </div>';


            return $data;
        }

    }


   public function getMetaTags($str)
    {
        $pattern = '
      ~<\s*meta\s

      # using lookahead to capture type to $1
        (?=[^>]*?
        \b(?:name|property|http-equiv)\s*=\s*
        (?|"\s*([^"]*?)\s*"|\'\s*([^\']*?)\s*\'|
        ([^"\'>]*?)(?=\s*/?\s*>|\s\w+\s*=))
      )

      # capture content to $2
      [^>]*?\bcontent\s*=\s*
        (?|"\s*([^"]*?)\s*"|\'\s*([^\']*?)\s*\'|
        ([^"\'>]*?)(?=\s*/?\s*>|\s\w+\s*=))
      [^>]*>

      ~ix';

        if(preg_match_all($pattern, $str, $out))
            return array_combine($out[1], $out[2]);
        return array();
    }



}
