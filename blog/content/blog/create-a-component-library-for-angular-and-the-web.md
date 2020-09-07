---
title: 'Angular Elements: Create a Component Library for Angular and the Web'
description: 'Publish Angular components and Custom Elements from a single project! Using the Angular CLI.'
published: true
publishedAt: 2020-03-25T10:12:00.000Z
updatedAt: 2020-03-25T10:12:00.000Z
tags:
  - Angular
  - Web Components
keywords:
  - Custom Elements
authors:
  - 'Gary Großgarten'
github: 'https://github.com/notiz-dev/design'
---

Reuse your **Angular components** almost everywhere - with [Angular Elements](https://angular.io/guide/elements).

In this guide you'll learn how to
* Scaffold a reusable component library.
* Export the library for **Angular** and as **[Web Components](https://www.webcomponents.org/)**.
* Publish everything to **npm**.


Let's get started. ⬇

## Create the project

This guide uses the [Angular CLI 9.0.7](https://cli.angular.io/) to scaffold most of the project structure and configuration for your **reusable UI Library**.

First, initialize a new Angular application with  `ng new APP_NAME`. Feel free to use routing and your favorite stylesheet format when prompted.

Open the newly created project in your favorite IDE.

Next, run: 

```bash
ng g library components
```
This step will generate a new **library** under `./projects/components` and add an example component. The library is ready to be shared and used in all of your Angular applications without further configuration. 💆

Perform an initial build of the component library by running: 

```bash
ng build components
```

> Currently, **Angular Elements** only supports projects of type `application` to create Custom Elements. This means you need to generate an _additional_ application. The sole purpose of the application is to import your angular components and output them as Custom Elements.

To generate the elements application run:

```bash
ng g application elements
```

Additionally, run the `@angular/elements` schematic:

```bash
ng add @angular/elements --project elements
```

This will create a new app in the subfolder `./projects/elements` and install all the necessary dependencies and polyfills needed to set up Angular Elements.

If you want to publish your components as Custom Elements cd into `./projects/elements` and create a package.json using 

```bash
npm init
```

Then, add the following to the newly created **package.json**:

```js
{
  ...
  "files": ["elements.js", "styles.css"],
  ...
}

```

Your project should now look something like this:

![folder structure and package.json content](assets/img/blog/create-a-component-library-for-angular-and-the-web/optimized/structure.png)

## Configure Angular Elements

In the elements application delete all files in `./projects/elements/src/app` except `app.module.ts`.

You need to define your own bootstrapping method for the elements application.
Do some changes to your elements `app.module.ts`:

* Remove the bootstrap array from `NgModule` declaration.
* Import `ComponentsModule` and `ComponentsComponent` from the components library.
* Add `ngDoBootstrap` hook.
* For every component create an element using the `createCustomElement` function from `@angular/elements`. Then define the element using web's native `customElemments.define` function, specifying a selector.


```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentsModule, ComponentsComponent } from 'components';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(ComponentsComponent, { injector: this.injector })
    customElements.define("lib-components", element);
  }

 }
```

Remove `zone.js` (optional):

> Removing `zone.js` is probably a good idea. Read more about it [in this great article](https://www.angulararchitects.io/aktuelles/angular-elements-part-iii/). Just keep in mind that you need to handle [change detection](https://angular.io/api/core/ChangeDetectorRef) yourself.


```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: 'noop' })
  .catch(err => console.error(err));

```

## Time to build ⚙ 

In your root package.json add the following scripts:

```js
{
  "scripts": {
    ...
    "build:elements": "ng build --prod --project elements --output-hashing none && npm run pack:elements && cp projects/elements/package.json dist/elements",
    "pack:elements": "cat ./dist/elements/{runtime,polyfills,main}-es5.js > dist/elements/elements.js && ls -lah dist/elements/elements.js",
    "build:components": "ng build --prod --project components",
    ...
  },
  ...
  
}

```
To build the elements application run: 

```bash
npm run build:elements
```

The script exports your Angular components as Custom Elements during the build process. Also it will run the `pack:elements` script and copy the previously created `package.json` to `./dist/elements`.
> The `pack:elements` script is optional yet very useful because it will bundle the js build outputs into a single `elements.js` file. This makes it easier to include your library in other applications.

## Try it out

Use your Angular components by including them in the root Angular application:

In app.module.ts:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from 'components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

In `app.component.html`:

```html
<h1>angular component</h1>
<lib-components></lib-components>
```

Run the root application with `ng s`.

![angular app running and displaying the component](assets/img/blog/create-a-component-library-for-angular-and-the-web/optimized/angular-component.png)

Using your Custom Elements is simple. Create an index.html in the root of your project and add following code snippet:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dist/elements/styles.css">
    <script src="dist/elements/elements.js"></script>
</head>
<body>

    <h1>Web Component (Costum Elements)</h1>
    <lib-components></lib-components>
</body>
</html>
```

To test, serve it on a http server and open the index.html. I'm using [serve](https://www.npmjs.com/package/serve).

```bash
serve .
```


![web component](assets/img/blog/create-a-component-library-for-angular-and-the-web/optimized/custom-element.png)


## Publish to npm

The only thing left to do is to publish your components and Custom Elements to npm.
This is fairly easy. Either run `npm publish dist/components` or `npm publish dist/elements`.

> Reminder: Before releasing, you probably want to update `./projects/components/package.json` and `./projects/elements/package.json` to include your libraries' name and version. A way to name your libraries could be `ngx-<NAME>` for angular and `wc-<NAME>` for the Custom Elements.

✨ Congratulations! You successfully created and published a custom Angular component library that can be used almost everywhere!

If you have further questions on the topic, feedback on the article or just want to say hi you can hit me up on [twitter](https://twitter.com/garygrossgarten).
