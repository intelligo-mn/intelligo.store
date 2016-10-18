## Цахим худалдааны системийн танилцуулга

	энэхүү онлайн худалдааны платпормыг Laravel 5. хувилбар дээр хөгжүүлж байна.

<a name="installation"></a>
## Суулгах

Дараах коммандыг ажиллуулж энэхүү төслийг clone хийж авна:

```
git clone https://github.com/tortuvshin/modu-ecommerce.git
```

Дараа нь, энэхүү төслийг татаж авсан хавтаст орж composer update/install комманд ажиллуулна

```
composer update/install
```

## Тохируулах

Дараа нь .env-example файлыг өөрчилж .env болгон өөрийн өгөгдлийн сан болон серверийг тохируулна

Өгөгдлийн санг үүсгэж тохируулсаны дараа дараах коммандаар хүснэгтүүдийг үүсгэнэ:

```
php artisan migrate:refresh
```

Туршилтын өгөгдөл дараах коммандаар оруулна:

```
php artisan migrate:refresh --seed
```
	
Frontend хөгжүүлэлтэнд хамааралтай сангуудыг дараах командаар оруулна:

```
bower install
```

reChaptcha код авах: 

```
https://www.google.com/recaptcha/admin#list
```

```
RECAPTCHA_PUBLIC_KEY, and RECAPTCHA_PRIVATE_KEY
```

reCaptcha кодуудаа .env файлд оруулна. Жишээ нь: 

```
RECAPTCHA_PUBLIC_KEY = ModuRecaptcahPublicKeyObtained

RECAPTCHA_PRIVATE_KEY = ModuRecaptcahPrivateKeyObtained
```

***Note:*** ```APP_DEBUG == true```, reCaptcha will not be applied

## Laravel Elixir ашиглах
 
 Gulp суулгах:

```
npm install --global gulp
```
NPM сангууд суулгах:

```
npm install 
```

Хэрвээ Window үйлдлийн систем  болон VM ашиглаж хөгжүүлэлт хийж байгаа бол дараах коммандыг ажиллуулна: 
```
npm install --no-bin-links
```
Gulp ашиглах:

```
gulp
```
