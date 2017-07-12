<?php

Route::get('products', ['uses' => 'ProductsController@index', 'as' => 'products']);

Route::get('search/', 'ProductsController@searchAll');

Route::get('products/{id}', ['uses' => 'ProductsController@show', 'as' => 'products.show']);

Route::resource('productsoffers', 'ProductOffersController');
//free
Route::get('freeproducts/{id}', ['uses' => 'FreeProductsController@show', 'as' => 'freeproducts.show']);

Route::get('freeproducts/show/all', ['uses' => 'FreeProductsController@index', 'as' => 'freeproducts.search']);

Route::resource('freeproductparticipants', 'FreeProductParticipantsController');
//virtual
Route::resource('virtualproducts', 'VirtualProductsController');
