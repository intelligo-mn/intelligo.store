<?php

/*
 * Techstar CMS - Laravel Content Management System
 * Author  Techstar, Inc.
 * Author URI  : https://github.com/techstar-inc
 */

namespace App;

use Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class PollVotes extends Model
{
    protected $table = 'poll_votes';

    protected $fillable = [ 'post_id', 'user_id', 'option_id'];


    public function scopeVoteOnPost($query)
    {
        if(Auth::check()){
            $auser = Auth::user()->id;
        }else{
            $auser = $_SERVER['REMOTE_ADDR'];
        }

        return $query->where('user_id', $auser);
    }

    public function scopeCurrentUserHasVoteOnPost($query, $post)
    {
        if(Auth::check()){
            $auser = Auth::user()->id;
        }else{
            $auser = $_SERVER['REMOTE_ADDR'];
        }

        return $query->where('user_id', $auser)->where('post_id', $post);
    }
}
