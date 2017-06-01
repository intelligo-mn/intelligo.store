<?php
namespace app\Http\Controllers;

use App\Address;
use App\FreeProduct;
use App\FreeProductOrder;
use App\FreeProductParticipant;
use App\Http\Controllers\Controller;
use App\Order;
use App\OrderDetail;
use App\Product;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class FreeProductsController extends Controller
{
    private $form_rules = [
        'description'                 => 'required|max:255',
        'start_date'                  => 'required|date',
        'end_date'                    => 'required|date|after:start_date',
        'participation_cost'          => 'required|numeric|digits_between:1,10|min:0',
        'min_participants'            => 'required|numeric|digits_between:1,3|min:1',
        'max_participants'            => 'required|numeric|digits_between:1,3|min:1',
        'max_participations_per_user' => 'required|numeric|digits_between:1,2|min:1',
        'draw_number'                 => 'required|numeric|digits_between:1,2|min:1',
        'draw_date'                   => 'required|date|after:end_date',
    ];

    private $panel = [
                'center' => ['width' => '12'],
            ];
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $user = \Auth::user();
        $filter = $request->get('filter');
        if ($filter && $filter != '') {
            switch (strtolower($filter)) {
                case 'active': $freeproducts = FreeProduct::getListWithPaginate(8, 1); break;
                case 'inactive': $freeproducts = FreeProduct::getListWithPaginate(8, 0); break;
                case 'participations':
                    //$userholdings = FreeProductParticipant::where('user_id', $user->id)->select('freeproduct_id')->get()->toArray();
                    //$freeproducts=FreeProduct::whereIn('id', $userholdings)->with('orders')->paginate(8);
                    $freeproducts = FreeProduct::with('orders')
                                    ->join('freeproduct_participants as p', function ($join) {
                                        $join->on('freeproducts.id', '=', 'p.freeproduct_id')
                                        ->where('p.user_id', '=', \Auth::user()->id);
                                    })
                                    //->where('p.user_id', '=', $user->id);
                                    ->select('freeproducts.*', 'p.status as status_holding')
                                    ->paginate(8);
                    //dd($freeproducts->toSql());
                    break;
                default: $freeproducts = FreeProduct::getListWithPaginate(8); break;
            }
        } else {
            $freeproducts = FreeProduct::getListWithPaginate(8);
        }
        $panel = $this->panel;
        $route = route('freeproducts.search');
        return view('freeproducts.index', compact('panel', 'freeproducts', 'filter', 'route'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create($orderId)
    {
        $order = Order::whereId($orderId)->select('id', 'type')->first();
        $user = \Auth::user();
        if ($user) {
            //If a user is not trusted, send the error. Avoiding direct access routes to action by invalid user
            if (!$user->isTrusted()) {
                return redirect()->route('orders.show_cart', [$order->id])->withErrors(trans('freeproduct.unauthorized_access'));
            }
            //You can create free product from a sort order cart or wish list
            if (($order->type != 'cart') && ($order->type != 'wishlist')) {
                return redirect()->route('orders.show_cart', [$order->id])->withErrors(trans('freeproduct.order_type_invalid'));
            }
            //As is authorized to create, I check order detail
            $order_content = OrderDetail::where('order_id', $order->id)->get();
            //Sumatorial the total order to validate that the free product creator has enough points for the transaction
            $total_points = 0;
            foreach ($order_content as $orderDetail) {
                $product = Product::whereId($orderDetail->product_id)->select('id', 'price')->first();
                $total_points += $orderDetail->quantity * $product->price;
            }
            if ($user->current_points < $total_points) {
                return redirect()->route('orders.show_cart')->withErrors(['main_error' => [trans('store.cart_view.insufficient_funds')]]);
            }
            $jsonOrder = json_encode($order_content->toArray());
            $panel = $this->panel;
            return view('freeproducts.create', compact('jsonOrder', 'panel', 'orderId'));
        } else {
            return redirect()->route('products')->withErrors(trans('freeproduct.unauthorized_access'));
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), $this->form_rules);
            if ($validator->fails()) {
                return redirect()->route('freeproducts.create', [$request->input('order_id')])
                ->withErrors($validator->errors())->withInput();
            }
            //As is not defined that way is going to deliver products for every winner, I will confirm that the total winning is equal to total products in the cart
            $cart_detail = OrderDetail::where('order_id', $request->input('order_id'))->get();
            if ($request->input('draw_number') > $cart_detail->count()) {
                return redirect()->route('freeproducts.create', [$request->input('order_id')])
                                     ->withErrors(trans('freeproduct.drawnumber_exceed_total_products'))->withInput();
            } else {
                //Process the order. The process is the same as with a shopping cart. The address is not requested
                //Direction is taken as the one with the user by default. Not having, it notifies the user to create a.
                $errors = Order::placeOrders('freeproduct');
                if ($errors) {
                    return redirect()->route('freeproducts.create', [$request->input('order_id')])
                                     ->withErrors($errors)->withInput();
                } else {
                    $user = \Auth::user();
                    //Save Free Product
                    $freeproduct = new FreeProduct();
                    $freeproduct->user_id = $user->id;
                    $freeproduct->description = $request->input('description');
                    $freeproduct->start_date = $request->input('start_date');
                    $freeproduct->end_date = $request->input('end_date');
                    $freeproduct->participation_cost = $request->input('participation_cost');
                    $freeproduct->min_participants = $request->input('min_participants');
                    $freeproduct->max_participants = $request->input('max_participants');
                    $freeproduct->max_participations_per_user = $request->input('max_participations_per_user');
                    $freeproduct->draw_number = $request->input('draw_number');
                    $freeproduct->draw_date = $request->input('draw_date');
                    $freeproduct->save();
                    //Because the method placeOrders products generates orders for each vendor, you need to associate these orders to free product
                    $orders = Order::ofType('freeproduct')->ofStatus('paid')->where('user_id', $user->id)->get();
                    if ($orders) {
                        foreach ($orders as $order) {
                            //Each order products are searched and a duplicate of the same is made, marking them as a free product. This will allow the product goes on the results of the advanced search
                            $order_detail = OrderDetail::where('order_id', $order->id)->get();
                            if ($order_detail) {
                                foreach ($order_detail as $detail) {
                                    $product = Product::find($detail->product_id);
                                    $productactual = $product->toArray();
                                    unset($productactual['id']);
                                    unset($productactual['num_of_reviews']);
                                    $productactual['user_id'] = $user->id;
                                    $productactual['stock'] = $detail->quantity;
                                    $productactual['type'] = 'freeproduct';
                                    $productactual['parent_id'] = $product->id;
                                    $newproduct = Product::create($productactual);
                                }
                            }
                            if (!FreeProductOrder::where('order_id', $order->id)->first()) {
                                //order registration as a free product
                                $order_to_fp = new FreeProductOrder();
                                $order_to_fp->freeproduct_id = $freeproduct->id;
                                $order_to_fp->order_id = $order->id;
                                $order_to_fp->save();
                            }
                        }
                    }
                    //Send message process Ok and redirect
                    Session::flash('message', trans('freeproduct.saved_successfully'));
                    return redirect()->route('freeproducts.show', [$freeproduct->id]);
                }
            }
        } catch (ModelNotFoundException $e) {
            Log::error($e);
            return redirect()->back()->withErrors(['induced_error' => [trans('freeproduct.error_exception')]])->withInput();
        }
    }
    /**
     * Return the product data free query view.
     *
     * @param int $id of freeproduct
     *
     * @return View
     */
    public function show($id)
    {
        $freeproduct = FreeProduct::with('orders')->find($id);
        if ($freeproduct) {
            //Get Total equity investments in the product user free
            $userholdings = FreeProductParticipant::MyParticipations($id)->count();
            $isParticipating = ($freeproduct->max_participations_per_user > $userholdings) ? 0 : 1;
            $panel = $this->panel;
            return view('freeproducts.show', compact('freeproduct', 'isParticipating', 'panel'));
        } else {
            Session::flash('message', trans('freeproduct.freeproduct_not_exist'));
            return redirect(route('products'));
        }
    }


    /**
     * Subscription free product, validating the conditions and validity of the same.
     *
     * @param int $id
     *
     * @return Response
     */
    public function subscribe($id)
    {
        $freeproduct = FreeProduct::find($id);
        $user = \Auth::user();
        if ($freeproduct) {
            //It validates that the user has a registered address in the store. Of winning, this address will be used to create you an order (will contain the product to win)
            $useraddress = Address::where('user_id', $user->id)->orderBy('default', 'DESC')->first();
            if ($useraddress) {
                //It verifies that the product is in effect free
                $dateactual = date('Y-m-d');
                if (($freeproduct->start_date >= $dateactual) && ($freeproduct->end_date >= $dateactual)) {
                    //It has enough points to participate
                    if ($user->current_points > $freeproduct->participation_cost) {
                        //Total of Participants
                        $totalparticipants = FreeProductParticipant::where('freeproduct_id', $id)->count();
                        //Total equity investments in the product user free
                        $userholdings = FreeProductParticipant::MyParticipations($id)->count();
                        //Validate that there is still quota to participate
                        if ($freeproduct->max_participants > $totalparticipants) {
                            //Then, the user is not participating or not exceeding the number of shares in the free product
                            if ($freeproduct->max_participations_per_user > $userholdings) {
                                //Subtract points because of user participation
                                $negativeTotal = -1 * $freeproduct->participation_cost;
                                //12 is the action type id for free product checkout
                                $pointsModified = $user->modifyPoints($negativeTotal, 12, $id);
                                if ($pointsModified) {
                                    //If you meet these conditions, the user is registered as a participant free product
                                    $newparticipant = new FreeProductParticipant();
                                    $newparticipant->freeproduct_id = $id;
                                    $newparticipant->user_id = $user->id;
                                    $newparticipant->status = 'registered';
                                    $newparticipant->save();
                                    //Report by email to the participant
                                    $data = ['freeproduct_id' => $id];
                                    Mail::queue('emails.freeproducts.participate', $data, function ($message) use ($user) {
                                        $message->to($user->email)->subject(trans('email.free_products_participation.subject'));
                                    });
                                    //It is sent to the view (dashboard) where the user can view their participation in it.
                                    Session::flash('message', trans('freeproduct.congratulations_participate'));
                                    return redirect()->route('freeproducts.show', [$freeproduct->id]);
                                } else {
                                }
                            } else {
                                Session::flash('message', trans('freeproduct.max_participations_for_user'));
                            }
                        } else {
                            Session::flash('message', trans('freeproduct.participations_not_available'));
                        }
                    } else {
                        Session::flash('message', trans('freeproduct.not_enough_point'));
                    }
                } else {
                    Session::flash('message', trans('freeproduct.freeproduct_not_available'));
                }
            } else {
                Session::flash('message', trans('freeproduct.address_not_registered'));
            }
            return redirect()->route('freeproducts.show', [$id]);
        } else {
            Session::flash('message', trans('freeproduct.freeproduct_not_exist'));
            return redirect(route('products'));
        }
    }

     public function myFreeProducts(Request $request)
    {
        $filter = $request->get('filter');
        $user = \Auth::user();
        if ($filter && $filter != '') {
            switch (strtolower($filter)) {
                case 'active': $freeproducts = FreeProduct::auth()->where('status', '1')->with('orders')->paginate(8); break;
                case 'inactive': $freeproducts = FreeProduct::auth()->where('status', '0')->with('orders')->paginate(8); break;
                case 'participations':
                    $userholdings = FreeProductParticipant::where('user_id', $user->id)->select('freeproduct_id')->get()->toArray();
                    $freeproducts = FreeProduct::whereIn('id', $userholdings)->with('orders')->paginate(8);
                    break;
                default: $freeproducts = FreeProduct::auth()->with('orders')->paginate(8); break;
            }
        } else {
            $freeproducts = FreeProduct::auth()->with('orders')->paginate(8);
        }
        $panel = ['left' => ['width' => '2'],    'center' => ['width' => '10']];
        $route = route('freeproducts.my_free_products');
        return view('freeproducts.index', compact('panel', 'freeproducts', 'filter', 'route'));
    }
    /**
     * build the free prodcuts tree where parent will be a free product and children are the products list associated.
     *
     * @param [array]   $select [array to ask for products table field]
     * @param [integer] $limit  [to control the request limit]
     */
    public static function getParentAndChildren($select = ['id', 'description'], $limit = 5)
    {
        $events = FreeProduct::
            select($select)
            ->where('status', '1')
            ->with('orders')
            ->get()
            ->take($limit);
        $list = [];
        $events->each(function ($event) use (&$list, $select) {
            foreach ($select as $value) {
                $list[$event->id][$value] = $event->$value;
            }
            $products = FreeProduct::
                find($event->id)
                ->products
                ->take(6)
                ->toArray();
            if ($products) {
                $list[$event->id]['products'] = $products;
            }
            unset($products);
        });
        return $list;
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update($id)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}