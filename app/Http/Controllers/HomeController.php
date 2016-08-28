<?php

namespace app\Http\Controllers;

/*
 * Antvel - Home Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\FreeProduct;
use App\Helpers\productsHelper;
use App\Http\Controllers\Controller;
use App\Order;
use App\Product;

class HomeController extends Controller
{
    public function index()
    {
        $panel = [
            'center' => [
                'width' => 10,
            ],
            'left' => [
                'width' => 2,
                'class' => 'home-no-padding',
            ],
        ];

        $helperProd = new productsHelper();

        $carousel = $helperProd->suggest('carousel');
        $viewed = $helperProd->suggest('viewed', 8);
        $categories = $helperProd->suggest('categories');
        $purchased = $helperProd->suggest('purchased');

        $suggestion = [
            'carousel'   => $carousel,
            'viewed'     => $viewed,
            'categories' => $categories,
            'purchased'  => $purchased,
        ];

        $helperProd->resetHaystack(); //reseting session id validator

        $events = [];
        if (config('app.offering_free_products')) {
            $events = FreeProduct::getNextEvents([
                'id',
                'description',
                'min_participants',
                'max_participants',
                'participation_cost',
                'start_date',
                'end_date',
            ], 4, date('Y-m-d'));
        }

        $tagsCloud = ProductsController::getTopRated(0, 20, true);

        $allWishes = '';
        $user = \Auth::user();
        if ($user) {
            $allWishes = Order::ofType('wishlist')->where('user_id', $user->id)->where('description', '<>', '')->get();
        }

        $i = 0; //carousel implementation
        $jumbotronClasses = ['jumbotron-box-left', 'jumbotron-box-right']; //carousel implementation

        $banner = [
            '/img/banner/01.png',
            '/img/banner/02.png',
            '/img/banner/03.png',
            '/img/banner/04.png',
        ];

        // $this->createTags();

        return view('home', compact('panel', 'suggestion', 'allWishes', 'events', 'tagsCloud', 'jumbotronClasses', 'i', 'banner'));
    }

    private function createTags()
    {
        $product = Product::select(['id', 'name'])->get();

        foreach ($product as $value) {
            $prod = Product::find($value->id);

            $prod->tags = str_replace(' ', ',', $value->name);

            $prod->save();
        }
    }
}
