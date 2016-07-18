<?php

Route::get('/', [
    'uses' => '\Modu\Http\Controllers\HomeController@index',
    'as' => 'home',
]);

Route::get('/alert', function(){
   return redirect()->route('home')->with('info', 'You have signed up!'); 
});


Route::get('/signup',[
   'uses' => '\Modu\Http\Controllers\AuthController@getSignup',
   'as' => 'auth.signup',
   'middleware' => ['guest'],
]);

Route::post('/signup',[
   'uses' => '\Modu\Http\Controllers\AuthController@postSignup',
   'middleware' => ['guest'],
]);

Route::get('/signin',[
   'uses' => '\Modu\Http\Controllers\AuthController@getSignin',
   'as' => 'auth.signin',
   'middleware' => ['guest'],
]);

Route::post('/signin',[
   'uses' => '\Modu\Http\Controllers\AuthController@postSignin',
   'middleware' => ['guest'],
]);

Route::get('/signout',[
   'uses' => '\Modu\Http\Controllers\AuthController@getSignout',
   'as' => 'auth.signout',
]);

/*
 * Хайх 
 */

Route::get('/search',[
   'uses' => '\Modu\Http\Controllers\SearchController@getResults',
   'as' => 'search.results',
]);

/*
 * Хэрэглэгчийн мэдээлэл 
 */
 
Route::get('/user/{username}',[
   'uses' => '\Modu\Http\Controllers\ProfileController@getProfile',
   'as' => 'profile.index',
]);

Route::get('/profile/edit',[
   'uses' => '\Modu\Http\Controllers\ProfileController@getEdit',
   'as' => 'profile.edit',
   'middleware' => ['auth'],
   
]);

Route::post('/profile/edit',[
   'uses' => '\Modu\Http\Controllers\ProfileController@postEdit',
   'middleware' => ['auth'],
]);

