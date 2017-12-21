# Laravel 5 Config with DB-storage support
This package extends default laravel Config, so fallback capability is built in

### For Laravel 4, please use the [1.* branch](https://github.com/TerbiumLibs/dbConfig/tree/1.0)!

## Installation
Require this package in your composer.json:

~~~json
"terbium/db-config": "2.*"
~~~

And add the ServiceProvider to the providers array in app/config/app.php

~~~php
'Terbium\DbConfig\DbConfigServiceProvider',
~~~

Publish config and migrations using artisan CLI.

~~~bash
php artisan vendor:publish
~~~

Run migration to create settings table

~~~bash
php artisan migrate
~~~



You can register the facade in the `aliases` key of your `app/config/app.php` file.

~~~php
'aliases' => array(
    'DbConfig' => 'Terbium\DbConfig\Facade'
)
~~~

Or replace default one
~~~php
'aliases' => array(
    'Config' => 'Terbium\DbConfig\Facade'
)
~~~

##Config

~~~php
return array(
    'table' => 'settings'
);
~~~

##Specific commands

###Store item into database table

~~~php
Config::store($key, $value) 
// this sets the key immediately
~~~

###Remove item from the database

~~~php
Config::forget($key)
~~~

###Clear all current items from memory (they will be reloaded on next call)

~~~php
Config::clear()
~~~

###Truncate the table with settings

~~~php
Config::clearDb()
~~~

###Return query builder with list of settings from database

~~~php
Config::listDb($wildcard = null)
~~~
