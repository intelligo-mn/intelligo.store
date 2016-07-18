<?php

namespace Modu\Http\Controllers;

use Auth;

class FriendController extends Controller {

    public function getIndex() {
        
        $friends = Auth::user()->friends();
        $requests = Auth::user()->friendRequests();
        
        return view('friends.index')
            ->with('friends', $friends) 
            ->with('requests', $requests);
    }
}   
