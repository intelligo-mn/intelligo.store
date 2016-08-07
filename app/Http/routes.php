<?php
Route::get('{type}.xml', 'RssController@index');

Route::get('{type}.json', 'RssController@json');


Route::get('/selectlanguge/{lang}', 'IndexController@langpick');

Route::group(['middleware' => 'Admin', 'prefix' => 'admin'], function () {


    Route::group(['prefix' => 'mailbox'], function () {

        Route::post('getmails', 'Admin\ContactController@getdata');
        Route::post('newmailsent', 'Admin\ContactController@newmailsent');
        Route::post('doaction', 'Admin\ContactController@doaction');
        Route::post('dostar', 'Admin\ContactController@dostar');
        Route::post('doimportant', 'Admin\ContactController@doimportant');
        Route::post('addcat', 'Admin\ContactController@addcat');

        Route::get('new', 'Admin\ContactController@newmail');
        Route::get('mailcatdelete/{id}', 'Admin\ContactController@mailcatdelete');
        Route::get('maillabeldelete/{id}', 'Admin\ContactController@maillabeldelete');
        Route::get('read/{id}', 'Admin\ContactController@read');
        Route::get('/', 'Admin\ContactController@index');
        Route::get('{type}', 'Admin\ContactController@index');
    });


    Route::get('/reports/{type}', 'Admin\ReportsController@index');

    Route::post('updatepurcahecheck', 'Admin\DashboardController@updatepurcahecheck');

    Route::get('plugins', 'Admin\DashboardController@plugins');
    Route::post('activeteplugin', 'Admin\DashboardController@activeplugin');
    Route::post('checkinputcodeforplugin', 'Admin\DashboardController@checkinputcodeforplugin');

    Route::post('addnewcategory', 'Admin\CategoriesController@addnew');
    Route::get('categories/delete/{id}', 'Admin\CategoriesController@delete');
    Route::get('categories', 'Admin\CategoriesController@index');
    Route::get('config', 'Admin\ConfigController@index');
    Route::post('config', 'Admin\ConfigController@setconfig');

    Route::get('approvepost/{id}', 'Admin\PostsController@approvepost');
    Route::get('sendtrashpost/{id}', 'Admin\PostsController@sendtrashpost');
    Route::get('forcetrashpost/{id}', 'Admin\PostsController@forcetrashpost');
    Route::get('showhomepage/{id}', 'Admin\PostsController@showhomepage');
    Route::get('pickfeatured/{id}', 'Admin\PostsController@pickfeatured');

    Route::get('features', 'Admin\PostsController@features');
    Route::get('unapprove', 'Admin\PostsController@unapprove');
    Route::get('all', 'Admin\PostsController@all');
    Route::get('/cat/{name}', 'Admin\PostsController@showcatposts');
    Route::get('postlist', 'Admin\PostsController@getdata');

    Route::get('users', 'Admin\UsersController@users');
    Route::get('userlist', 'Admin\UsersController@getdata');


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


Route::get('contact', 'ContactController@index');
Route::post('contact', 'ContactController@create');



Route::get('auth/social/{type}', 'Auth\AuthController@socialConnectRedirect');
Route::get('auth/social/{type}/callback', 'Auth\AuthController@handleSocialCallback');

Route::get('login', 'Auth\AuthController@login');
Route::get('register', 'Auth\AuthController@register');
Route::get('logout', 'Auth\AuthController@logout');

Route::post('login', 'Auth\AuthController@newlogin');
Route::post('register', 'Auth\AuthController@newRegister');

Route::get('accountactivate/{token}', 'Auth\PasswordController@getActivate');

Route::get('password/email', 'Auth\PasswordController@getEmail');
Route::post('password/email', 'Auth\PasswordController@postEmail');
// Password reset routes...
Route::get('password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('password/reset', 'Auth\PasswordController@postReset');
Route::get('password/rt', 'Auth\PasswordController@getRt');


Route::post('upload-a-image',  'UploadController@newUpload');

Route::get('addnewform',  'FormController@addnewform');

Route::get('create',  'PostsController@CreateNew');
Route::post('create',  'PostsController@CreateNewPost');

Route::get('edit/{id}',  'PostsController@CreateEdit');
Route::post('edit/{id}',  'PostsController@CreateEditPost');
Route::get('delete/{id}',  'PostsController@sendtrashpost');

Route::get('search',  'PagesController@search');

Route::get('tag/{tag}',  'PagesController@showtag');

Route::get('pages/{page}',  'PagesController@showpage');

Route::post('profile/{userslug}/settings', 'UsersController@updatesettings');
Route::post('profile/{userslug}/follow', 'UsersController@follow');
Route::get('profile/{userslug}/settings', 'UsersController@settings');
Route::get('profile/{userslug}/following', 'UsersController@following');
Route::get('profile/{userslug}/followers', 'UsersController@followers');
Route::get('profile/{userslug}/feed', 'UsersController@followfeed');
Route::get('profile/{userslug}/news', 'UsersController@index');
Route::get('profile/{userslug}/lists', 'UsersController@index');
Route::get('profile/{userslug}/quizzes', 'UsersController@index');
Route::get('profile/{userslug}/polls', 'UsersController@index');
Route::get('profile/{userslug}/videos', 'UsersController@index');
Route::get('profile/{userslug}/draft', 'UsersController@draftposts');
Route::get('profile/{userslug}/trash', 'UsersController@deletedposts');
Route::get('profile/{userslug}', 'UsersController@index');

Route::post('{catname}/{postname}/newvote', 'PollController@VoteANewPoll');
Route::post('{catname}/{postname}/vote', 'PollController@VoteAPoll');
Route::post('{catname}/{postname}/reaction', 'PollController@VoteReaction');
Route::post('shared/{postid}', 'PollController@Shared');

Route::get('{catname}/{slug}', 'PostsController@index');
Route::get('{catname}', 'PagesController@showCategory');

