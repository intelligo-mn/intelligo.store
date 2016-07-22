<?php

namespace Modu\Http\Controllers;

use Auth;
use Modu\User;
use Illuminate\Http\Request;

class FriendController extends Controller {

    public function getIndex() {
        
        $friends = Auth::user()->friends();
        $requests = Auth::user()->friendRequests();
        
        return view('friends.index')
            ->with('friends', $friends) 
            ->with('requests', $requests);
    }
    
    public function getAdd($username) {
        $user = User::where('username', $username)->first();
        
        if (!$user) {
            return redirect()
                ->route('home')
                ->with('info', 'Хэрэглэгч байхгүй байна');
        }
        
        if (Auth::user()->hasFriendRequestsPending($user) || $user->hasFriendRequestsPending(Auth::user())) {
            return redirect()
                ->route('profile.index', ['username' => $user->username])
                ->with('info', 'Найзын хүсэлт илгээсэн');
        }
        
        if (Auth::user()->isFriendsWith($user)) {
            return redirect()
                ->route('profile.index', ['username' => $user->username])
                ->with('info', 'Найз болсон');
        }
        
        Auth::user()->addFriend($user);
        
        return redirect()
            ->route('profile.index', ['username' => $username])
            ->with('info', 'Найзын хүсэлт илгээсэн');
    }
}   
