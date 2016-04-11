<?php

namespace app;

/*
 * Modu - UserPoints Model
 *
 * @author  Tortuvshin Byambaa <toroo.byamba@gmail.com>
 */

use Illuminate\Database\Eloquent\Model;

class UserPoints extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user_points';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'action_type_id',
        'source_id',
        'points',
    ];
}
