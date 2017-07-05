<?php
namespace app;

use App\Eloquent\Model;
class VirtualProduct extends Model
{
    protected $table = 'virtual_products';
   
    protected $fillable = [
        'product_id',
        'key',
        'url',
        'amount',
        'expiration_date',
    ];
}