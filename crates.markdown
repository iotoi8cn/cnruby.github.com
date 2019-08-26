---
layout: page
title: 软件包箱
permalink: /crates/
---

<ul>
  {% for item in site.crates %}
    <li>
      <h2><a href="{{ item.url }}">{{ item.name }}</a></h2>
      <h3>{{ item.position }}</h3>
      <p>{{ item.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>