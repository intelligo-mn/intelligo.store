---
title: Creating a changelog
subtitle: Cras at dolor eget urna varius faucibus tempus in elit. Cras a dui imperdiet, tempus metus quis, pharetra turpis.
tags: [setup]
author: evan
---

Theme comes with two different changelogs, timeline and post style.

### Timeline style changelog

Timeline changelog can be added to a page using an include and its data is pulled from a `_data/changelog.yml` data file. This changelog is suitable for simple lists of changes.

Add changelog to a page using the following include:
{% raw %}
```yaml
{% include changelog.html %}
```
{% endraw %}

Changelog enties are added in `_data/changelog.yml`:

```yml
- title: Version 0.6.0
  label:
  date: Aug 15, 2017
  list:
  - Added style support for radio and checkbox in Firefox
  - Removed class from Section component
```

### Post style changelog

This changelog is suitable for changelog entries with more content beyond simple lists adding text and media.

Post styled changelog is displayed by setting `layout: changelog` in page YAML Front Matter:

```yml
---
layout: changelog
title: Changelog
permalink: /changelog/
---
```

Changelog enties are added by creating posts in `_changelog`:

{% raw %}
```yml
---
title: January Updates
date: 2019-01-22
---

{% include tag.html tag="added" %}
- Some scheduled changelogs, tweets, and slack messages queued up this weekend and were not published on time. We fixed the issue and all delayed publications should be out.
- We now prioritize keywords over title and body so customers can more effectively influence search results
latency)
- Search engine upgraded. Bringing with it enhancements and bug fixes.
- Replaced login / registration pre-app screens with a cleaner design

{% include tag.html tag="fixed" %}
- Fixed an issue with the sync autolinker only interlinking selectively.
- Fixed up an issue with prematurely logging out users
```
{% endraw %}

Tags can be modified in `_data/tags.yml`:
```yml
added:
  text: Added
  color: "#3778ff"

changed:
  text: Changed
  color: "#3aaa55"
```