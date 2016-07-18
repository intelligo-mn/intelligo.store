<?php

namespace Modu\Http\Controllers;

class FriendController extends Controller {

    public function getIndex() {
        
        $friends = Auth::user()->friends();
        return view('friends.index')
            ->with('friends', $friends);    
    }
}   
