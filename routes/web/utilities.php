<?php

Route::get('img/{file?}', 'FileController@img')->where('file', '(.*)');

Route::get('logs', 'LogController@index');

Route::resource('log', 'LogController');
