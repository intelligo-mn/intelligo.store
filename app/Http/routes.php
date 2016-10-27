<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
| @author  Tortuvshin Byambaa <toroo.byamba@gmail.com>
|
*/

Route::controllers([
    'auth'     => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

//user account verification
Route::get('verification/{token}', 'UserController@accountVerification');

// home control
Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);

Route::group(['prefix' => 'home'], function () {
    Route::get('/', 'HomeController@index');
});

//Product list
Route::get('products', ['uses' => 'ProductsController@index', 'as' => 'products']);

//Orders Reports
Route::get('orders/report/{type}/{filter}', ['uses' => 'OrdersController@reports', 'as' => 'orders.report']);

//Busqueda General
Route::get('search/', 'ProductsController@searchAll');

Route::get('categories', 'CategoriesController@index');

//Acceso Usuario General(Admin,Persona,Empresa)
Route::group(['prefix' => 'user', 'roles' => array_keys(trans('globals.roles')), 'middleware' => ['auth', 'roles']], function () {
    Route::get('dashboard', 'UserController@dashBoard');

    Route::get('/', 'UserController@profile');

    Route::get('profile', 'UserController@profile');

    Route::post('profile/save', 'UserController@saveProfile');

    Route::post('profile/disable', 'UserController@disableProfile');

    Route::post('profile/enable', 'UserController@activeProfile');

    Route::post('upload', 'UserController@upload');

    //Address
    Route::get('address/', 'AddressesController@index'); //list

    Route::post('address/default', 'AddressesController@setDefault'); //set default

    Route::get('address/create', 'AddressesController@create');  //create form

    Route::get('address/{id}/edit', 'AddressesController@edit'); //edit form

    Route::put('address/store', 'AddressesController@store'); //store

    Route::put('address/{id}', 'AddressesController@update'); //update

    Route::post('address/delete', 'AddressesController@destroy'); //delete

    //Store Cart

    Route::get('user/orders/updateQuantity/{orderId}/{orderDetailId}/{newValue}', ['uses' => 'OrdersController@updateQuantity', 'as' => 'orders.update_order_quantity']);

    Route::get('product/save/{product}', ['uses' => 'OrdersController@saveForLater', 'as' => 'orders.save_for_later']);

    Route::get('orders/moveFrom/{origin}/to/{destination}/{productId}', ['uses' => 'OrdersController@moveFromOrder', 'as' => 'orders.move_from_order']);

    Route::get('orders/addToOrder/{orderId}/{productId}', ['uses' => 'OrdersController@addToOrderById', 'as' => 'orders.add_to_order_by_id']);

    Route::get('orders/checkOut/', ['uses' => 'OrdersController@checkOut', 'as' => 'orders.check_out']);

    Route::get('orders/checkOut/address/{addressId}', ['uses' => 'OrdersController@checkOutResume', 'as' => 'orders.check_out_address']);

    Route::get('orders/placeOrder/{type}', ['uses' => 'OrdersController@placeOrder', 'as' => 'orders.place_order']);

    Route::get('orders', ['uses' => 'OrdersController@usersOrders', 'as' => 'orders.show_orders']);

    //filtered by dates
    
    Route::post('orders', ['uses' => 'OrdersController@usersOrders', 'as' => 'orders.show_orders']);

    Route::get('orders/cancel/{orderId}', ['uses' => 'OrdersController@cancel', 'as' => 'orders.cancel']);

    Route::get('orders/showSeller/{orderId}', ['uses' => 'OrdersController@showSellerOrder', 'as' => 'orders.show_seller_order']);

    Route::get('orders/show/{orderId}', ['uses' => 'OrdersController@showOrder', 'as' => 'orders.show_order']);

    Route::get('orders/rate/{orderId}', ['uses' => 'OrdersController@rateOrder', 'as' => 'orders.rate_order']);

    //Route used to login an user and send it back to the product show

    Route::get('logAndShow/{productId}', ['uses' => 'ProductsController@show', 'as' => 'products.log_and_show']);

    Route::get('orders/close/{order_id}', ['uses' => 'OrdersController@closeOrder', 'as' => 'orders.close']);

    Route::get('modalSeeKeysPurchased', ['uses' => 'VirtualProductOrdersController@modalSeeKeysPurchased', 'as' => 'VirtualProductOrders.modalSeeKeysPurchased']);

    Route::get('showKeyVirtualProductPurchased/{idProduct}/{idOrder}', ['uses' => 'VirtualProductOrdersController@showKeyVirtualProductPurchased', 'as' => 'VirtualProductOrders.showKeyVirtualProductPurchased']);

    Route::get('orders/comment/{order_id}', ['uses' => 'OrdersController@commentOrder', 'as' => 'orders.comment']);

    Route::post('orders/storeComment', ['uses' => 'OrdersController@storeComment', 'as' => 'orders.store_comment']);

    Route::get('orders/delete/{order_id}/{type}', ['uses' => 'OrdersController@destroy', 'as' => 'orders.delete']);

    //Rates
    Route::post('rates/seller', ['uses' => 'OrdersController@rateSeller', 'as' => 'orders.rate_seller']);

    Route::post('rates/product', ['uses' => 'OrdersController@rateProduct', 'as' => 'orders.rate_product']);

    //Freeproducts
    Route::put('freeproducts/subscribe/{id}', ['uses' => 'FreeProductsController@subscribe', 'as' => 'freeproducts.subscribe']);

    Route::get('myFreeProducts', ['uses' => 'FreeProductsController@myFreeProducts', 'as' => 'freeproducts.my_free_products']);
});

//Companies Routes
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

    //filtered by dates
    Route::post('orders/usersOrders', ['uses' => 'OrdersController@usersOrders', 'as' => 'orders.pendingOrders']);

    Route::get('orders/start/{order_id}', ['uses' => 'OrdersController@startOrder', 'as' => 'orders.start']);

    Route::get('orders/send/{order_id}', ['uses' => 'OrdersController@sendOrder', 'as' => 'orders.send']);

    Route::get('virtualDelivery/{orderId}/{productId}', ['uses' => 'OrdersController@deliveryVirtualProduct', 'as' => 'orders.virtualDelivery']);

    Route::get('freeproducts/{OrderId}/create', ['uses' => 'FreeProductsController@create', 'as' => 'freeproducts.create']);

    Route::post('freeproducts', ['uses' => 'FreeProductsController@store', 'as' => 'freeproducts.store']);

    Route::get('products/myProducts', ['uses' => 'ProductsController@myProducts', 'as' => 'products.myProducts']);

    Route::post('/products/delete_img', ['uses' => 'ProductsController@deleteImg', 'as' => 'products.deleteImg']);
});

