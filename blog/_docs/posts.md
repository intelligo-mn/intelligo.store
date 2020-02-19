---
title: Creating your first post in Jekyll
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
author:
tags: featured
---

To create a new post, you can create a new markdown file inside the `_posts` directory by following the recommended file naming format:
```
YEAR-MONTH-DAY-title.MARKUP
```
Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. For example, the following are examples of valid post filenames:

```
2011-12-31-new-years-eve-is-awesome.md
2012-09-12-how-to-write-a-blog.md
```

Post requires front matter, everything in between the first and second --- are part of the YAML Front Matter, and everything after the second --- will be rendered with Markdown and show up as “Content”.
The following is a post file with different configurations you can add as example:

```yaml
---
layout: post
title: How To Travel On Low Budget
---
```

You can rebuild the site in many different ways, but the most common way is to run `bundle exec jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To keep things more organized, add post images to `/assets/posts/` directory, and add theme images to `/assets/img/` directory.
