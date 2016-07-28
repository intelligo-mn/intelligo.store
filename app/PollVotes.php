<?php

namespace App;

use Auth;
use Illuminate\Database\Eloquent\Model;

class PollVotes extends Model
{
    protected $table = 'poll_votes';

    protected $fillable = [ 'post_id', 'user_id', 'option_id'];



    public function scopeVoteOnPost($query)
    {
        if(!Auth::check()){
            return false;
        }

        return $query->where('user_id', Auth::user()->id);
    }

    public function scopeCurrentUserHasVoteOnPost($query, $post)
    {
        if(!Auth::check()){
            return NULL;
        }

        return $query->where('user_id', Auth::user()->id)->where('post_id', $post);
    }
}