//Wpanel Routes
Route::group(['prefix' => 'wpanel', 'roles' => 'admin', 'middleware' => ['auth', 'roles']], function () {
    Route::resource('/', 'WpanelController');

    Route::resource('category', 'CategoriesController');

    Route::post('category/upload', ['uses' => 'CategoriesController@upload', 'as' => 'category.upload']);

    Route::get('categories', ['uses' => 'CategoriesController@showList', 'as' => 'categories']);

    Route::resource('productsdetails', 'ProductDetailsController');

    Route::get('features', ['uses' => 'ProductDetailsController@index', 'as' => 'features']);

    Route::resource('profile', 'CompanyController');
});

/*
 * WISH LISTS
 * here you will be able to find all the routes related to users wish list
 */

Route::group(['prefix' => 'wishes', 'roles' => array_keys(trans('globals.roles')), 'middleware' => ['auth', 'roles']], function () {

    //create
    Route::get('/create', ['uses' => 'OrdersController@createWishList', 'as' => 'orders.create_wish_list']);

    //add into a specific wish list by id
    Route::get('/{id}/products', ['uses' => 'OrdersController@showWishList', 'as' => 'orders.show_wish_list_by_id']);

    //list
    Route::get('/', ['uses' => 'OrdersController@showWishList', 'as' => 'orders.show_wish_list']);

    //user directory
    Route::get('/directory', ['uses' => 'OrdersController@wishListDirectory', 'as' => 'orders.show_list_directory']);

    //store
    Route::post('/store', ['uses' => 'OrdersController@storeWishList', 'as' => 'orders.store_list']);
});

