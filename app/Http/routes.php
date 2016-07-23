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

Route::get('/search',[
   'uses' => '\Modu\Http\Controllers\SearchController@getResults',
   'as' => 'search.results',
]);
 
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

Route::get('/friends',[
   'uses' => '\Modu\Http\Controllers\FriendController@getIndex',
   'as' => 'friends.index',
   'middleware' => ['auth'],   
]);

Route::get('/friends/add/{username}',[
   'uses' => '\Modu\Http\Controllers\FriendController@getAdd',
   'as' => 'friends.add',
   'middleware' => ['auth'],
]);

Route::get('/friends/accept/{username}',[
   'uses' => '\Modu\Http\Controllers\FriendController@getAccept',
   'as' => 'friends.accept',
   'middleware' => ['auth'],
]);

Route::post('/status',[
   'uses' => '\Modu\Http\Controllers\StatusController@postStatus',
   'as' => 'status.post',
   'middleware' => ['auth'],
]);

Route::post('/status/{statusId}/reply',[
   'uses' => '\Modu\Http\Controllers\StatusController@postReply',
   'as' => 'status.reply',
   'middleware' => ['auth'],
]);