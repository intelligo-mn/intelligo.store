---
title: Adding media to post and doc content
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
tags: [features, featured]
author: alex
---

### Adding images
To add an image to a post or page use the following codes:
Local image from `/uploads/` directory:
{% raw %}
```yaml
{% include image.html img="girl.jpg" alt="Alt for image" caption="Girl on a rock" %}
```
{% endraw %}

External wide image with lightbox:
{% raw %}
```yaml
{% include image.html img="https://source.unsplash.com/TT-ROxWj9nA.jpg" lightbox="true" alt="Alt for image" caption="Image in lightbox" %}
```
{% endraw %}

Uploads folder location can be changed in `_config.yml`.

### Slideshow

{% raw %}
```yaml
{% include slideshow.html gallery="slideshow-1" %}
```
{% endraw %}

The `gallery` attribute refers to a folder inside your `uploads` folder, all images in `slideshow-1` folder will be displyed in slideshow. Uploads folder location can be changed in `_config.yml`.

### Responsive Videos
Embed local videos:
```html
<video controls playsinline uk-video="automute: true">
    <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" type="video/mp4">
    <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.ogv" type="video/ogg">
</video>
```
Embed YouTube videos:
```html
<iframe src="http://www.youtube.com/embed/YE7VzlLtp-4?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="600" height="340" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
```
