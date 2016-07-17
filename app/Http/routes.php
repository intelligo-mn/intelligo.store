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
]);

Route::post('/signup',[
   'uses' => '\Modu\Http\Controllers\AuthController@postSignup',
]);