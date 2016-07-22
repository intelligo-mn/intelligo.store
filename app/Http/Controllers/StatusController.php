<?php

namespace Modu\Http\Controllers;

use Auth;
use Modu\User;
use Illuminate\Http\Request;

class StatusController extends Controller {

    public function postStatus (Request $request){
        $this->validate($request, [
            'status' => 'required|max:45', 
        ]);
        
        Auth::user()->statuses()->create([
            'body' => $request->input('status'),    
        ]);
        
        return redirect()
            ->route('home')
            ->with('info', 'Статус нийтлэгдлээ');
    }    
}   
