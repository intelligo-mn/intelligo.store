<?php

Route::get('categories', 'CategoriesController@index');

Route::group(['prefix' => 'wpanel', 'roles' => 'admin', 'middleware' => ['auth', 'roles']], function () {
    Route::resource('/', 'WpanelController');

    Route::resource('category', 'CategoriesController');

    Route::post('category/upload', ['uses' => 'CategoriesController@upload', 'as' => 'category.upload']);

    Route::get('categories', ['uses' => 'CategoriesController@showList', 'as' => 'categories']);

    Route::resource('productsdetails', 'ProductDetailsController');

    Route::get('features', ['uses' => 'ProductDetailsController@index', 'as' => 'features']);

    Route::resource('profile', 'CompanyController');
});