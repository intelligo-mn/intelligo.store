---
title: Floating Form Field with Tailwind CSS
description: Learn how to build a floating form field with Tailwind CSS
published: true
publishedAt: 2020-05-28T21:50:00.000Z
updatedAt: 2020-05-28T21:50:00.000Z
tags:
  - Tailwind CSS
  - CSS
keywords:
  - Material Design
authors:
  - Marc Stammerjohann
github: https://github.com/notiz-dev/floating-form-field-tailwindcss
---

In the following lesson you will learn how to use [Tailwind CSS](https://tailwindcss.com) utility-first approach to create a floating form field known from [Material Design](https://material.io/components/text-fields). This is inspired by the awesome video from [fireship.io](https://www.youtube.com/watch?v=yrrw6KdGuxc).

![Floating Form](assets/img/blog/floating-form-field-with-tailwindcss/floating-form.gif)

You can follow along in a new project or get the [source code](https://github.com/notiz-dev/floating-form-field-tailwindcss) from GitHub.

## Setup

Let's start in an empty directory and setup up a default `package.json` file using `npm init -y`.

### Setup Tailwind CSS

Setup [Tailwind](https://tailwindcss.com/docs/installation/) by installing

```bash
npm i -D tailwindcss postcss-cli autoprefixer
```

Generate a Tailwind config file as you will [customize](https://tailwindcss.com/docs/configuration/) Tailwind for the floating form field later.

```bash
npx tailwindcss init
```

Create `postcss.config.js` file requiring `tailwindcss` and `autoprefixer` as a plugin:

```js
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
};
```

Create your tailwind styles under `css/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add those scripts to your `package.json` one to build and the other to watch changes made to the `tailwind.css` file.

```json
"scripts": {
  "build": "postcss css/tailwind.css -o public/build/tailwind.css",
  "dev": "postcss css/tailwind.css -o public/build/tailwind.css -w"
},
```

### Setup HTML

Start with the following simple HTML layout - create an `index.html` in the **public** directory.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FFFwT</title>

    <link rel="stylesheet" href="build/tailwind.css" />
  </head>
  <body class="antialiased p-10">
    <form>
      <div>
        <input type="text" name="username" placeholder=" " />
        <label for="username">Username</label>
      </div>
    </form>
  </body>
</html>
```

You can use [live-server](https://www.npmjs.com/package/live-server) to start a dev-server with live reload.

```bash
live-server public
```

Here you have your starting point - an input and a label.

![Input and Label](assets/img/blog/floating-form-field-with-tailwindcss/optimized/1-input-and-label.png)

Let's add styles to create a floating form field.

## Floating Form Field

### Focus Border

Start by adding a bottom border to the `div` using `border-b-{width}`

```html
<div class="border-b-2">
  <input type="text" name="username" placeholder=" " />
  <label for="username">Username</label>
</div>
```

![Border bottom](assets/img/blog/floating-form-field-with-tailwindcss/optimized/2-border.png)

To change the border color when the input is focused use the pseudo-class `focus-within`. Enable the [focus-within variant](https://tailwindcss.com/docs/pseudo-class-variants/#focus-within) in Tailwind for `borderColor` by adding it in the `tailwind.config.js` under the variants section:

```js
variants: {
  borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
},
```

Now add `focus-within:border-blue-500` to change the border color on focus

```html
<div class="my-4 border-b-2 focus-within:border-blue-500">
  <input type="text" name="username" placeholder=" " />
  <label for="username">Username</label>
</div>
```

![Change border color on focus](assets/img/blog/floating-form-field-with-tailwindcss/optimized/3-focus-border-color.png)

### Floating Label

Begin with changing the position of the `div` to `relative` so that you can use `top` to control the position of the `label`. Add `class="absolute top-0"` to the `label`.

`input` is an inline element, add the Tailwind `block` class to change it to a block element. Also set the input width to 100% with `w-full` to tap the input on the whole form field. Additionally, add `appearance-none` and `focus:outline-none` to the input to remove browser specific styles.

```html
<div class="relative my-4 border-b-2 focus-within:border-blue-500">
  <input type="text" name="username" placeholder=" " class="block w-full appearance-none focus:outline-none" />
  <label for="username" class="absolute top-0">Username</label>
</div>
```

Currently the label is covering the input field and preventing you from focusing the input 🙈.

![Label is covering up the input](assets/img/blog/floating-form-field-with-tailwindcss/optimized/4-label-covers-input.png)

Let's change the `z-index` of the label to be behind the input field by setting it to `z-index: -1`. Extend the Tailwind theme to generate a negative z-index for you:

```js
theme: {
  extend: {
    zIndex: {
      "-1": "-1",
    },
  },
}
```

Add `-z-1` class to the label, now the label is not visible anymore. Add `bg-transparent` to the `input`. 

```html
<div class="relative my-4 border-b-2 focus-within:border-blue-500">
  <input type="text" name="username" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
  <label for="username" class="absolute top-0 -z-1">Username</label>
</div>
```

The label is visible again and the input field can be focused by taping on the label too 🐵.

Next make the label float above the input, again, using the pseudo-class `focus-within`. Open your `tailwind.css` and add the following CSS selector:

```css
input:focus-within ~ label {
 
}
```

Now use Tailwind's [@apply](https://tailwindcss.com/docs/functions-and-directives/#apply) to transform, scale and change the label text color on input focus.

```css
input:focus-within ~ label {
 @apply transform scale-75 -translate-y-6 text-blue-500;
}
```

Also add `duration-300` to your label class to control the labels transition duration.

![Floating label on focus](assets/img/blog/floating-form-field-with-tailwindcss/optimized/5-floating-label-on-focus.png)

Awesome the label is floating 🎈, however, it stops floating when you remove the focus from the input 😞. The label should float if the input field has some content. Target the `placeholder`, if its not shown `input:not(:placeholder-shown) ~ label` thus the input has content and the label should float. 

```css
input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6;
}

input:focus-within ~ label {
  @apply text-blue-500;
}
```

![Floating label without focus](assets/img/blog/floating-form-field-with-tailwindcss/optimized/6-floating-label-without-focus.png)

Yeah 🤩, the label floats on focus and if the input has content. It seems the label is not aligned with the input field. Set `transform-origin` on the label to 0%. Let Tailwind generate it for you, open `tailwind.config.js` and add it to the theme section:

```js
theme: {
  extend: {
    transformOrigin: {
      "0": "0%",
    },
    zIndex: {
      "-1": "-1",
    },
  },
}
```

Now add `origin-0` to the label and finally you have your own floating form field made with Tailwind CSS 😍🚀

![Floating Form Field](assets/img/blog/floating-form-field-with-tailwindcss/optimized/7-floating-form-field.png)

### Building a form

Let's build a form field by duplicating the floating form field or by extracting the styles with [@apply](https://tailwindcss.com/docs/functions-and-directives/#apply).

Add `space-y-{size}` to the form to add margin between your input fields. You could also wrap it with a card.

```html
 <form class="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10">
  <h2 class="text-2xl font-bold text-center">Login</h2>
  <div class="relative border-b-2 focus-within:border-blue-500">
    <input type="text" name="username" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="username" class="absolute top-0 -z-1 duration-300 origin-0">Username</label>
  </div>
  <div class="relative border-b-2 focus-within:border-blue-500">
    <input type="text" name="email" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="email" class="absolute top-0 -z-1 duration-300 origin-0">Email</label>
  </div>
  <div class="relative border-b-2 focus-within:border-blue-500">
    <input type="password" name="password" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="password" class="absolute top-0 -z-1 duration-300 origin-0">Password</label>
  </div>
</form>
```

Here you have your first form using the floating form field

![Floating form](assets/img/blog/floating-form-field-with-tailwindcss/floating-form.gif)

Next, try out another style - Outline Form Field.

## Outline Form Field

In this style the form field has an outline all around and the label floats into the outline. Reuse the floating form field and change `border-b-2` to `border-2` this gives you the outline. 

Add padding `p-4` to create space inside the outline and increase the font size `text-lg` of the input and the label.

```html
<div class="relative border-2 focus-within:border-blue-500">
  <input type="text" name="username" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
  <label for="username" class="absolute top-0 p-4 text-lg -z-1 duration-300 origin-0">Username</label>
</div>
```

Look at our outline form field

![Outline form field](assets/img/blog/floating-form-field-with-tailwindcss/optimized/8-outline-form-field.png)

Focus the input and you notice the label is **not** covering up the outline.

![Floating label not covering the outline](assets/img/blog/floating-form-field-with-tailwindcss/optimized/9-outline-floating-label-below.png)

To make the label cover up the outline customize the floating CSS applied to the outline form field. Duplicate the custom CSS in your `tailwind.css` and add `.outline` class to both selectors. Add `outline` class to the `div` around your input and label.

```css
.outline input:focus-within ~ label,
.outline input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6;
}
```

Update a few styles on the label to remove the top and bottom padding - `py-0`. Also reduce the left and right padding to `px-1`, add margin left `ml-3` to align it with the input. Reset the z-index to `z-0` that the label is above the outline. Finally, reduce the translate y value until the label is perfectly matching the outline.

```css
.outline input:focus-within ~ label,
.outline input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-4 z-0 ml-3 px-1 py-0;
}
```

Perfect the label is exactly on the outline, but the line is still visible.

![Floating label covers outline with line through](assets/img/blog/floating-form-field-with-tailwindcss/optimized/10-outline-floating-label-with-line-through.png)

To hide the outline set the background of the label to the same background of the container where you place the form field. Add `bg-white` to the label, this should do the trick.

```html
<div class="outline relative border-2 focus-within:border-blue-500">
  <input type="text" name="username" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
  <label for="username" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Username</label>
</div>
```

Now you have the outline form field working too. 👍

### Building a form

Now create a form using the outline style.

```html
<form class="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10">
  <h2 class="text-2xl font-bold text-center">Login</h2>
  <div class="outline relative border-2 focus-within:border-blue-500">
    <input type="text" name="username" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
    <label for="username" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Username</label>
  </div>
  <div class="outline relative border-2 focus-within:border-blue-500">
    <input type="email" name="email" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
    <label for="email" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Email</label>
  </div>
  <div class="outline relative border-2 focus-within:border-blue-500">
    <input type="password" name="password" placeholder=" " class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
    <label for="password" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Password</label>
  </div>
</form>
```

![Outline Form](assets/img/blog/floating-form-field-with-tailwindcss/outline-form.gif)

If you followed along, create and customize your own floating form field w/ Tailwind CSS. Send me your own design on Twitter [@mrcjln](https://twitter.com/mrcjln).
