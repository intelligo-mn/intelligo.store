<?php

/*
 * Techstar CMS - Laravel Content Management System
 * Author  Techstar, Inc.
 * Author URI  : https://github.com/techstar-inc
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pages extends Model
{
    protected $table = 'pages';

    protected $fillable = ['title', 'description', 'text', 'slug', 'footer','lang'];

}
