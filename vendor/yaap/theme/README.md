# Theme support for Laravel 5

Inspired by [bigecko/laravel-theme](https://github.com/harryxu/laravel-theme).
Themes are stored inside default laravel's resources folder

### For Laravel 4, please use the [1.* branch](https://github.com/yaapis/Theme/tree/1.0)!

## Installation
Require this package in your composer.json:

~~~json
"yaap/theme": "2.*"
~~~

And add the ServiceProvider to the providers array in config/app.php

~~~php
'YAAP\Theme\ThemeServiceProvider',
~~~

Publish config using artisan CLI (if you want to overwrite default config).

~~~bash
php artisan vendor:publish --tag="config"
~~~

You can register the facade in the `aliases` key of your `config/app.php` file.

~~~php
'aliases' => array(
    'Theme' => 'YAAP\Theme\Facades\Theme'
)
~~~


## Package config

~~~php
	return array(
        'path'          => base_path('resources/themes'),
        'assets_path'   => 'assets/themes',
    );
~~~


## Theme config

~~~php
	return array(
        'name'         => 'default',
        'parent_theme' => null,
    );
~~~



##Usage

### Structure

```
├── resources/
    └── themes/
        ├── default/
        |   ├── layouts/
            ├── partials/
            ├── views/
	        |   └── hello.blade.php
	        └── config.php

        └── admin/

    ├── views/
    |   ├── emails/
    |   |   └── notify.blade.php
    |   └── hello.blade.php
    |
    └── lang/

├── public/assets/
    └── themes/
		└── default/
			├── css/
			|	└── styles.css
			└── images/
                └── icon.png
```

### Create theme with artisan CLI

The first time you have to create theme "default" structure, using the artisan command:

~~~bash
php artisan theme:create default
~~~

To delete an existing theme, use the command:

~~~bash
php artisan theme:destroy default
~~~

###Init theme

~~~php
Theme::init($name)
~~~

This will add to views find path:
* resources/themes/{$name}
* resources/themes/{$name}/views

### Making view

~~~php
View::make('hello');
View::make('emails.notify');
~~~

### Assets
Assets can be nested too.
Asset url can be automatically with version.

~~~css
<link rel="stylesheet" href="{{ Theme::asset('css/styles.css', null, true) }}"/>
<link rel="stylesheet" href="{{ Theme::asset('css/ie.css', null, 'v1') }}"/>
~~~

The first one will get version from filemtime, the second one - from params


###Blade templates

```
	@extends('layouts.master')

	@include('partials.header')

	@section('content')

	    <section id="main">
	        <h1>HOME</h1>
	    </section>
	@stop

	@include('partials.footer')

```

###Fallback capability

You still able to use default `View::make('emails.notify')` whitch stored outside the themes directory
