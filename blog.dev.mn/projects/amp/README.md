# scully-plugin-lazy-images

`scully-plugin-lazy-images` is a `postRenderer` plugin for [Scully](http://scully.io/) turning your images into lazy loading images using [lazyload](https://github.com/tuupola/lazyload). This will replace the `src` attribute with `data-src` and adds the class `lazyload` to the `img` tag.

A browser [native approach](https://web.dev/native-lazy-loading/) would be to use `loading="lazy"` for each `img` tag. When it has broader [browser support](https://caniuse.com/#feat=loading-lazy-attr) we will switch to the native approach.

## 📦 Installation

To install this plugin with `npm` run

```
$ npm install @notiz/scully-plugin-lazy-images --save-dev
```

## Usage

Add the plugin to the `defaultPostRenderers` in your `scully.config`:

```js
require("@notiz/scully-plugin-lazy-images");

exports.config = {
  projectRoot: "./src/app",
  defaultPostRenderers: ["lazyImages"],
  routes: {}
};
```

If you want to use the plugin for a specific route do:

```js
require('@notiz/scully-plugin-lazy-images');

exports.config = {
  ...
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './content/blog'
      },
      postRenderers: ['lazyImages']
    }
  }
  ...
};

```
