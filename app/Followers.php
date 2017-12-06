<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Followers extends Model
{
    protected $table = 'followers';

    protected $fillable = ['user_id', 'followed_id'];



    public function follower()
    {
        return $this->belongsTo('App\User', 'user_id');
    }


    public function followed()
    {
        return $this->belongsTo('App\User', 'followed_id');
    }




    public function scopeCurrentUserFollow($query)
    {
        if(!\Auth::check()){
            return null;
        }

        return $query->where("user_id", \Auth::user()->id);
    }
}
