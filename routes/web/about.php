<?php

Route::get('contact', ['as' => 'contact', 'uses' => 'AboutController@create']);
Route::post('contact', ['as' => 'contact_store', 'uses' => 'AboutController@store']);
Route::get('about', ['as' => 'about', 'uses' => 'AboutController@about']);
Route::get('refunds', ['as' => 'refunds', 'uses' => 'AboutController@refunds']);
Route::get('privacy', ['as' => 'privacy', 'uses' => 'AboutController@privacy']);
Route::get('terms', ['as' => 'terms', 'uses' => 'AboutController@terms']);
