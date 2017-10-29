<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Auth::routes();

Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);

Route::group(['prefix' => 'home'], function () {
    Route::get('/', 'HomeController@index');
});

require __DIR__ . '/web/users.php';

require __DIR__ . '/web/business.php';

require __DIR__ . '/web/dashboard.php';

require __DIR__ . '/web/products.php';

require __DIR__ . '/web/wish_lists.php';

require __DIR__ . '/web/orders.php';

require __DIR__ . '/web/about.php';

require __DIR__ . '/web/utilities.php';

require __DIR__ . '/web/globals.php';
