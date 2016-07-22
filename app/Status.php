<?php

namespace Modu;

use Illuminate\Database\Eloquent\Model;

class Status extends Model 
{
    protected $table = 'statuses';
    
    protected $fillable = [
        'body'    
    ];
    
    public function user () {
        return $this->belongsTo('Modu\User', 'user_id');    
    }
        
}








