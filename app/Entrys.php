<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Entrys extends Model
{
    use SoftDeletes;

    protected $table = 'entrys';

    protected $fillable = ['post_id', 'user_id', 'order', 'type', 'title', 'image', 'video', 'body', 'source', 'deleted_at'];

    protected $dates = ['deleted_at'];

    protected $softDelete = true;

    public function owner(){

        return $this->belongsTo("App\User");

    }


    /**
     * Post belongs to a posts
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post()
    {
        return $this->belongsTo('App\Posts');
    }



    /**
     * Poll option has many votes
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function vote()
    {
        return $this->hasMany('App\PollVotes', 'option_id');

    }
}
