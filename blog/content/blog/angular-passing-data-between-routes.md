---
title: Angular route state
description: Angular route хооронд route state ашиглан утга дамжуулах
published: true
publishedAt: 2020-03-03T08:55:00.000Z
updatedAt: 2020-03-03T16:50:00.000Z
tags:
  - Angular
  - Typescript
keywords:
  - Angular route state
authors:
  - Turtuvshin Byambaa
github: https://github.com/tortuvshin
---

Angular route хооронд шилжихэд дараагийн хуудасруу өгөгдөл дамжуулах шаардлага их гардаг. Тухайн асуудлыг шийдэхийн тулд query param дамжуулах зэргээр шийдэх нь элбэг байдаг бөгөөд энэнээс өөр аятайхан шийдэл хайж яваад
Angular 7.2 хувилбараас хойш [route state](https://angular.io/guide/router#router-state) ээр утга дамжуулах боломжтой болсон гэдгийг олж мэдэв.

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

