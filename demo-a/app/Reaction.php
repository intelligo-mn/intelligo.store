<?php

/*
 * Techstar CMS - Laravel Content Management System
 * Author  Techstar, Inc.
 * Author URI  : https://github.com/techstar-inc
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reaction extends Model
{

    protected $table = 'reactions_icons';

    protected $fillable = [ 'ord', 'icon', 'name', 'reaction_type', 'display'];




}
