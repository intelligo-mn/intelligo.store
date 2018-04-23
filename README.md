<p align="center">
	<img src="/public/img/logo.png" width="200"/>
</p>

<p align="center">
    <a href="https://github.com/techstar-cloud/techstar-ecommerce/issues">
        <img src="https://img.shields.io/github/issues/techstar-cloud/techstar-ecommerce.svg"
            alt="Issues"></a>
     <a href="https://github.com/techstar-cloud/techstar-ecommerce/fork">
        <img src="https://img.shields.io/github/forks/techstar-cloud/techstar-ecommerce.svg?style=social&label=Fork"
            alt="Forks"></a>
    <a href="https://github.com/techstar-cloud/techstar-ecommerce/stargazers">
        <img src="https://img.shields.io/github/stars/techstar-cloud/techstar-ecommerce.svg?style=social&label=Stars"
            alt="Stars"></a>
    <a href="https://github.com/tortuvshin/">
        <img src="https://img.shields.io/github/followers/tortuvshin.svg?style=social&label=Follow"
            alt="Followers"></a>
    <a href="https://raw.githubusercontent.com/techstar-cloud/techstar-ecommerce/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg"
            alt="LICENSE"></a>
    <a href="https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D">
        <img src="https://img.shields.io/twitter/url/https/github.com/techstar-cloud/techstar-ecommerce.svg?style=social"
            alt="Tweet"></a>
	  <a href="https://www.codacy.com/app/tortuvshin/techstar-ecommerce?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=techstar-cloud/techstar-ecommerce&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/ef245b14a33f4022b7ffd56b5f40483c"/></a>
</p>


## Laravel Ecommerce Platform

This is a e-commerce platform I made mostly using Laravel 5.4

| [Features][] | [Requirements][] | [Install][] | [How to setting][] | [Contributors][] | [License][] |
|---|---|---|---|---|---|

## Features 
- Multiple language display for front and back end
- Automatic cross sell / up sell / related product offerings
- Open Source
- Social Media Integration
- Unlimited Categories
- Unlimited Products
- Related Products, Recommendations for you in our categories, Store Trending
- Create custom transaction emails
- Newsletter management
- Create different sales rules for groups of products
- Customer loyalty discounts
- An “intelligent” search form
- Custom page creation
- Contact forms
- Manage orders/invoicing/shipment processing
- Manage different sales tax arrangements
- Stock control
- Integration with Social Media promotion tools
- Tier pricing
- Multiple Currency
- Wish Lists
- Ability to Ship to Multiple Addresses
- Single step checkout for registered customers

## Requirements

	PHP >= 5.6.4
	MySQL >= 5.7
	OpenSSL PHP Extension
	PDO PHP Extension
	Mbstring PHP Extension
	Tokenizer PHP Extension
	XML PHP Extension

## Install

Clone repo

```
git clone https://github.com/techstar-cloud/techstar-ecommerce.git
```

Install Composer


[Download Composer](https://getcomposer.org/download/)


composer update/install 

```
composer install
```

Install Nodejs


[Download Node.js](https://nodejs.org/en/download/)


NPM dependencies
```
npm install
```

Using Laravel Mix 

```
npm run dev
```

## How to setting 

Go into .env file and change Database and Email credentials.

```
php artisan migrate
```

```
php artisan db:seed
```
	
Generating a New Application Key
```
php artisan key:generate
```

## Authors

[![Turtuvshin Byambaa](https://avatars0.githubusercontent.com/u/12738721?s=80)](https://github.com/tortuvshin) | [![Enkhbayar Doljinsuren](https://avatars1.githubusercontent.com/u/23227403?s=80)](https://github.com/doljko) 
---|---
[Turtuvshin](https://github.com/tortuvshin) | [Doljinsuren](https://github.com/doljko) 

## Contributors

You may contribute in several ways like creating new features, fixing bugs, improving documentation and examples
or translating any document here to your language. [Find more information in CONTRIBUTING.md](CONTRIBUTING.md).
<a href="https://github.com/techstar-cloud/techstar-ecommerce/graphs/contributors">Contributors</a>

## License

Techstar ecommerce is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

**[⬆ back to top](#laravel-ecommerce-platform)**

[Features]:#features
[Requirements]:#requirements
[Install]:#install
[How to setting]:#how-to-setting
[Authors]:#authors
[Contributors]:#contributors
[License]:#license
