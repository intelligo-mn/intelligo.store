<?php
namespace app;

use App\Eloquent\Model;
class VirtualProductOrder extends Model
{
    
    protected $table = 'virtual_product_orders';
   
    protected $fillable = [
        'order_id',
        'virtual_product_id',
        'status',
        'email',
    ];
}