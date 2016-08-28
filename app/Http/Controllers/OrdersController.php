<?php

namespace app\Http\Controllers;

/*
 * Antvel - Orders Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Address;
use App\Business;
use App\Comment;
use App\Helpers\productsHelper;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProductsController as ProductsController;
use App\Log;
use App\Notice;
use App\Order;
use App\OrderDetail;
use App\Product;
use App\Repositories\OrderRepository;
use App\User;
use App\VirtualProduct;
use App\VirtualProductOrder;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class OrdersController extends Controller
{
    /**
     * The order repository instance.
     *
     * @var OrderRepository
     */
    protected $order;

    /**
     * Create a new controller instance.
     *
     * @param OrderRepository $order
     *
     * @return void
     */
    public function __construct(OrderRepository $order)
    {
        $this->middleware('auth');

        $this->order = $order;
    }

    /**
     * Adds the selected product to the BASE cart.
     *
     * @param string $destination type or order ('cart','later',etc)
     * @param int    $productId   The id of the product to be added
     *
     * @return Response
     */
    public function addToOrder($destination, $productId, Request $request)
    {
        $quantity = $request->get('quantity');

        //if there is not quantity requested, the value is 1 as defect
        if (!$quantity) {
            $quantity = 1;
        }

        //making sure if the product requested exists, otherwise, we throw a http exception
        try {
            $product = Product::findOrFail($productId);
        } catch (ModelNotFoundException $e) {
            throw new NotFoundHttpException();
        }

        $user = \Auth::user();

        //checking if the user is logged
        if ($user) {
            $basicCart = Order::ofType($destination)->where('user_id', $user->id)->first();

            if (!$basicCart) {
                $basicCart = new Order();
                $basicCart->user_id = $user->id;
                $basicCart->type = $destination;
                $basicCart->status = 'open';
                $basicCart->save();

                $log = Log::create([
                    'action_type_id' => '1',
                    'details'        => $destination,
                    'source_id'      => $basicCart->id,
                    'user_id'        => $user->id,
                ]);
            }

            //if the request has an email address, we keep it, otherwise we use the user one
            if ($request->has('email')) {
                $v = Validator::make($request->all(), ['email' => 'required|email']);
                if ($v->fails()) {
                    $email = $user->email;
                } else {
                    $email = $request->input('email');
                }
            } else {
                $email = $user->email;
            }

            //creating visrtual order
            if ($destination != 'wishlist') {
                $this->addToCartVirtualsProduct($product, $email, $basicCart->id, $quantity);
            }

            //checking if the user already has a product so it can be added
            $orderDetail = OrderDetail::where('order_id', $basicCart->id)
                ->where('product_id', $product->id)
                ->first();

            //creating the order detail
            if ($orderDetail) {
                $orderDetail->price = $product->price;
                $orderDetail->quantity = $orderDetail->quantity + $quantity;
            } else {
                $orderDetail = new OrderDetail();
                $orderDetail->order_id = $basicCart->id;
                $orderDetail->product_id = $product->id;
                $orderDetail->price = $product->price;
                $orderDetail->quantity = $quantity;
                $orderDetail->status = 1;
            }

            //saving detail order
            $orderDetail->save();

            $log = Log::create([
                'action_type_id' => '4',
                'details'        => $basicCart->id,
                'source_id'      => $orderDetail->id,
                'user_id'        => $user->id,
            ]);

            //callback url
            if ($destination == 'wishlist') {
                Session::push('message', trans('store.productAddedToWishList'));

                return redirect()->route('orders.show_wish_list');
            } elseif ($destination == 'later') {
                Session::push('message', trans('store.productsSavedForLater'));

                return redirect()->route('products.show', [$productId]);
            } else {
                Session::push('message', trans('store.productAdded'));

                return redirect()->route('orders.show_cart');
            }
        }

        //creating the user guest shopping cart
        else {

            /**
             * $user_cart is used to keep track the user shopping cart.
             *
             * @var [array]
             */
            $user_cart = Session::get('user.cart');

            /*
             * $user_cart is used to keep track the user shopping cart details
             * @var [array]
             */
            $user_cart_content = Session::get('user.cart_content');

            //Checking if the user has a session cart, otherwise, it's created
            if (!is_array($user_cart)) {
                $user_cart = [];
            }

            //Checking if the user has content in the shopping cart, otherwise, it's added.
            if (!is_array($user_cart_content)) {
                $user_cart_content = [];
            }

            //Checking if the user has the product in the shopping cart,  otherwise, it's pushed up
            if (!in_array($productId, $user_cart)) {
                array_push($user_cart, $productId);
            }

            //Checking if the user has quantity on the selected product, if so, it's quantity is updated, otherwise, 1 is added as defect.
            if (!isset($user_cart_content[$productId])) {
                $user_cart_content[$productId] = $quantity;
            } else {
                $user_cart_content[$productId] += $quantity;
            }

            //Saving session for user logged
            Session::put('user.cart_content', $user_cart_content);
            Session::put('user.cart', $user_cart);
            Session::save();
            Session::push('message', trans('store.productAdded'));

            if ($destination == 'wishlist') {
                /*
                 * flashWishList lets you save the product wished after login action.
                 * This var will be delete automatic in show show wishlist route.
                 */
                Session::put('flashWishList.productId', $productId);
                Session::put('flashWishList.quantity', $quantity);
                Session::save();

                return redirect()->route('orders.show_wish_list');
            } else {
                return redirect()->route('orders.show_cart');
            }
        }
    }

    /**
     * Allows adding products to a specific order and create new wish lists.
     *
     * @param [type]  $orderId   [order id]
     * @param [type]  $productId [product id]
     * @param Request $request   [laravel object]
     */
    public function addToOrderById($orderId, $productId, Request $request)
    {
        $user = \Auth::user();
        $quantity = $request->get('quantity') ? $request->get('quantity') : 1;

        //checking whether the product required exist or not
        try {
            $product = Product::findOrFail($productId);
        } catch (ModelNotFoundException $e) {
            throw new NotFoundHttpException();
        }

        //checking whether the order required exist or not
        try {
            $order = Order::findOrFail($orderId);
        } catch (ModelNotFoundException $e) {
            throw new NotFoundHttpException();
        }

        if ($order) {
            //checking the order to make sure whether it needs an added product increase its quantity
            $orderDetail = OrderDetail::where('order_id', $order->id)
                ->where('product_id', $product->id)
                ->first();

            //if the product exists, its quantity is increased
            if ($orderDetail) {
                $orderDetail->price = $product->price;
                $orderDetail->quantity = $orderDetail->quantity + $quantity;
            }
            //otherwise, the order details is created from the product received
            else {
                $orderDetail = new OrderDetail();
                $orderDetail->order_id = $order->id;
                $orderDetail->product_id = $product->id;
                $orderDetail->price = $product->price;
                $orderDetail->quantity = $quantity;
                $orderDetail->status = 1;
            }

            $orderDetail->save();

            $log = Log::create(
                [
                    'action_type_id' => '4',
                    'details'        => $order->id,
                    'source_id'      => $orderDetail->id,
                    'user_id'        => $user->id,
                ]
            );

            Session::push('message', trans('store.productAddedToWishList').', '.trans('globals.reference_label').$order->description);
        } else {
            Session::push('messageClass', 'alert-danger');
            Session::push('message', trans('store.wishlist_no_exists').', '.trans('globals.reference_label').$order->description);
        }

        return redirect()->route('orders.show_wish_list_by_id', [$order->id]);
    }

    /**
     * Show the create wish list form.
     *
     * @return view for orders.cart
     */
    public function createWishList()
    {
        return view('orders.createWishList');
    }

    /**
     * Create the new wishList with a description.
     *
     * @return Response JSON
     */
    public function storeWishList(Request $request)
    {
        $description = $request->get('description');

        $user = \Auth::user();

        if ($user) {
            //checking if the default wish list exists, otherwise, it is created automatically
            $defaultList = Order::ofType('wishlist')
                ->ofUser($user->id)
                ->select(['id', 'type', 'description', 'status'])
                ->first();

            //creating the default wish list, taking in account that it does not exist
            if (!$defaultList) {
                $default = new Order();
                $default->user_id = $user->id;
                $default->description = '';
                $default->type = 'wishlist';
                $default->status = 'open';
                $default->save();
            }

            //checking if the wish list requested is not in our records
            $newList = Order::ofType('wishlist')
                ->ofUser($user->id)
                ->where('description', $description)
                ->select(['id', 'type', 'description', 'status'])
                ->first();

            //if the wish list requested is in our records, a error is sent
            if ($newList) {
                Session::push('messageClass', 'alert-danger');
                Session::push('message', trans('store.form_create_list_view.message_fail'));

                return \Response::json(['success' => true], 200);
            } else {
                //Creates the new wishlist with the provided description
                $newList = new Order();
                $newList->user_id = $user->id;
                $newList->description = $description;
                $newList->type = 'wishlist';
                $newList->status = 'open';
                $newList->save();

                Session::push('message', trans('store.form_create_list_view.message_success'));

                return \Response::json(['success' => true], 200);
            }
        }
    }

    /**
     * Show the contents of a wish list.
     *
     * @return view for orders.wish
     */
    public function showWishList($id = '')
    {
        /*
         * Checking if there is a product in flashWishList, if so, it will be saved into the basic wish list.
         * This process happens just before the user add a product to wishlist being not logged.
         * flashWishList will be deleted after being used into addToOrder method
         */
        if (Session::get('flashWishList') !== null) {
            $this->addToOrder('wishlist', Session::get('flashWishList.productId'), new Request());
            Session::forget('flashWishList');
            Session::save();
        }

        //saving added to wishlist message (it happens when the product is added to wishlist, and the method call this one)
        Session::forget('suggest-listed');
        if (Session::has('message')) {
            Session::push('message', Session::get('message'));
        }

        $user = \Auth::user();

        $productsHelper = new productsHelper();

        $suggestions = [];

        $hasWishList = true;

        $hasLaterCart = true;

        $wishListName = trans('store.basic_wish_list');

        if ($user) {
            /*
             * it is used to verify whether the order required exist or not.
             * if the order exists, its content is returned, otherwise,
             * the basic wish list is retrieved
             * @var string
             */
            $order = '';

            /*
             * validating if there's a order requested.
             * if it fails, there will be an 404 exception threw
             */
            try {
                $order = Order::findOrFail($id);
            } catch (ModelNotFoundException $e) {
                if (trim($id) != '') {
                    throw new NotFoundHttpException();
                }
            }

            //if the user requires a specific wish list, its details will be provided
            if ($order) {
                $cart = Order::ofType('wishlist')
                    ->with('details')
                    ->where('user_id', $user->id)
                    ->where('id', $order->id)
                    ->first();

                /**
                 * $wishListName will have the wish list name to be showed in the view.
                 *
                 * @var string
                 */
                $wishListName = $cart ? $cart->description : $wishListName;
            }

            //if the required wish list does not exist, the default one  will beprovided
            else {
                $cart = Order::ofType('wishlist')
                    ->with('details')
                    ->where('user_id', $user->id)
                    ->first();
            }

            /*
             * listing the user wish lists saved in his account.
             * if there was a specific wish list requiered, it will be excluded from the directory list
             */

            $wishLists = Order::select(['id', 'user_id', 'description'])
                ->ofType('wishlist')
                ->with('details')
                ->where('description', '<>', '')
                ->where('user_id', $user->id)
                ->where('id', '<>', $cart ? $cart->id : '')
                ->take(5)
                ->get();

            //products list saved for later
            $laterCart = Order::ofType('later')
                ->with('details')
                ->where('user_id', $user->id)
                ->first();

            //evaluating wish list
            if ($cart) {
                if ($cart->details && $cart->details->count() > 0) {
                    //saving the ids selected to not include them into suggestions.
                    $productsHelper->setToHaystack($cart->details, 'product_id');
                } else {
                    $hasWishList = false;
                }
            } else {
                $hasWishList = false;
            }

            //evaluating wish list
            if ($laterCart) {
                if ($laterCart->details && $laterCart->details->count() > 0) {
                    //saving the ids selected to not include them into suggestions.
                    $productsHelper->setToHaystack($laterCart->details, 'product_id');
                } else {
                    $hasLaterCart = false;
                }
            } else {
                $hasLaterCart = false;
            }
        } //if ($user)

        else {
            return redirect()->route('/auth/login');
        }

        $panel = [
            'center' => ['width' => '12'],
        ];

        //suggestions based on cart content
        $suggestions = ProductsController::getSuggestions(['preferences_key' => Session::get('suggest-listed'), 'limit' => 4]);

        Session::forget('suggest-listed');

        return view('orders.wish',
            compact(
                'cart',
                'user',
                'panel',
                'suggestions',
                'cart',
                'laterCart',
                'wishLists',
                'wishListName',
                'hasWishList',
                'hasLaterCart'
            )
        );
    }

    /**
     * wish list directory.
     *
     * @return view for orders.cart
     */
    public function wishListDirectory()
    {
        $user = \Auth::user();

        if ($user) {
            $orders = Order::ofType('wishlist')
                ->with('details')
                ->where('user_id', $user->id)
                ->orderBy('id', 'ASC')
                ->get();
        } else {
            return redirect()->route('/auth/login');
        }

        $panel = [
            'center' => ['width' => '12'],
        ];

        //suggestionst
        $suggestions = ProductsController::getSuggestions(['limit' => 4]);

        return view('orders.wishListsDirectory', compact('orders', 'panel', 'suggestions'));
    }

    /**
     * Show the contents of the user Cart.
     *
     * @return view for orders.cart
     */
    public function showCart()
    {
        $user = \Auth::user();

        /*
         * $suggest-listed keeps tracking listed products to control the suggestion view
         */
        Session::forget('suggest-listed');

        /**
         * $totalAmount saves the shopping cart total amount.
         *
         * @var decimal
         */
        $totalAmount = 0;

        /**
         * $totalItems saves the shopping cart total items.
         *
         * @var int
         */
        $totalItems = 0;

        if ($user) {
            /**
             * $cart has all the shopping cart information, which comes from an type of order called "cart".
             *
             * @var [type]
             */
            $cart = Order::ofType('cart')->where('user_id', $user->id)->with('details')->first();

            /**
             * $laterCart has all the shopping cart (saved for later) information, which comes from an type of order called "later".
             *
             * @var [type]
             */
            $laterCart = Order::ofType('later')->where('user_id', $user->id)->with('details')->first();

            /**
             * $validation_message keeps the message for those items that has a different stock since they were added to a shopping cart.
             *
             * @var array
             */
            $validation_message = [];

            if ($cart) {
                foreach ($cart->details as $detail) {
                    $totalItems += $detail->quantity;
                    $totalAmount += ($detail->quantity * $detail->price);

                    if ($detail->quantity > $detail->product->stock) {
                        $detail->quantity = $detail->product->stock;
                        $detail->save();
                        $validation_message[] = trans('store.cart_view.item_changed_stock1').' '.$detail->product->name.' '.trans('store.cart_view.item_changed_stock2');
                    }

                    //saving the product listed to not show it on suggestion view
                    Session::push('suggest-listed', $detail->product_id);
                }

                //saving the changes made to suggest-listed session var
                Session::save();
            }

            //if there are validation messages to show, they'll be saved in message session var

            if (count($validation_message) > 0) {
                Session::push('message', $validation_message);
            }
        } else {
            /**
             * $session_cart keeps saved all the items added to the shopping cart befor the user ins logged.
             *
             * @var [array]
             */
            $session_cart = Session::get('user.cart');

            if (is_array($session_cart)) {
                $session_details = Session::get('user.cart_content');

                $cart_details = [];

                $validation_message = [];

                foreach ($session_details as $id => $quantity) {
                    $product = Product::find($id);

                    $totalAmount += $product->price;

                    if ($quantity > $product->stock) {
                        $quantity = $product->stock;

                        $validation_message[] = trans('store.cart_view.item_changed_stock1').' '.$product->name.' '.trans('store.cart_view.item_changed_stock2');
                    }

                    $cart_details[] = [
                        'id'         => 0,
                        'order_id'   => 0,
                        'product_id' => $product->id,
                        'price'      => $product->price,
                        'quantity'   => $quantity,
                        'product'    => [
                            'id'          => $product->id,
                            'name'        => $product->name,
                            'description' => $product->description,
                            'price'       => $product->price,
                            'stock'       => $product->stock,
                            'type'        => $product->type,
                            'features'    => [
                                'images' => [
                                    $product->FirstImage,
                                ],
                            ],
                        ],
                    ];

                    Session::push('suggest-listed', $product->id);
                }

                if (count($validation_message) > 0) {
                    Session::push('message', $validation_message);
                }

                $cart = [
                    'id'      => 0,
                    'user_id' => 0,
                    'details' => $cart_details,
                ];

                $totalItems = count($cart_details);
            } else {
                $cart = [
                    'id'      => 0,
                    'user_id' => 0,
                    'details' => [],
                ];
            }

            $laterCart = [];
        }

        $panel = [
            'center' => ['width' => '12'],
        ];

        //suggestions based on cart content
        $suggestions = ProductsController::getSuggestions(['preferences_key' => Session::get('suggest-listed'), 'limit' => 4]);

        Session::forget('suggest-listed');

        return view('orders.cart', compact('cart', 'user', 'panel', 'laterCart', 'suggestions', 'totalItems', 'totalAmount'));
    }

    /**
     * Removes the selected item from the cart.
     *
     * @param string $orderName type or order ('cart','later',etc)
     * @param int    $productId Product id to be removed from the order
     *
     * @return Redirects back to de cart
     */
    public function removeFromOrder($orderName, $productId, $idOrder = '')
    {
        $product = Product::findOrFail($productId);
        $user = \Auth::user();

        if (!$user) {
            $cart_content = Session::get('user.cart_content');
            unset($cart_content[$productId]);
            Session::put('user.cart_content', $cart_content);

            return redirect()->route('orders.show_cart');
        }

        $basicCart = Order::ofType($orderName)->where('user_id', $user->id);

        if ($idOrder != '') {
            $basicCart = $basicCart->where('id', $idOrder);
        }

        $basicCart = $basicCart->first();

        if (!($basicCart)) {
            Session::push('message', trans('store.productNotFound'));
        } else {
            if ($product->type != 'item') {
                switch ($product->type) {
                    case 'key':
                        $idVirtual = VirtualProduct::where('product_id', $product->id)->where('status', 'cancelled')->first();
                        VirtualProductOrder::where('virtual_product_id', $idVirtual->id)->where('order_id', $basicCart->id)->delete();
                    break;
                }
            }
            $orderDetail = OrderDetail::where('order_id', $basicCart->id)->where('product_id', $product->id)->first();
            $orderDetail->delete();

            Session::push('message', trans('store.productDeleted'));
        }

        if (($orderName == 'wishlist') || ($orderName == 'later')) {
            return redirect()->route('orders.show_wish_list');
        } else {
            return redirect()->route('orders.show_cart');
        }
    }

    /**
     * Removes the selected item from the cart, and stores it back in the Later Cart.
     *
     * @param int $origin      type of the origin order ('cart','later',etc)
     * @param int $destination type of the destination order ('cart','later',etc)
     * @param int $productId   of the product
     *
     * @return Redirects back to de cart
     */
    public function moveFromOrder($origin, $destination, $productId)
    {
        /*
         * validating if the product requested is valid.
         * if it fails, there will be an 404 exception threw
         */
        try {
            $product = Product::findOrFail($productId);
        } catch (ModelNotFoundException $e) {
            throw new NotFoundHttpException();
        }

        $user = \Auth::user();

        /**
         * $originType allows tracking the type of origin, if it is coming from a specific wish list.
         *
         * @var string
         */
        $originType = '';

        //if it came from a specific wish list
        if ($origin != 'later' && $origin != 'cart' && $origin != 'wishlist' && is_string($origin)) {
            //getting the list type
            $originType = Order::select(['id', 'type'])->where('description', 'LIKE', $origin)->first();

            //getting the list information
            $basicCart = Order::ofType($originType->type)
                ->where('user_id', $user->id)
                ->where('id', $originType->id)
                ->first();
        }

        //if it came either from the default wish list or shopping cart
        else {
            //getting the list information
            $basicCart = Order::ofType($origin)
                ->where('user_id', $user->id)
                ->first();
        }

        //getting information of the destination order
        $destinationOrder = Order::ofType($destination)
            ->where('user_id', $user->id)
            ->first();

        //if there is not destination, it is created
        if (!$destinationOrder) {
            $destinationOrder = new Order();
            $destinationOrder->user_id = $user->id;
            $destinationOrder->type = $destination;
            $destinationOrder->status = 'open';
            $destinationOrder->save();

            $log = Log::create(
                [
                    'action_type_id' => '1',
                    'details'        => $destinationOrder->id,
                    'source_id'      => $destinationOrder->id,
                    'user_id'        => $user->id,
                ]
            );
        }

        //checking if the user already has a product in the origin order, if so, it can be read to update the destination order.
        $originDetail = OrderDetail::where('order_id', $basicCart->id)
            ->where('product_id', $product->id)
            ->first();

        if ($originDetail) {
            $oldQuantity = $originDetail->quantity;
            $originDetail->delete();
        } else {
            $oldQuantity = 1;
        }

        //checking if the product exist in the destination, if so, it can be updated
        $orderMoved = OrderDetail::where('order_id', $destinationOrder->id)
            ->where('product_id', $product->id)
            ->first();

        //creating the new orden
        if ($orderMoved) {
            $orderMoved->price = $product->price;
            $orderMoved->quantity = $orderMoved->quantity + $oldQuantity;
        } else {
            $orderMoved = new OrderDetail();
            $orderMoved->order_id = $destinationOrder->id;
            $orderMoved->product_id = $product->id;
            $orderMoved->price = $product->price;
            $orderMoved->quantity = $oldQuantity;
            $orderMoved->status = 1;
        }

        //save new order
        $orderMoved->save();

        if ($product->type != 'item') {
            $virtual = VirtualProduct::where('product_id', $product->id)->first();

            //updating the virtual product order
            VirtualProductOrder::where('virtual_product_id', $virtual->id)
                ->where('order_id', $basicCart->id)
                ->update(['order_id' => $destinationOrder->id]);
        }

        if ($destination == 'later') {
            Session::push('message', trans('store.productSavedForLater'));
        } elseif ($destination == 'cart') {
            Session::push('message', trans('store.productAdded'));
        }

        return redirect()->route('orders.show_cart');
    }

    /**
     * this method is able to update the quantities values in the shopping cart.
     *
     * @param  $orderId is the shopping cart order id
     * @param  $orderDetailId is the shopping cart order details
     * @param  $newValue is new quantity to be used in the update
     *
     * @return Response
     */
    public function updateQuantity($orderId, $orderDetailId, $newValue)
    {
        $user = \Auth::user();
        if ($user) {
            $orderDetail = OrderDetail::where('id', $orderDetailId)
                ->where('order_id', $orderId)
                ->select(['id', 'order_id', 'product_id', 'quantity', 'price'])
                ->first();

            $virtual = VirtualProduct::where('product_id', $orderDetail->product_id)->first();

            if ($virtual) {
                return \Response::json(['success' => false], 404);
            }

            if ($orderDetail) {
                $oldQuantity = $orderDetail->quantity;
                $orderDetail->quantity = $newValue;
                $orderDetail->save();

                return \Response::json(
                    [
                        'success'     => true,
                        'oldQuantity' => $oldQuantity,
                        'detail'      => $orderDetail->toArray(),
                        'price'       => $orderDetail->price,
                    ], 200);
            } else {
                return \Response::json(['success' => false], 404);
            }
        }
    }

    /**
     * Starts the checkout process.
     *
     * @param int $id
     *
     * @return Response
     */
    public function checkOut()
    {
        $user = \Auth::user();

        $cart = Order::ofType('cart')->ofUser($user->id)->select('id')->first();

        $cartDetail = $cart ? OrderDetail::where('order_id', $cart->id)->get() : [];

        $addresses = $user->addresses->sortByDesc('default');

        $defaultId = '';

        foreach ($addresses as $value) {
            if ($value->default == '1') {
                $defaultId = $value->id;
                break;
            }
        }

        $total_points = 0;

        foreach ($cartDetail as $orderDetail) {
            $product = Product::find($orderDetail->product_id);
            $total_points += $orderDetail->quantity * $product->price;
        }

        if ($user->current_points < $total_points && config('app.payment_method') == 'Points') {
            return redirect()->route('orders.show_cart')->withErrors(['main_error' => [trans('store.cart_view.insufficient_funds')]]);
        } else {
            $panel = [
                'center' => ['width' => '12'],
            ];

            $callBackUrl = 'user/orders/checkOut';

            return view('address.list', compact('user', 'panel', 'cart', 'addresses', 'callBackUrl', 'defaultId'));
        }
    }

    /**
     * Starts the checkout process.
     *
     * @param int $addressId The address id selected to be copied
     *
     * @return Response
     */
    public function checkOutResume($addressId)
    {
        $user = \Auth::user();

        $cart = Order::ofType('cart')->with('details')->where('user_id', $user->id)->first();

        $cartDetail = OrderDetail::where('order_id', $cart->id)->get();

        $address = Address::find($addressId);

        $totalAmount = 0;

        $totalItems = 0;

        //Checks if the user selected an address that belongs to him/her
        $userAddress = Address::where('user_id', $user->id)->where('id', $address->id)->first();

        if ($userAddress) {
            //Checks if the user has points for the cart price and the store has stock
            $total_points = 0;

            foreach ($cartDetail as $orderDetail) {
                $product = Product::find($orderDetail->product_id);

                $totalItems += $orderDetail->quantity;
                $totalAmount += ($orderDetail->quantity * $orderDetail->price);

                if ($product->stock < $orderDetail->quantity) {
                    return redirect()->route('orders.show_cart')->withErrors(['main_error' => [trans('store.insufficientStock')]]);
                }
            }

            //Checks if the user has points for the cart price
            if ($user->current_points < $total_points && config('app.payment_method') == 'Points') {
                return redirect()->route('orders.show_cart')->withErrors(['main_error' => [trans('store.cart_view.insufficient_funds')]]);
            } else {
                //Copies the Address to a new one and attaches it to the order or replaces the old one
                $cartAddress = Address::find($cart->address_id);
                if (!$cartAddress) {
                    //if the order does not has an address yet
                    $newAddress = new Address();
                    $newAddress->line1 = $address->line1;
                    $newAddress->line2 = $address->line2;
                    $newAddress->phone = $address->phone;
                    $newAddress->name_contact = $address->name_contact;
                    $newAddress->zipcode = $address->zipcode;
                    $newAddress->city = $address->city;
                    $newAddress->country = $address->country;
                    $newAddress->state = $address->state;
                    $newAddress->save();
                    $cart->address_id = $newAddress->id;
                    $cart->save();
                    $cartAddress = $newAddress;
                } else {
                    //if the order needs to be updated
                    $cartAddress->line1 = $address->line1;
                    $cartAddress->line2 = $address->line2;
                    $cartAddress->phone = $address->phone;
                    $cartAddress->name_contact = $address->name_contact;
                    $cartAddress->zipcode = $address->zipcode;
                    $cartAddress->city = $address->city;
                    $cartAddress->country = $address->country;
                    $cartAddress->state = $address->state;
                    $cartAddress->save();
                }

                $panel = [
                    'center' => ['width' => '12'],
                ];
                //Sets the resume option to use the same view
                $isResume = true;
                $is_logged = true;

                return view('orders.cart', compact('cart', 'user', 'panel', 'isResume', 'cartAddress', 'totalItems', 'totalAmount'));
            }
        } else {
            return redirect()->route('orders.show_cart')->withErrors(['main_error' => [trans('store.errorOnAddress')]]);
        }
    }

    /**
     * Starts the checkout process.
     *
     * @param int $addressId The address id selected to be copied
     *
     * @return Response
     */
    public function placeOrder($type)
    {
        $errors = Order::placeOrders($type);

        if ($errors) {
            return redirect()->route('orders.show_cart')->withErrors(['main_error' => [$errors]]);
        } else {
            Session::push('message', trans('store.order_placed'));

            return redirect()->route('orders.show_orders');
        }
    }

    /**
     * cancels one of the user orders.
     *
     * @return Response
     */
    public function cancel($orderId, Request $request)
    {
        $user = \Auth::user();

        /**
         * $route description
         * destination route after process the action.
         *
         * @var string
         */
        $route = 'orders.pendingOrders';

        /*
         * $message
         * provide control on the processed message to users
         * @var array
         */
        $message['msg'] = trans('store.cancelled_order');
        $message['class'] = 'alert alert-success';

        /**
         * $order
         * retrieve the evaluated order information. So what, we can update
         * its status and return  its items stock.
         *
         * @var [type]
         */
        $order = Order::where('id', $orderId)
            ->with('details')
            ->where('user_id', $user->id)
            ->ofStatus('open')
            ->select('id', 'status', 'user_id')
            ->first();

        //checking if the user is a seller
        if (!$order) {
            $route = '/user/orders';

            $order = Order::where('id', $orderId)
                ->with('details')
                ->where('seller_id', $user->id)
                ->ofStatus('open')
                ->select('id', 'status', 'user_id')
                ->first();
        }

        //checking if it is our order
        if ($order) {
            $order->status = 'cancelled';
            $existsVirtual = false;

            //Returning the stock to products
            foreach ($order->details as $detail) {
                $product = Product::find($detail->product_id);
                $product->stock += $detail->quantity;
                $product->save();

                if ($product->type != 'item') {
                    $existsVirtual = true;
                }
            }

            if ($existsVirtual) {
                $virtualProductsId = VirtualProductOrder::select('virtual_product_id')->where('order_id', $order->id)->get()->toArray();
                VirtualProduct::whereIn('id', $virtualProductsId)->update(['status' => 'open']);
                VirtualProductOrder::where('order_id', $order->id)->delete();
            }

            $order->save();
        } else {
            $message['msg'] = trans('store.no_order_message');
            $message['class'] = 'alert alert-danger';
        }

        Session::push('message', $message['msg']);
        Session::push('messageClass', $message['class']);
        Session::save();

        return redirect($route);
    }

    /**
     * Changes the status of an order to pending, so the process can start.
     *
     * @param order_id The order id to be updated
     */
    public function startOrder($order_id)
    {
        $user = \Auth::user();
        $order = Order::where('id', $order_id)
            ->where('seller_id', $user->id)
            ->ofStatus('open')
            ->select('id', 'status', 'user_id', 'seller_id')
            ->first();
        //checks if the orders is sold by the user and if it is on open status
        if ($order) {
            //Mails and notifications are now sent in the save method for the order
            $order->status = 'pending';
            $order->save();

            Notice::create([
                'user_id'        => $order->user_id,
                'sender_id'      => $order->seller_id,
                'action_type_id' => 15,
                'source_id'      => $order->id,
                'status'         => 'new',
            ]);

            Session::push('message', trans('store.orders_index.order_started').' (#'.$order->id.')');

            return redirect(route('orders.pendingOrders'));
        } else {
            return redirect(route('orders.pendingOrders'));
        }
    }

    /**
     * Changes the status of an order to pending, so the process can start.
     *
     * @param order_id The order id to be updated
     */
    public function sendOrder($order_id)
    {
        $user = \Auth::user();
        $order = Order::where('id', $order_id)
        ->where('seller_id', $user->id)
        ->ofStatus('pending')
        ->select('id', 'user_id', 'status', 'seller_id')
        ->first();

        //checks if the orders is sold by the user and if it is on open status
        if ($order) {
            //Mails and notifications are now sent in the save method for the order
            $order->status = 'sent';
            $order->save();

            Notice::create([
                'user_id'        => $order->user_id,
                'sender_id'      => $order->seller_id,
                'action_type_id' => 11,
                'source_id'      => $order->id,
                'status'         => 'new',
            ]);

            $order_content = OrderDetail::where('order_id', $order->id)->get();
            $band = false;
            foreach ($order_content as $row) {
                if ($row->product->type != 'item') {
                    $band = $this->deliveryVirtualProduct($order->id, $row->product_id, new Request(), false);
                    $band = $band === 'closed' ? true : false;
                }
            }
            Session::push('message', trans('store.orders_index.order_sent').' (#'.$order->id.')'.(!$band ? '' : trans('store.order_closed_message')));

            return redirect(route('orders.pendingOrders'));
        } else {
            return redirect(route('orders.pendingOrders'));
        }
    }

    /**
     * Changes the status of an order to close, so the user can now check if received.
     *
     * @param order_id The order id to be updated
     */
    public function closeOrder($order_id)
    {
        $user = \Auth::user();
        $order = Order::where('id', $order_id)->where('user_id', $user->id)->ofStatus('sent')->select('id', 'user_id', 'status', 'end_date', 'seller_id')->first();
        //checks if the orders is own by the user and if it is on open status
        if ($order) {
            //Mails and notifications are now sent in the save method for the order
            $order->status = 'closed';
            $order->end_date = DB::raw('NOW()');
            // $order->end_date = Carbon::now(); Esto lo cambie porque no me parece guardar la fecha de php en la bd...
            $order->save();
            Session::push('message', trans('store.orders_index.order_received').' (#'.$order->id.')');

            Notice::create([
                'user_id'        => $order->seller_id,
                'sender_id'      => $order->user_id,
                'action_type_id' => 10,
                'source_id'      => $order->id,
                'status'         => 'new',
            ]);

            if (config('app.offering_user_points')) {
                //The order total points are passed to the seller
                $seller = User::findOrFail($order->seller_id);
                if ($seller) {
                    $order_content = OrderDetail::where('order_id', $order->id)->get();
                    $total_points = 0;
                    foreach ($order_content as $order_detail) {
                        $total_points += $order_detail->quantity * $order_detail->price;
                        $order_detail->status = 0;
                        $order_detail->delivery_date = DB::raw('NOW()');
                        $order_detail->save();
                        if ($order_detail->product->type != 'item') {
                            switch ($order_detail->product->type) {
                                case 'key':
                                    $virtualProductsId = VirtualProductOrder::select('virtual_product_id')->where('order_id', $order->id)->get()->toArray();
                                    VirtualProduct::where('product_id', $order_detail->product_id)->whereIn('id', $virtualProductsId)->update(['status' => 'closed']);
                                break;
                            }
                        }
                    }
                    $seller->modifyPoints($total_points, 8, $order->id);
                }
            }

            return redirect(route('orders.show_orders'));
        } else {
            return redirect(route('orders.show_orders'));
        }
    }

    public function reports($type, $filter)
    {
        $user = \Auth::user();

        $where_field = $user->role == 'person' ? 'user_id' : 'seller_id';

        $filter = $filter ? explode('*', $filter) : [];

        $dateFrom = isset($filter[0]) ? $filter[0] : '';

        $dateTo = isset($filter[1]) ? $filter[1] : '';

        switch ($type) {
            case 'history':
                $orders = Order::
                    where($where_field, $user->id)
                    ->with('details')
                    ->with('user')
                    ->ofType('order')
                    ->orderBy('status')
                    ->orderBy('updated_at', 'desc')
                    ->ofDates($dateFrom, $dateTo)
                    ->get();

                $summary = \Utility::totalByStatusOrder($orders);

                $data = [
                    'title'    => 'Order History',
                    'dateFrom' => $dateFrom,
                    'dateTo'   => $dateTo,
                    'view'     => 'orders.history',
                    'orders'   => $orders,
                    'summary'  => $summary,
                ];
            break;
        }

        $pdf = \PDF::loadView('pdf.orders.history', $data);

        return $pdf->stream();
    }

    /**
     * Shows the seller wich orders he/she has pending.
     *
     * @return view
     */
    public function usersOrders(Request $request)
    {
        $user = \Auth::user();

        $where_field = $user->role == 'person' ? 'user_id' : 'seller_id';

        $filter = $request->get('filter') ? explode('*', $request->get('filter')) : [];

        $dateFrom = $request->get('dateFrom') ? $request->get('dateFrom') : '';

        $dateTo = $request->get('dateTo') ? $request->get('dateTo') : '';

        if ($dateFrom == '' && isset($filter[0])) {
            $dateFrom = $filter[0];
        }

        if ($dateTo == '' && isset($filter[1])) {
            $dateTo = $filter[1];
        }

        $openOrders = Order::
            where($where_field, $user->id)
            ->with('user.profile')
            ->ofType('order')
            ->whereIn('status', ['open', 'pending', 'sent'])
            ->orderBy('created_at', 'desc')
            ->ofDates($dateFrom, $dateTo)
            ->paginate(20);

        $closedOrders = Order::
            where($where_field, $user->id)
            ->with('user.profile')
            ->ofType('order')
            ->ofStatus('closed')
            ->ofDates($dateFrom, $dateTo)
            ->paginate(20);

        $cancelledOrders = Order::
            where($where_field, $user->id)
            ->with('user.profile')
            ->ofType('order')
            ->ofStatus('cancelled')
            ->ofDates($dateFrom, $dateTo)
            ->paginate(20);

        $unRate = Order::
            where($where_field, $user->id)
            ->with('details')
            ->with('user.profile')
            ->ofType('order')
            ->whereIn('status', ['received', 'closed'])
            ->whereNull('rate')
            ->ofDates($dateFrom, $dateTo)
            ->paginate(20);

        $panel = [
            'left'   => ['width' => '2', 'class' => 'user-panel'],
            'center' => ['width' => '10'],
        ];

        $select = $request->get('show') ? $request->get('show') : '';

        return view('orders.sales', compact('panel', 'openOrders', 'closedOrders', 'cancelledOrders', 'select', 'unRate', 'dateFrom', 'dateTo'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int    $order_id
     * @param string $type
     *
     * @return void
     */
    public function destroy($order_id, $type)
    {
        if ($this->order->belongToUser(auth()->user(), $order_id, $order) && $this->order->canBeDeleted($type)) {
            $order->details()->delete();

            $order->delete();

            Session::push('message', trans('store.wish_list_view.success_deleting_msg'));
        } else {
            Session::push('message', trans('store.wish_list_view.error_deleting_msg'));
        }

        return redirect()->back();
    }

    /**
     *   function, to lift the Modal to display the details product in the card (Only this seller).
     *
     *   @return view
     */
    public function modalDetailsProductCart()
    {
        return view('orders.showDetailsProductInCart');
    }

    /**
     *   get keys registered (Only this seller).
     *
     *   @param  $id         int|string  id product
     *   @param  $request    Request     object to validate the type of request
     *
     *   @return json
     */
    public function showDetailsProductCart($id, Request $request)
    {
        if (!$request->wantsJson()) {
            return json_encode(['message' => trans('globals.error_not_available')]);
        }
        $cart = Order::ofType('cart')->select('id')->where('user_id', \Auth::user()->id)->first();
        if (!$cart) {
            return json_encode(['message' => trans('globals.error_not_available')]);
        }
        $product = Product::find($id);
        if (!$product) {
            return json_encode(['message' => trans('globals.error_not_available')]);
        }
        $order = OrderDetail::where('order_id', $cart->id)->where('product_id', $product->id)->first();
        if (!$order) {
            return json_encode(['message' => trans('globals.error_not_available')]);
        }
        $seller = User::select('nickname')->find($product->user_id);
        $product->seller = $seller->nickname;
        $return = ['product' => $product, 'order' => $order];
        if ($product->type != 'item') {
            $virtual = VirtualProduct::where('product_id', $product->id)->first();
            $arrayV = ['type' => $product->type, 'title' => trans('product.globals.digital_item').' '.trans('product.'.$product->type)];
            switch ($product->type) {
                case 'key':
                    $virtualOrder = VirtualProductOrder::where('virtual_product_id', $virtual->id)->where('order_id', $order->order_id)->where('status', 1)->get();
                    $email = [];
                    foreach ($virtualOrder as $row) {
                        if (isset($email[$row->email])) {
                            $email[$row->email]['num']++;
                        } else {
                            $email[$row->email]['num'] = 1;
                            $email[$row->email]['email'] = $row->email;
                        }
                    }
                    $arrayV['data'] = $email;
                break;
            }
            $return['virtual'] = $arrayV;
        }

        return json_encode($return);
    }

    /**
     *   @return view
     */
    public function showOrder($id)
    {
        $panel = [
            'left'   => ['width' => '2', 'class' => 'user-panel'],
            'center' => ['width' => '10'],
        ];

        $user = \Auth::user();
        if ($user) {
            $order = Order::
                where('id', $id)->where('user_id', $user->id)
                ->with('details')
                ->first();

            if ($order) {
                $orderAddress = Address::find($order->address_id);
                $is_buyer = true;
                $order_comments = Comment::where('action_type_id', 3)->where('source_id', $id)->orderBy('created_at', 'asc')->get();

                $totalItems = $order->details->sum('quantity');

                $grandTotal = $order->details->sum('price');

                return view('orders.detail', compact('user', 'panel', 'orderAddress', 'is_buyer', 'order', 'orderAddress', 'order_comments', 'totalItems', 'grandTotal'));
            } else {
                $order = Order::where('id', $id)->where('seller_id', $user->id)->first();
                if ($order) {
                    return redirect()->route('orders.show_seller_order', [$id]);
                } else {
                    return redirect()->route('orders.show_orders');
                }
            }
        } else {
            return redirect()->route('orders.show_orders');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function showSellerOrder($id)
    {
        $user = \Auth::user();

        $order = Order::
            where('id', $id)
            ->where('seller_id', $user->id)
            ->with('details')
            ->first();

        $totalItems = $order->details->sum('quantity');

        $grandTotal = $order->details->sum('price');

        $orderAddress = Address::find($order->address_id);

        $order_comments = Comment::
            where('action_type_id', 3)
            ->where('source_id', $id)
            ->orderBy('created_at', 'asc')
            ->get();

        $panel = [
            'left'   => ['width' => '2', 'class' => 'user-panel'],
            'center' => ['width' => '10'],
        ];

        $is_seller = true;

        return view('orders.detail', compact('user', 'is_seller', 'panel', 'orderAddress', 'order', 'order_comments', 'totalItems', 'grandTotal'));
    }

    /**
     *   @return view
     */
    private function addToCartVirtualsProduct($product, $email, $orderId, $quantity = 0)
    {
        if ($product->type != 'item') {
            $virtual = VirtualProduct::where('product_id', $product->id)->first();
            switch ($product->type) {
                case 'key':
                    for ($i = 0; $i < $quantity; $i++) {
                        $VirtualProductOrder = new VirtualProductOrder();
                        $VirtualProductOrder->order_id = $orderId;
                        $VirtualProductOrder->status = 1;
                        $VirtualProductOrder->email = $email;
                        $VirtualProductOrder->virtual_product_id = $virtual->id;
                        $VirtualProductOrder->save();
                    }
                break;
            }
        }
    }

    /**
     *   function to action to deliver virtual products.
     *
     *   @param  $orderId    int|string  id order
     *   @param  $productId  int|string  id product
     *   @param  $request    Request     object to validate the type of request
     *
     *   @return json    message error or message success
     */
    public function deliveryVirtualProduct($orderId, $productId, Request $request, $ajax = true)
    {
        if ($ajax && !$request->wantsJson()) {
            return json_encode(['message' => trans('globals.error_not_available'), 'json' => false]);
        }
        $Order = Order::find($orderId);
        $product = Product::find($productId);
        if (!$Order || !$product) {
            return json_encode(['message' => trans('globals.error_not_available'), 'id' => false]);
        }
        if ($Order->status != 'pending' && $Order->status != 'sent') {
            return json_encode(['message' => trans('globals.error_not_available'), 'status' => false]);
        }
        $virtuals = VirtualProduct::where('product_id', $product->id)->where('status', 'paid')->get();
        if (!count($virtuals->toArray())) {
            return json_encode(['message' => trans('globals.error_not_available'), 'virtual' => false]);
        }
        $detail = OrderDetail::where('order_id', $Order->id)->where('product_id', $product->id)->first();
        $user = User::find($Order->user_id);
        foreach ($virtuals as $row) {
            $virtualOrders = VirtualProductOrder::where('virtual_product_id', $row->id)->where('order_id', $Order->id)->first();
            if ($virtualOrders) {
                if ($virtualOrders->email) {
                    Mail::queue('emails.virtualsProducts', ['product' => $product, 'row' => $row, 'order' => $virtualOrders, 'user' => $user], function ($message) use ($virtualOrders) {
                        $message->to($virtualOrders->email)->subject(trans('email.delivery_virtuals_products.subject'));
                    });
                }
                $row->status = 'Sent';
                $row->save();
                $virtualOrders->status = 0;
                $virtualOrders->save();
            }
        }
        $detail->status = 0;
        $detail->delivery_date = DB::raw('NOW()');
        $detail->save();
        if ($ajax) {
            $detail = OrderDetail::where('order_id', $Order->id)->where('status', 1)->first();
        }
        if ($ajax && !$detail) {
            $Order->end_date = DB::raw('NOW()');
            $Order->status = 'Sent';
            $Order->save();
            if (!$ajax) {
                return 'Sent';
            } else {
                return json_encode(['message' => trans('store.delivery_successfully').' '.trans('store.closedOrders'), 'success' => true, 'closed' => true]);
            }
        } else {
            if (!$ajax) {
                return 'success';
            } else {
                return json_encode(['message' => trans('store.delivery_successfully'), 'success' => true]);
            }
        }
    }

    /**
     *   function to action to deliver virtual products.
     *
     *   @param  $order_id    int
     *
     *   @return json    message error or message success
     */
    public function commentOrder($order_id)
    {
        return view('orders.partial.comment_input', compact('order_id'));
    }

    /**
     *   function to action to deliver virtual products.
     *
     *   @param  $order_id    int
     *
     *   @return json    message error or message success
     */
    public function storeComment(Request $request)
    {
        $order_id = $request->get('order_id');
        $text = $request->get('comment_text');
        $user = \Auth::user();
        if ($user) {
            $order = Order::find($order_id);
            //Checks if the order belongs to the current user, or if the user is the seller of the order
            if (($order->user_id == $user->id) || ($order->seller_id == $user->id)) {
                $data = [
                    'user_id'        => $user->id,
                    'action_type_id' => 3,
                    'source_id'      => $order_id,
                    'comment'        => $text,
                ];

                $new_comment = Comment::create($data);

                if ($order->user_id == $user->id) {
                    $mail_subject = trans('email.order_commented.comment_from_user');
                    $seller_user = User::find($order->seller_id);
                    $email = $seller_user->email;
                }
                if ($order->seller_id == $user->id) {
                    $mail_subject = trans('email.order_commented.comment_from_seller');
                    $buyer_user = User::find($order->user_id);
                    $email = $buyer_user->email;
                }

                $data = [
                    'order_id'      => $order_id,
                    'subject'       => $mail_subject,
                    'email_message' => $mail_subject,
                    'email'         => $email,
                    'comment'       => $text,
                    'title'         => $mail_subject,
                ];

                Mail::queue('emails.order_comment', $data, function ($message) use ($user, $data) {
                    $message->to($data['email'])->subject($data['subject']);
                });
            } else {
                return \Response::json(['success' => false, 'order_id' => $order_id], 200);
            }
        } else {
            return \Response::json(['success' => false, 'order_id' => $order_id], 200);
        }
        Session::push('message', trans('store.create_comment_modal.added_order_comment'));

        return \Response::json(['success' => true, 'order_id' => $order_id], 200);
    }

    /**
     *   function to action to rate both the order and its content.
     *
     *   @param  $order_id  int
     *
     *   @return
     */
    public function rateOrder($order_id)
    {
        //Checks if the user is logged in
        $user = \Auth::user();
        if ($user) {
            //Finds the order to be rated and checks if it belongs to the current user
            $order = Order::where('id', $order_id)->where('user_id', $user->id)->first();
            // dd($order->details);
            if ($order) {
                $address = Address::find($order->address_id);
                $seller = User::find($order->seller_id);
                $business = Business::where('user_id', $order->seller_id)->first();
                // $jsonOrder = json_encode($order->toArray());
                // $jsonOrderAddress = json_encode($address->toArray());
                // $jsonBusiness = json_encode($business->toArray());
                return view('orders.rate_order', compact('order', 'seller', 'business'));
                // return view('orders.rate_order', compact('order', 'seller', 'business', 'jsonOrder', 'jsonOrderAddress', 'jsonBusiness'));
            } else {
                return redirect('/user/orders');
            }
        } else {
            return redirect('/');
        }
    }

    public function rateSeller(Request $request)
    {
        $order_id = $request->get('order_id');
        $seller_rate = $request->get('seller_rate');
        $seller_comment = $request->get('seller_comment');
        $user = \Auth::user();

        if ($user) {
            $order = Order::where('id', $order_id)
                ->where('user_id', $user->id)
                ->first();

            if ($order && $order->rate == '') {
                $seller = Business::where('user_id', $order->seller_id)->first();

                $seller_old_rate_val = $seller->rate_val ?: 0;

                $seller_old_rate_count = $seller->rate_count ?: 0;

                //Checks if the order has already been rated by the user
                if ($seller_old_rate_count == 0) {
                    $seller->rate_val = $seller_rate;
                    $seller->rate_count = 1;
                } else {
                    //Checks if the new value should add to the rates or not
                    if ($order->rate) {
                        if ($seller_old_rate_val > $seller_rate) {
                            $seller->rate_val = $seller_old_rate_val - (($seller_old_rate_val - $seller_rate) / ($seller_old_rate_count));
                        }

                        if ($seller_old_rate_val < $seller_rate) {
                            $seller->rate_val = $seller_old_rate_val + (($seller_rate - $seller_old_rate_val) / ($seller_old_rate_count));
                        }
                    } else {
                        if ($seller_old_rate_val > $seller_rate) {
                            $seller->rate_val = $seller_old_rate_val - (($seller_old_rate_val - $seller_rate) / ($seller_old_rate_count + 1));
                        }

                        if ($seller_old_rate_val < $seller_rate) {
                            $seller->rate_val = $seller_old_rate_val + (($seller_rate - $seller_old_rate_val) / ($seller_old_rate_count + 1));
                        }

                        $seller->rate_count = $seller_old_rate_count + 1;
                    }
                }

                $seller_user = User::find($order->seller_id);
                $email = $seller_user->email;
                $mail_subject = trans('email.order_rated.subject');
                $data = [
                    'order_id'      => $order_id,
                    'subject'       => $mail_subject,
                    'email_message' => $mail_subject,
                    'email'         => $email,
                ];
                Mail::queue('emails.order_rated', $data, function ($message) use ($user, $data) {
                    $message->to($data['email'])->subject($data['subject']);
                });

                $order->rate = $seller_rate;
                $order->rate_comment = $seller_comment;
                $order->save();
                $seller->save();

                $noticeType = (trim($seller_comment) != '') ? '3' : '14';

                Notice::create([
                    'user_id'        => $seller->user_id,
                    'sender_id'      => $user->id,
                    'action_type_id' => 14,
                    'source_id'      => $order->id,
                    'status'         => 'new',
                ]);

                return \Response::json(['success' => true, 'message' => trans('store.order_rate_view.http_messages.success'), 'order_id' => $order_id, 'seller_rate' => $seller_rate], 200);
            } else {
                return \Response::json(['success' => false, 'message' => trans('store.order_rate_view.http_messages.no_order'), 'order_id' => $order_id, 'seller_rate' => $seller_rate], 200);
            }
        } else {
            return \Response::json(['success' => false, 'message' => trans('store.order_rate_view.http_messages.no_user'), 'order_id' => $order_id, 'seller_rate' => $seller_rate], 200);
        }
    }

    public function rateProduct(Request $request)
    {
        $detail_id = $request->get('detail_id');
        $product_rate = $request->get('product_rate');
        $product_comment = $request->get('product_comment');
        $user = \Auth::user();

        if ($user) {
            $detail = OrderDetail::find($detail_id);
            if ($detail) {
                //Checks if the order exists and belongs to the current user
                $order = Order::where('id', $detail->order_id)
                    ->where('user_id', $user->id)
                    ->first();

                if ($order && $order->rate == '') {
                    $product = Product::find($detail->product_id);

                    $product_old_rate = $product->rate_val ? $product->rate_val : 0;

                    $product_old_rate_count = $product->rate_count ? $product->rate_count : 0;

                    //Checks if it is the first time the product is rated
                    if ($product_old_rate_count == 0) {
                        $product->rate_val = $product_rate;
                        $product->rate_count = 1;
                    } else {
                        //Checks if the user has rated this product on this order before
                        if ($detail->rate) {
                            if ($product_old_rate > $product_rate) {
                                $product->rate_val = $product->rate_val - (($product_old_rate - $product_rate) / ($product_old_rate_count));
                            }
                            if ($product_old_rate < $product_rate) {
                                $product->rate_val = $product->rate_val + (($product_rate - $product_old_rate) / ($product_old_rate_count));
                            }
                        } else {
                            if ($product_old_rate > $product_rate) {
                                $product->rate_val = $product->rate_val - (($product_old_rate - $product_rate) / ($product_old_rate_count + 1));
                            }
                            if ($product_old_rate < $product_rate) {
                                $product->rate_val = $product->rate_val + (($product_rate - $product_old_rate) / ($product_old_rate_count + 1));
                            }
                            $product->rate_count = $product_old_rate_count + 1;
                        }
                    }

                    $seller_user = User::find($order->seller_id);
                    $email = $seller_user->email;
                    $mail_subject = trans('email.product_rated.subject');
                    $data = [
                        'product_id'    => $product->id,
                        'subject'       => $mail_subject,
                        'email_message' => $mail_subject,
                        'email'         => $email,
                    ];
                    Mail::queue('emails.product_rated', $data, function ($message) use ($user, $data) {
                        $message->to($data['email'])->subject($data['subject']);
                    });

                    $product->save();
                    $detail->rate = $product_rate;
                    $detail->rate_comment = $product_comment;
                    $detail->save();

                    Notice::create([
                        'user_id'        => $seller_user->id,
                        'sender_id'      => $user->id,
                        'action_type_id' => 14,
                        'source_id'      => $order->id,
                        'status'         => 'new',
                    ]);

                    return \Response::json(['success' => true, 'message' => trans('store.order_rate_view.http_messages.success'), 'detail_id' => $detail_id, 'product_rate' => $product_rate], 200);
                } else {
                    return \Response::json(['success' => false, 'message' => trans('store.order_rate_view.http_messages.no_order'), 'detail_id' => $detail_id, 'product_rate' => $product_rate], 200);
                }
            } else {
                return \Response::json(['success' => false, 'message' => trans('store.order_rate_view.http_messages.no_user'), 'detail_id' => $detail_id, 'product_rate' => $product_rate], 200);
            }
        } else {
            return \Response::json(['success' => false, 'message' => trans('store.order_rate_view.http_messages.no_user'), 'detail_id' => $detail_id, 'product_rate' => $product_rate], 200);
        }
    }

    public function mailtest()
    {
        $orderid = '4';
        $mailed_order = Order::where('id', $orderid)->with('details')->get()->first();
       // dd($mailed_order->details);
        $data = [
            'orderId' => $orderid,
            'order'   => $mailed_order,
        ];
        $title = 'Title email';

        return view('emails.neworder', compact('data', 'title'));
    }

    /**
     * fromGuestToUser
     * This method is able to transfer all the guest shopping cart user to an user cart order.
     * It happens when a guest user has a shopping cart and press in checkout button.
     *
     * @param [object] $ordersController. Order controller object, which is passed through Authentication middleware.
     */
    public static function fromGuestToUser($ordersController)
    {
        /**
         * $cart_content contains the guest shopping cart information.
         *
         * @var [array]
         */
        $cart_content = Session::get('user.cart_content');

        //dd($cart_content, Session::get('user.cart'));

        foreach (Session::get('user.cart_content') as $product => $value) {
            $ordersController->addToOrder(
                'cart',
                $product,
                new Request(
                    [
                        'quantity'    => $cart_content[$product] != '' ? $cart_content[$product] : 1,
                        'guestToUser' => 1,
                    ]
                )
            );
        }

        Session::forget('user.cart');
        Session::forget('user.cart_content');
        Session::save();
    }
}
