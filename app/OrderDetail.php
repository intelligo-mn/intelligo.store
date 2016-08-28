<?php

namespace app;

/*
 * Antvel - Order Detail Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;

class OrderDetail extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'order_details';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'order_id',
        'product_id',
        'price',
        'quantity',
        'status',
        'delivery_date',
        'rate',
        'rate_comment',
    ];

    protected $appends = ['product'];

    public function order()
    {
        return $this->belongsTo('App\Order');
    }

    public function getProductAttribute()
    {
        return $this->hasOne('App\Product', 'id', 'product_id')->first();
    }
}
