<?php

namespace Modu\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller {

    public function getSignup (){
        return view('auth.signup');    
    }    
    
    public function postSignup(Request $request)
    {
        dd('sign up');
    }
}   
