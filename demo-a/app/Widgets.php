<?php

/*
 * Techstar CMS - Laravel Content Management System
 * Author  Techstar, Inc.
 * Author URI  : https://github.com/techstar-inc
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

class Widgets extends Model
{
    protected $table = 'widgets';

    protected $fillable = ['key', 'text', 'display', 'type'];
}
