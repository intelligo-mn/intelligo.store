<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Reactions extends Model
{
    protected $table = 'reactions';

    protected $fillable = [ 'post_id', 'user_id', 'reaction_type'];

    public function scopeVoteOnPost($query)
    {
        if(Auth::check()){
            $auser = Auth::user()->id;
        }else{
            $auser = \Request::ip();
        }

        return $query->where('user_id', $auser);
    }

    public function scopeCurrentUserHasVoteOnPost($query, $post)
    {
        if(Auth::check()){
            $auser = Auth::user()->id;
        }else{
            $auser = \Request::ip();
        }

        return $query->where('user_id', $auser)->where('post_id', $post);
    }
}
