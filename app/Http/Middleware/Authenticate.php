<?php

namespace app\Http\Middleware;

use App\Http\Controllers\OrdersController;
use Closure;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     * @param string|null              $guard
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->guest()) {
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            } else {
                return redirect()->guest('auth/login');
            }
        }

        /*
         * If there is products into the guest cart, its content is transferred
         * to a logged user 'cart' order.
         */

        if (\Illuminate\Support\Facades\Session::has('user.cart_content')) {
            $ordersController = new OrdersController();
            $ordersController->fromGuestToUser($ordersController);
            unset($ordersController);
        }

        return $next($request);
    }
}
