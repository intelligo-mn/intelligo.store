<?php

namespace app;

/*
 * Antvel - Free Products Participants Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;

class FreeProductParticipant extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'freeproduct_participants';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'freeproduct_id',
        'user_id',
        'status',
    ];

    public function scopeMyParticipations($query, $freeproduct_id)
    {
        if (\Auth::user()) {
            return $query->where('freeproduct_id', $freeproduct_id)->where('user_id', \Auth::user()->id);
        }
    }
}
