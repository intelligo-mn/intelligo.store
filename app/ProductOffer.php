<?php

namespace app;

/*
 * Antvel - Products Offers Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;

class ProductOffer extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'product_offers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_id',
        'day_start',
        'day_end',
        'percentage',
        'price',
        'quantity',
    ];
}
