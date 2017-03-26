<?php

Route::get('categories', 'CategoriesController@index');

Route::group(['prefix' => 'dashboard', 'roles' => 'admin', 'middleware' => ['auth', 'roles']], function () {
    Route::resource('/', 'DashboardController');

    Route::resource('category', 'CategoriesController');

    Route::post('category/upload', ['uses' => 'CategoriesController@upload', 'as' => 'category.upload']);

    Route::get('categories', ['uses' => 'CategoriesController@showList', 'as' => 'categories']);

    Route::resource('productsdetails', 'ProductDetailsController');

    Route::get('features', ['uses' => 'ProductDetailsController@index', 'as' => 'features']);

    Route::resource('profile', 'CompanyController');
});