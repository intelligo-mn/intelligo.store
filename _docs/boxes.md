---
title: Category boxes section
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
tags: [features]
author: evan
---

Home page category boxes are added in `_data/navigation_boxes.yml`, e.g.:
```yml
- title: Getting Started
  desc: Get your account up and running in just few easy steps
  icon: settings
  doc: usage

- title: Account and Billing
  desc: Managing your account, creating new users and exporting data
  icon: credit-card
  doc: drafts
```

All available icons can be found [here](https://getuikit.com/docs/icon#library).

Add boxes section to a page using the following include:
{% raw %}
```yaml
{% include boxes.html columns="3" title="Browse Topics" subtitle="Chose an option that you need help with or search above" %}
```
{% endraw %}

