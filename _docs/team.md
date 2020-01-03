---
title: Team members section
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
tags: [features]
author: alex
---

To add the following to a page:
{% raw %}
```yaml
{% include team.html authors="evan, john, sara, alex, tom, daniel" title="We are here to help" subtitle="Our team is just an email away ready to answer your questions" %}
```
{% endraw %}

Specifying authors is optional, if not defined all authors will be displayed form `_config.yml` file.