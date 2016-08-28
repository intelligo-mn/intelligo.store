## Modu ecommerce Introduction

**This is an alpha, experimental release of Modu. Everything will change gradually, looking forward to get the best of this awesome product. Thank you for testing!**

***Modu*** is a eCommerce project written in Laravel 5.* intended for building a friendly eStore either for startups or big companies, and is highly opinionated towards that use case. Because it is a platform already built, you only will need to add as many products as you need  to start selling and taking orders from customers

***Modu*** aim is giving to you and your clients the best eCommerse experience in a different aproach!

<a name="installation"></a>
## Installation

You can install modu in two ways.

The first way is using composer, just run this command in your terminal:

```bash
composer require modu/ecommerce
```

The second way is cloning this repo, for that you need to run this commands:

```
git clone https://github.com/modusys/ecommerce.git
```


Next, you will need to run composer update/install into your ***Modu*** project folder
```
composer update/install
```

## Setting up

After install set up your .env file, if this not exist you can copy the .env-example file and store like .env file in the root of your Modu intallation. Then change  the variables values with yours.

Be sure to create  your database and define the name and access credentials of it on the .env file.
Then you have to create the Modu schema running artisan migrate command:

```
php artisan migrate:refresh
```

Or if you want to create the schema and load data for a functional demo you can run:

```
php artisan migrate:refresh --seed
```

You need to run ***bower install***, in order to have all the frontend dependencies in your machine. So, go to your Modu directory using command line, as so:

```
bower install
```

At this point you should be able to look at your Modu version running in your browser without problems.

Finally you can get your ***reCaptcha***  environments values here: 

```
https://www.google.com/recaptcha/admin#list
```

Fill out the "Register a new site" form in order to obtain the reCaptcha keys

```
RECAPTCHA_PUBLIC_KEY, and RECAPTCHA_PRIVATE_KEY
```

Put the keys  obtained in the corresponding fields on the .env file. For example: 

```
RECAPTCHA_PUBLIC_KEY = ModuRecaptcahPublicKeyObtained

RECAPTCHA_PRIVATE_KEY = ModuRecaptcahPrivateKeyObtained
```

***Note:*** If the ```APP_DEBUG == true```, the reCaptcha will not be applied
## Using Laravel Elixir

First at all, you need to install Gulp package typing this command line in your terminal. Like so:

```
npm install --global gulp
```
 
Second at all, you will need to step into your Modu folder, like so:
```
cd Modu
```

Third at all, type this following command in order for you to install the npm dependencies, like so:
```
npm install 
```

If you are developing on Windows or running your VM on it, you must try like so: 
```
npm install --no-bin-links
```

Now feel free to run gulp into your Modu folder, like so:
```
gulp
```

<a name="features"></a>
## Features

* Responsivity
* Open Source
* Social Media Integration
* Unlimited Categories
* Unlimited Products
* Unlimited Manufacturers
* Your Own Style
* Multi Language
* Multi Currency
* Product Reviews
* Product Ratings
* Downloadable Products
* Automatic Image Resizing
* Multiple Tax Rates
* Related Products (What other customers are looking at, Recommendations for you in our categories, Store Trending)
* Search Engine Optimization
* Sales Reports
* Wish Lists
* Products Suggestions
* Products Grouping 
* Addresses Book
* User Profiles (Sellers & Buyers)
* Products barcode
* Administrative Panel - (http://ashigtai.com/wpanel)
* Users Orders list with action status (process, Placed, Cancel, Rated)
* Virtual Products (products key download integrated)
* Free Products Module
* Users Points
* Virtual Products Delivery
* Dynamic Products Features
* Company Profile
* Shopping Cart
* Users preferences control
* Users Notifications
* Company Info CMS
* Search Engine Suggestions
* Dynamic Breadcrumbs

### Demo Information

* ```Demo:``` http://ashigtai.toroo.info
* Admin: admin@admin.com / admin
* Buyer: buyer@admin.com / admin
* Seller: seller@admin.com / admin

### Contact

You can communicate with us using the following mediums:

* [Email](toroo.byamba@gmail.com) for questions
* http://toroo.info

### License

[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

The Modu eCommerce is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

### Contributing

Before sending a Pull Request, be sure to review the [Contributing Guidelines](CONTRIBUTING.md) first.


