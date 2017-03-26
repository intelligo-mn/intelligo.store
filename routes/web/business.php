<?php

Route::group(['roles' => ['business', 'nonprofit', 'admin'], 'middleware' => ['auth', 'roles']], function () {
    Route::resource('productsGroup', 'ProductsGroupController');

    Route::get('products/create', ['uses' => 'ProductsController@create', 'as' => 'products.create']);

    Route::get('products/{id}/edit', ['uses' => 'ProductsController@edit', 'as' => 'products.edit']);

    Route::get('products/downloadExample', ['uses' => 'ProductsController@downloadExample', 'as' => 'products.downloadExample']);

    Route::post('products', ['uses' => 'ProductsController@store', 'as' => 'products.store']);

    Route::post('products/upload', ['uses' => 'ProductsController@upload', 'as' => 'products.upload']);

    Route::post('products/upload_key', ['uses' => 'ProductsController@upload_key', 'as' => 'products.upload_key']);

    Route::post('products/upload_software', ['uses' => 'ProductsController@upload_software', 'as' => 'products.upload_software']);

    Route::put('products/{id}', ['uses' => 'ProductsController@update', 'as' => 'products.update']);

    Route::get('modalAllKeys', ['uses' => 'VirtualProductsController@modalAllKeys', 'as' => 'virtualproducts.modalAllKeys']);

    Route::get('showAllKeys/{id}', ['uses' => 'VirtualProductsController@showAllKeys', 'as' => 'virtualproducts.showAllKeys']);

    Route::get('deleteKey/{id}', ['uses' => 'VirtualProductsController@deleteKey', 'as' => 'virtualproducts.deleteKey']);

    Route::post('products/change/status/{id}', ['uses' => 'ProductsController@changeStatus', 'as' => 'products.change_status']);

    Route::get('orders/usersOrders', ['uses' => 'OrdersController@usersOrders', 'as' => 'orders.pendingOrders']);

    Route::post('orders/usersOrders', ['uses' => 'OrdersController@usersOrders', 'as' => 'orders.pendingOrders']);

    Route::get('orders/start/{order_id}', ['uses' => 'OrdersController@startOrder', 'as' => 'orders.start']);

    Route::get('orders/send/{order_id}', ['uses' => 'OrdersController@sendOrder', 'as' => 'orders.send']);

    Route::get('virtualDelivery/{orderId}/{productId}', ['uses' => 'OrdersController@deliveryVirtualProduct', 'as' => 'orders.virtualDelivery']);

    Route::get('freeproducts/{OrderId}/create', ['uses' => 'FreeProductsController@create', 'as' => 'freeproducts.create']);

    Route::post('freeproducts', ['uses' => 'FreeProductsController@store', 'as' => 'freeproducts.store']);

    Route::get('products/myProducts', ['uses' => 'ProductsController@myProducts', 'as' => 'products.myProducts']);

    Route::post('/products/delete_img', ['uses' => 'ProductsController@deleteImg', 'as' => 'products.deleteImg']);
});