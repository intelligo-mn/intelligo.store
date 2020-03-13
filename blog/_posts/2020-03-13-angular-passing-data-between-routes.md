---
title: Angular route хооронд утга дамжуулах
author: turtuvshin
categories: [angular, router]
---

Angular route солигдоход жижиг хэмжээний датаг param зэргээд дамжуулж шийдэж байсан бөгөөд энэнээн өөр аятайхан шийдэл хайж яваад
Angular 7.2 хувилбараас хойш [route state](https://angular.io/guide/router#router-state) ээр утга дамжуулах боломжтой болсон олж мэдэв.

State ийг router navigate дээр дараах байдлаар бичиж болно:
```ts
this.router.navigate(['example'], { 
  state: { example: 'data' } 
});

```

эсвэл html template дээр:

```html
<a routerLink="/example" [state]="{ example: 'data' }">
  Hello World
</a>
```

Дамжуулсан утгаа уншиж авахдаа:

```ts
this.router.getCurrentNavigation().extras.state;
```
эсвэл:

```ts
window.history.state
```


