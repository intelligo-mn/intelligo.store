<?php

Route::get('/', [
    'uses' => '\Modu\Http\Controllers\HomeController@index',
    'as' => 'home',
]);

Route::get('/alert', function(){
   return redirect()->route('home')->with('info', 'You have signed up!'); 
});
