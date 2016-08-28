<?php

namespace app\Http\Controllers;

/*
 * Antvel - Virtual Products Orders Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Http\Controllers\Controller;
use App\Order;
use App\OrderDetail;
use App\Product;
use App\User;
use App\VirtualProduct;
use App\VirtualProductOrder;
use Illuminate\Http\Request;

class VirtualProductOrdersController extends Controller
{
    /**
     *	edit the number of key registered for email.
     *
     *	@param 	string|int 	id product
     *	@param 	Request 	object to validate the type of request|action to ejecute
     *
     *	@return json
     */
    public function editKey($id, Request $request)
    {
        if (!$request->wantsJson()) {
            return ['message' => trans('globals.error_not_available')];
        }
        if (!$request->has('email')) {
            return ['message' => trans('globals.error_not_available')];
        }
        $cart = Order::ofType('cart')->select('id', 'status')->where('user_id', \Auth::id())->first();
        if (!$cart) {
            return ['message' => trans('globals.error_not_available')];
        }
        $product = Product::select('id', 'stock')->find($id);
        if (!$product) {
            return ['message' => trans('globals.error_not_available')];
        }
        $order = OrderDetail::where('order_id', $cart->id)->where('product_id', $product->id)->first();
        if (!$order) {
            return ['message' => trans('globals.error_not_available')];
        }
        $virtual = VirtualProduct::select('id')->where('product_id', $product->id)->first();
        if ($request->has('delete')) {
            $virtualOrder = VirtualProductOrder::where('virtual_product_id', $virtual->id)->where('email', $request->input('email'))->delete();
            $num2 = VirtualProductOrder::where('virtual_product_id', $virtual->id)->where('status', 1)->get()->toArray();
            if (!count($num2)) {
                $order->delete();
            } else {
                $order->quantity = count($num2);
                $order->save();
            }

            return ['all' => true];
        } elseif ($request->has('decrement')) {
            $virtualOrder = VirtualProductOrder::where('virtual_product_id', $virtual->id)->where('email', $request->input('email'))->where('status', 1)->first();
            $virtualOrder->delete();
            $num2 = VirtualProductOrder::where('virtual_product_id', $virtual->id)->where('status', 1)->get()->toArray();
            if (!count($num2)) {
                $order->delete();
            } else {
                $order->quantity = count($num2);
                $order->save();
            }
            $num = VirtualProductOrder::where('virtual_product_id', $virtual->id)->where('email', $request->input('email'))->where('status', 1)->get()->toArray();
            if (count($num)) {
                return ['delete' => true, 'num' => count($num)];
            }

            return ['all' => true];
        } elseif ($request->has('increment')) {
            $num2 = VirtualProductOrder::where('virtual_product_id', $virtual->id)->where('status', 1)->get()->toArray();
            if ((count($num2) + 1) > $product->stock) {
                return ['message' => trans('product.virtualProductOrdersController_controller.no_stock')];
            }
            $virtualOrder = new VirtualProductOrder();
            $virtualOrder->order_id = $order->order_id;
            $virtualOrder->status = 1;
            $virtualOrder->email = $request->input('email');
            $virtualOrder->virtual_product_id = $virtual->id;
            $virtualOrder->save();
            $order->quantity = (count($num2) + 1);
            $order->save();
            $num = VirtualProductOrder::where('virtual_product_id', $virtual->id)->where('email', $request->input('email'))->where('status', 1)->get()->toArray();

            return ['insert' => true, 'num' => count($num)];
        }

        return ['message' => trans('globals.error_not_available')];
    }

    public function modalSeeKeysPurchased()
    {
        return view('orders.showKeysPurchased');
    }

    public function showKeyVirtualProductPurchased($idProduct, $idOrder, Request $request)
    {
        if (!$request->wantsJson()) {
            return ['message' => trans('globals.error_not_available')];
        }
        $product = Product::find($idProduct);
        $order = Order::find($idOrder);
        $virtual = VirtualProduct::select('id')->where('product_id', $idProduct)->get()->toArray();
        if (!$product || !$order || !count($virtual)) {
            return ['message' => trans('globals.error_not_available'), 'id' => false];
        }
        if ($order->user_id != \Auth::id()) {
            return ['message' => trans('globals.error_not_available'), 'my' => false];
        }
        $virtualOrder = VirtualProductOrder::where('order_id', $order->id)->whereIn('virtual_product_id', $virtual)->get();
        if (!count($virtualOrder)) {
            return ['message' => trans('globals.error_not_available'), 'order' => false];
        }
        $user = User::find(\Auth::id());
        $return = ['info' => [
            'name' => $product->name,
            'des'  => $product->description,
            'num'  => count($virtualOrder),
        ]];
        foreach ($virtualOrder as $row) {
            if (isset($return['users'][$row['email']])) {
                $key = VirtualProduct::find($row['virtual_product_id']);
                $return['users'][$row['email']]['keys'][] = $key['key'];
            } else {
                $key = VirtualProduct::find($row['virtual_product_id']);
                $return['users'][$row['email']]['keys'][0] = $key['key'];
                $return['users'][$row['email']]['title'] = ($row['email'] == $user['email']) ? 'Your Keys' : 'Keys sent to '.$row['email'];
            }
        }

        return $return;
    }
}
