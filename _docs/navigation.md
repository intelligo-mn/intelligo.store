---
title: Navigation bar
subtitle: This document covers the setup and options of theme feature described in the doc title
author: sara
tags: [setup]
---

Set in the main navigation links in `_data/navigation_header.yml`:

```yaml
  - title: About
    url: /about/
```

To add a button to navigation use:
```yaml
  - title: Contact
    url: /contact/
    button: success
```

All available buttons:
```yaml
  - title: Changelog
    url: /contact/
    button: default

  - title: Contact
    url: /contact/
    button: primary

  - title: Changelog
    url: /contact/
    button: secondary

  - title: Contact
    url: /contact/
    button: danger

  - title: Changelog
    url: /contact/
    button: success

  - title: Contact
    url: /contact/
    button: warning

  - title: Changelog
    url: /contact/
    button: primary-outline

  - title: Contact
    url: /contact/
    button: danger-outline

  - title: Changelog
    url: /contact/
    button: success-outline

  - title: Contact
    url: /contact/
    button: warning-outline
```
