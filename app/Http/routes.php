<?php

Route::get('/', [
    'uses' => '\Modu\Http\Controllers\HomeController@index',
    'as' => 'home',
]);
