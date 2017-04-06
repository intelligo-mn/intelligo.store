<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    //

    protected $table = 'userTime';


    protected $fillable = [
        'sector',
        'service',
        'service_date',
        'userName',
        'userNumber',
        'addition',
        'description',
    ];
}
