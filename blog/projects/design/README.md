# @notiz/ngx-design

Design components for [notiz.dev](https://notiz.dev) for Angular 9.

## 📦 Installation

```bash
npm install --save @notiz/ngx-design
```

## 🔨 Usage

Import the modules into your components for example `NizTabsModule`.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NizTabsModule } from '@notiz/ngx-design';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NizTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Now use the component `niz-tabs` in your template:

```html
<niz-tabs>
  <router-outlet></router-outlet>
</niz-tabs>
```