// Acceso sin login Cambios para poder crear carrito y listas

Route::get('user/orders/addTo/{destination}/{productId}', ['uses' => 'OrdersController@addToOrder', 'as' => 'orders.add_to_order']);

Route::get('user/orders/removeFrom/{orderName}/{productId}/{idOrder?}', ['uses' => 'OrdersController@removeFromOrder', 'as' => 'orders.remove_from_order']);

Route::put('user/orders/addTo/{destination}/{productId}', ['uses' => 'OrdersController@addToOrder', 'as' => 'orders.add_to_order']);

Route::get('user/cart', ['uses' => 'OrdersController@showCart', 'as' => 'orders.show_cart']);

Route::put('user/orders/updateQuantity/{detailId}/{newQuantity}', ['uses' => 'OrdersController@updateQuantity', 'as' => 'orders.update_quantity']);

//points push notifications
Route::get('getPoints', 'UserController@getPoints');

Route::get('modalDetailsProductCart/', ['uses' => 'OrdersController@modalDetailsProductCart', 'as' => 'orders.modalDetailsProductCart']);

Route::get('showDetailsProductCart/{id}', ['uses' => 'OrdersController@showDetailsProductCart', 'as' => 'orders.showDetailsProductCart']);

Route::post('editKeyVirtualProductsOrders/{id}', ['uses' => 'VirtualProductOrdersController@editKey', 'as' => 'virtualProductOrdersController.editKey']);

Route::resource('virtualproducts', 'VirtualProductsController');

Route::get('products/{id}', ['uses' => 'ProductsController@show', 'as' => 'products.show']);

Route::get('img/{file?}', 'FileController@img')->where('file', '(.*)');

Route::get('freeproducts/{id}', ['uses' => 'FreeProductsController@show', 'as' => 'freeproducts.show']);

Route::get('freeproducts/show/all', ['uses' => 'FreeProductsController@index', 'as' => 'freeproducts.search']);

Route::get('logs', 'LogController@index');

Route::resource('log', 'LogController');

Route::get('user/notices/check/{id?}', 'NoticesController@check');

Route::get('user/notices/list/{num?}', 'NoticesController@index');

Route::get('user/notices/{type?}', 'NoticesController@push');

Route::resource('user/notices', 'NoticesController');

//Rutas Resource de los modelos basicos generados
Route::resource('freeproductparticipants', 'FreeProductParticipantsController');

Route::resource('orderdetails', 'OrderDetailsController');

Route::resource('orders', 'OrdersController');

Route::resource('productsoffers', 'ProductOffersController');

Route::resource('typepreferences', 'TypePreferencesController');

Route::resource('virtualproductorders', 'VirtualProductOrdersController');

Route::get('mailTest', 'OrdersController@mailtest');

//About Controller
Route::get('contact', ['as' => 'contact', 'uses' => 'AboutController@create']);
Route::post('contact', ['as' => 'contact_store', 'uses' => 'AboutController@store']);
Route::get('about', ['as' => 'about', 'uses' => 'AboutController@about']);
Route::get('refunds', ['as' => 'refunds', 'uses' => 'AboutController@refunds']);
Route::get('privacy', ['as' => 'privacy', 'uses' => 'AboutController@privacy']);
Route::get('terms', ['as' => 'terms', 'uses' => 'AboutController@terms']);
