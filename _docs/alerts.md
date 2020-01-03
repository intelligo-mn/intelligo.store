---
title: Adding alerts to content
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
tags: [features]
author: evan
---

There are four alert styles:

{% include alert.html style="primary" text="Cras at dolor eget urna varius faucibus tempus in elit." %}

{% include alert.html style="success" text="Cras at dolor eget urna varius faucibus tempus in elit." %}

{% include alert.html style="warning" text="Cras at dolor eget urna varius faucibus tempus in elit." %}

{% include alert.html style="danger" text="Cras at dolor eget urna varius faucibus tempus in elit." %}

Add alerts to a post using the following includes:

{% raw %}
```yaml
{% include alert.html style="primary" text="Cras at dolor eget urna varius faucibus tempus in elit." %}

{% include alert.html style="success" text="Cras at dolor eget urna varius faucibus tempus in elit." %}

{% include alert.html style="warning" text="Cras at dolor eget urna varius faucibus tempus in elit." %}

{% include alert.html style="danger" text="Cras at dolor eget urna varius faucibus tempus in elit." %}
```
{% endraw %}


