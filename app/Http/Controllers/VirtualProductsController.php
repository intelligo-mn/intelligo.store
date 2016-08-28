<?php

namespace app\Http\Controllers;

/*
 * Antvel - Virtual Products Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Http\Controllers\Controller;
use App\Product;
use App\VirtualProduct;
use App\VirtualProductOrder;
use Illuminate\Http\Request;

class VirtualProductsController extends Controller
{
    /**
     *	function, to lift the Modal to display the registered keys (Only this seller).
     *
     *	@return view
     */
    public function modalAllKeys()
    {
        return view('products.showKeysVirtuals');
    }

    /**
     *	get keys registered (Only this seller).
     *
     *	@param 	$id 	int|string 	id the virtual product
     *	@param 	$res 	Request 	object to validate the type of request
     *
     *	@return json
     */
    public function showAllKeys($id, Request $res)
    {
        if (!$res->wantsJson()) {
            return redirect()->back();
        }

        $product = Product::find($id);

        if (!count($product->toArray())) {
            return json_encode(['message' => trans('globals.error_not_available')]);
        }

        if ($product->user_id != \Auth::id()) {
            return json_encode(['message' => trans('globals.not_access')]);
        }

        $VirtualProduct = VirtualProduct::where('product_id', $product->id)->where('status', '=', 'open')->get();

        if (!count($VirtualProduct->toArray())) {
            return json_encode(['message' => trans('globals.error_not_available')]);
        }

        return $VirtualProduct->toJson();
    }

    /**
     *	delete key registered (Only this seller).
     *
     *	@param	$id 	int|string 	id the virtual product
     *	@param	$res 	Request 	object to validate the type of request, action
     *
     *	@return	json
     */
    public function deleteKey($id, Request $res)
    {
        if (!$res->wantsJson()) {
            return redirect()->back();
        }

        $VirtualProduct = VirtualProduct::find($id);

        if (!count($VirtualProduct->toArray())) {
            return json_encode(['message' => trans('globals.error_not_available')]);
        }

        $product = Product::find($VirtualProduct->product_id);

        if (!count($product->toArray())) {
            return json_encode(['message' => trans('globals.error_not_available')]);
        }

        if ($product->user_id != \Auth::id()) {
            return json_encode(['message' => trans('globals.not_access')]);
        }

        $VirtualProductOrder = VirtualProductOrder::where('virtual_product_id', $VirtualProduct->id)->get();

        if (count($VirtualProductOrder->toArray()) > 0) {
            return json_encode(['message' => trans('product.virtualProductsController_controller.key_been_sold')]);
        }

        $VirtualProduct->status = 'cancelled';

        $VirtualProduct->save();

        $stock = count(VirtualProduct::where('product_id', $product->id)->where('status', 'open')->get()->toArray());

        $product->stock = $stock;

        if ($stock == 0) {
            $product->status = 0;
        }

        $product->save();

        return json_encode(['success' => trans('product.controller.saved_successfully')]);
    }
}
