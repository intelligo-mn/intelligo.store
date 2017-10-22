<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reaction extends Model
{

    protected $table = 'reactions_icons';

    protected $fillable = [ 'ord', 'icon', 'name', 'reaction_type', 'display'];




}
