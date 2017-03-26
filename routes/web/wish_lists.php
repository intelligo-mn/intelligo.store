<?php

Route::group(['prefix' => 'wishes', 'roles' => array_keys(trans('globals.roles')), 'middleware' => ['auth', 'roles']], function () {

    Route::get('/create', ['uses' => 'OrdersController@createWishList', 'as' => 'orders.create_wish_list']);

    Route::get('/{id}/products', ['uses' => 'OrdersController@showWishList', 'as' => 'orders.show_wish_list_by_id']);

    Route::get('/', ['uses' => 'OrdersController@showWishList', 'as' => 'orders.show_wish_list']);

    Route::get('/directory', ['uses' => 'OrdersController@wishListDirectory', 'as' => 'orders.show_list_directory']);

    Route::post('/store', ['uses' => 'OrdersController@storeWishList', 'as' => 'orders.store_list']);
});