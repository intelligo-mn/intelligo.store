<?php


Route::group(['middleware' => 'Admin', 'prefix' => 'admin'], function () {

    Route::get('docs', function () {
        return view('vendor.docs.index');
    });
    
    

    Route::get('/',  array('as' => 'admin', 'uses' =>  'Admin\DashboardController@index'));
    Route::get('/reports/{type}', 'Admin\ReportsController@index');


    Route::post('addnewcategory',  array('as' => 'admin.add-new-category', 'uses' =>  'Admin\CategoriesController@addnew'));
    Route::get('categories/delete/{id}', 'Admin\CategoriesController@delete');
    Route::get('categories',  array('as' => 'admin.categories', 'uses' =>  'Admin\CategoriesController@index'));
    Route::get('config', array('as' => 'admin.config', 'uses' =>  'Admin\ConfigController@index'));
    Route::post('config', 'Admin\ConfigController@setconfig');

    Route::get('approvepost/{id}', 'Admin\PostsController@approvepost');
    Route::get('sendtrashpost/{id}', 'Admin\PostsController@sendtrashpost');
    Route::get('forcetrashpost/{id}', 'Admin\PostsController@forcetrashpost');
    Route::get('showhomepage/{id}', 'Admin\PostsController@showhomepage');
    Route::get('pickfeatured/{id}', 'Admin\PostsController@pickfeatured');

    Route::get('features', array('as' => 'admin.feature-posts', 'uses' => 'Admin\PostsController@features'));
    Route::get('unapprove', array('as' => 'admin.unapprove-posts', 'uses' => 'Admin\PostsController@unapprove'));
    Route::get('all', array('as' => 'admin.all-posts', 'uses' => 'Admin\PostsController@all'));
    Route::get('news', array('as' => 'admin.news', 'uses' =>  'Admin\PostsController@news'));
    Route::get('lists', array('as' => 'admin.lists', 'uses' => 'Admin\PostsController@lists'));
    Route::get('polls', array('as' => 'admin.polls', 'uses' => 'Admin\PostsController@polls'));
    Route::get('videos', array('as' => 'admin.videos', 'uses' => 'Admin\PostsController@videos'));
    Route::get('postlist', array('as' => 'admin.list-posts', 'uses' => 'Admin\PostsController@getdata'));

    Route::get('users',  array('as' => 'admin.users', 'uses' =>  'Admin\UsersController@users'));
    Route::get('userlist',  array('as' => 'admin.list-users', 'uses' =>  'Admin\UsersController@getdata'));


    Route::post('pages/addnew', 'Admin\PagesController@addnew');

    Route::get('pages/edit/{id}', 'Admin\PagesController@edit');
    Route::get('pages/delete/{id}', 'Admin\PagesController@delete');
    Route::get('pages/add', 'Admin\PagesController@add');
    Route::get('pages', 'Admin\PagesController@index');


    Route::post('widgets/addwidget', 'Admin\WidgetsController@addnew');
    Route::get('widgets/delete/{id}', 'Admin\WidgetsController@delete');
    Route::get('widgets', 'Admin\WidgetsController@index');


});


Route::get('/', 'IndexController@index');

Route::get('rss/{type}', 'UsersController@index');


Route::get('auth/social/{type}', 'Auth\AuthController@socialConnectRedirect');
Route::get('auth/social/{type}/callback', 'Auth\AuthController@handleSocialCallback');

Route::get('login', 'Auth\AuthController@login');
Route::get('register', 'Auth\AuthController@register');
Route::get('logout', 'Auth\AuthController@logout');

Route::post('login', 'Auth\AuthController@newlogin');
Route::post('register', 'Auth\AuthController@newRegister');

Route::post('upload-a-image',  'UploadController@newUpload');

Route::get('addnewform',  'FormController@addnewform');

Route::get('create',  'PostsController@CreateNew');
Route::post('create',  'PostsController@CreateNewPost');

Route::get('edit/{id}',  'PostsController@CreateEdit');
Route::post('edit/{id}',  'PostsController@CreateEditPost');
Route::get('delete/{id}',  'PostsController@sendtrashpost');

Route::get('news', 'PagesController@posttype');
Route::get('lists', 'PagesController@posttype');
Route::get('polls', 'PagesController@posttype');
Route::get('videos', 'PagesController@posttype');
Route::get('search',  'PagesController@search');

Route::get('pages/{page}',  'PagesController@showpage');

Route::post('profile/{userslug}/settings', 'UsersController@updatesettings');
Route::get('profile/{userslug}/settings', 'UsersController@settings');
Route::get('profile/{userslug}/news', 'UsersController@index');
Route::get('profile/{userslug}/lists', 'UsersController@index');
Route::get('profile/{userslug}/polls', 'UsersController@index');
Route::get('profile/{userslug}/videos', 'UsersController@index');
Route::get('profile/{userslug}/draft', 'UsersController@draftposts');
Route::get('profile/{userslug}/trash', 'UsersController@deletedposts');
Route::get('profile/{userslug}', 'UsersController@index');


Route::post('{catname}/{postname}/vote', 'PollController@VoteAPoll');

Route::get('{catname}/{slug}', 'PostsController@index');
Route::get('{catname}', 'PagesController@showCategory');
Route::get('easyComment-v1.0.5', function () {
        return view('vendor.easyComment-v1.0.5.app.install');
    });
