<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Widgets extends Model
{
    protected $table = 'widgets';

    protected $fillable = ['key', 'text', 'display', 'type'];
}
