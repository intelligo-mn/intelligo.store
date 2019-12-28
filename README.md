# froala-pages
The next generation JavaScript Page Builder made by devs for devs. A plug and play web page design and editing JavaScript tool for your web application and loved by designers.

![WYSIWYG Froala Pages](https://cdn0.froala.com/assets/design/pages/B/blocks-772f8bf7b5341845324b877006f65217.png)

### Demos
- Basic Demo: https://www.froala.com/pages/demo

## Features
- Edit and Design Modes
- Intuitive UI
- Drag & Drop
- SVG icons
- Custom Toolbars
- Custom Behavior

## Download and Install Froala Pages

### Load from CDN
Using Froala Pages from CDN is the easiest way to install it and we recommend using the jsDeliver CDN as it mirrors the NPM package. 
```js 
<div id="selector-id"></div>
  <script src="https://cdn.jsdelivr.net/npm/froala-pages@latest/js/froala_pages.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/froala-pages@latest/js/pages_design_blocks_pkgd.min.js"></script>

  <script>
    window.pages = new FroalaPages('selector-id', {
      key: '' //Place your key after downloading from https://froala.com/pages
    });

  </script>
```
### Load from CDN module example
```html
<!DOCTYPE html>
<html>

<head>
  <title>Froala Pages</title>

  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/froala-pages@latest/css/froala_pages.min.css">

  <style>
    html,
    body {
      margin: 0;
      padding: 0;
    }

  </style>
</head>

<body>
  <div id="selector-id"></div>
  <script src="https://cdn.jsdelivr.net/npm/froala-pages@latest/js/froala_pages.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/froala-pages@latest/js/pages_design_blocks_pkgd.min.js"></script>

  <script>
    window.pages = new FroalaPages('selector-id', {
      key: '' //Place your key after downloading from https://froala.com/pages
    });
    
  </script>
</body>

</html>
```

### Browser Support

At present, we officially aim to support the last two versions of the following browsers:

- Chrome
- Edge
- Firefox
- Safari
- Opera
- Internet Explorer 11
- Safari iOS
- Chrome, Firefox and Default Browser Android


### Reporting Issues

We use GitHub Issues as the official bug tracker for the Froala Pages. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Froala Pages. The issue that you are about to report may be already fixed in the latest master branch version: https://github.com/froala/froala-pages/tree/master/js.

2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed. A JSFiddle is always welcomed, and you can start from this basic one.

3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


### Technical Support or Questions
If you have questions or need help integrating the editor please [contact us](https://www.froala.com/pages/contact) instead of opening an issue.


### Licensing
In order to use the Froala Pages you have to purchase licenses according to needs. You can find more about that on our website on the [pricing plan page](https://www.froala.com/pages/pricing).