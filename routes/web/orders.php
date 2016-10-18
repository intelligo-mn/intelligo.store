<?php

Route::get('orders/report/{type}/{filter}', ['uses' => 'OrdersController@reports', 'as' => 'orders.report']);

Route::get('user/orders/addTo/{destination}/{productId}', ['uses' => 'OrdersController@addToOrder', 'as' => 'orders.add_to_order']);

Route::get('user/orders/removeFrom/{orderName}/{productId}/{idOrder?}', ['uses' => 'OrdersController@removeFromOrder', 'as' => 'orders.remove_from_order']);

Route::put('user/orders/addTo/{destination}/{productId}', ['uses' => 'OrdersController@addToOrder', 'as' => 'orders.add_to_order']);

Route::get('user/cart', ['uses' => 'OrdersController@showCart', 'as' => 'orders.show_cart']);

Route::put('user/orders/updateQuantity/{detailId}/{newQuantity}', ['uses' => 'OrdersController@updateQuantity', 'as' => 'orders.update_quantity']);

Route::get('modalDetailsProductCart/', ['uses' => 'OrdersController@modalDetailsProductCart', 'as' => 'orders.modalDetailsProductCart']);

Route::get('showDetailsProductCart/{id}', ['uses' => 'OrdersController@showDetailsProductCart', 'as' => 'orders.showDetailsProductCart']);

Route::resource('orderdetails', 'OrderDetailsController');

Route::resource('orders', 'OrdersController');

Route::get('mailTest', 'OrdersController@mailtest');

//virtual product

Route::resource('virtualproductorders', 'VirtualProductOrdersController');

Route::post('editKeyVirtualProductsOrders/{id}', ['uses' => 'VirtualProductOrdersController@editKey', 'as' => 'virtualProductOrdersController.editKey']);


