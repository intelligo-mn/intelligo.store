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

            return view('_forms._modupoll.__addpollform');

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

            return view('_forms._moduquiz.__addquestionform');

        }else  if($request->query('addnew')=='result'){

            return view('_forms._moduquiz.__addresultform');

        }else if($request->query('addnew')=='answer'){

            return view('_forms._moduquiz.__addanswerform');

        }else if($request->query('addnew')=='pollanswer'){

            return view('_forms._modupoll.__addanswerform');

        }

    }


}
