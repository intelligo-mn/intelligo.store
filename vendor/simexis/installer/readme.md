# Laravel Web Installer
Do you want your clients to be able to install a Laravel project just like they do with WordPress or any other CMS?
This Laravel package allows users who don't use Composer, SSH etc to install your application just by following the setup wizard.
The current features are : 

	- Check For Folders and Files Permissions.
	- Check For Server Requirements.
	- Ability to set database information.
	- Update existing application.
	- Migrate The Database.
	- Seed The Tables.

If you have any suggestions please let me know : https://github.com/jooorooo/installer/pulls.

## Installation

First, pull in the package through Composer.

```
composer require simexis/installer
```

And then run :

```
composer update
```

After that, include the service provider within `app/config/app.php`.

```
'providers' => [
    Simexis\Installer\InstallerServiceProvider::class,
];
```
## Usage

Before using this package you need to run :
```bash
php artisan vendor:publish
```

You will notice additional files and folders appear in your project :
 
 - `config/installer.php` : In here you can set the requirements along with the folders and files permissions for your application to run, by default the array cotaines the default requirements for a basic Laravel app.
 - `resources/views/vendor/installer` : This folder contains the HTML code for your installer, it is 100% customizable, give it a look and see how nice/clean it is.
 - `resources/lang/en/installer.php` : This file holds all the messages/text, currently only English is available, if your application is in another language, you can copy/past it in your language folder and modify it the way you want.