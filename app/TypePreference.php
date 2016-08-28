<?php

namespace app;

/*
 * Antvel - Type Preferences Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;

class TypePreference extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'type_preferences';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'type',
        'status',
    ];
}
