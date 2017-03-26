<?php

Route::get('time', ['uses' => 'TimeController@index', 'as' => 'time']);

Route::resource('times', 'TimeController');
