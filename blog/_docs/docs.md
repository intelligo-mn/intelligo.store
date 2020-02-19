---
title: Creating docs posts
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
tags: [setup]
author: evan
---

Create new doc post entries in `_docs` folder, similar to creating posts, but with following front matter settings:

```yml
---
title: Category hosting Setting up new domain and page
subtitle: This is optional doc subtitle
tags: [featured, development]
author: peter
---
```

Sidebar navigation on docs post can edited in `_data/navigation_docs.yml`:

```yml
- title: Getting Started    # Section title
  docs:
  - home                    # Doc file name from _docs folder
  - quickstart
  - installation
  - windows
```
