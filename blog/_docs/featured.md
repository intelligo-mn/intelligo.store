---
title: Fearured docs section
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
tags: [features]
author: evan
---

Then add the following to a page to display featured docs:
{% raw %}
```yaml
{% include featured.html tag="featured" title="Popular Articles" subtitle="Selected featured articles to get you started fast in Jekyll" %}
```
{% endraw %}

All docs with a `featured` tag will be displayed:
```yml
tags: [featured]
```