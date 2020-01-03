---
title: Frequently asked questions section
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
tags: [features, featured]
author: alex
---

Create FAQ post in `_faqs` folder (categories are optional):
```yml
---
title: Do you provide customer support?
categories: [presale]
---
```

To add the following to a page:
{% raw %}
```yaml
{% include faqs.html multiple="true" title="Frequently asked questions" category="presale" subtitle="Find quicke answers to frequent pre-sale questions asked by customers" %}
```
{% endraw %}

Specifying category is optional, if not defined all FAQ posts will be displayed. To display multiple FAQs at the same time without one collapsing when the other one is opened, add the `multiple="true"` attribute.