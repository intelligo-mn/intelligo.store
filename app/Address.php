<?php

namespace app;

/*
 * Antvel - Address Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'addresses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'line1',
        'line2',
        'phone',
        'name_contact',
        'zipcode',
        'city',
        'country',
        'state',
    ];

    protected $hidden = ['id'];
}
