<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class FormController extends Controller
{
    public function __construct(){

        $this->middleware('auth');
    }



    public function addnewform(Request $request)
    {
        if($request->query('addnew')=='text'){

            return view('_forms.__addtextform');

        }else if($request->query('addnew')=='image'){

            return view('_forms.__addimageform');

        }else if($request->query('addnew')=='poll'){

            return view('_forms.__addpollform');

        }else  if($request->query('addnew')=='embed'){

            return view('_forms.__addembedform');

        }else if($request->query('addnew')=='video'){

            return view('_forms.__addvideoform');

        }


    }


}
