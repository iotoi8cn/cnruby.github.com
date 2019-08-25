---
layout: page
title: 新闻报道
permalink: /news/
---

<ul>
  {% for item in site.news %}
    <li>
      <h2><a href="{{ item.url }}">{{ item.name }}</a></h2>
      <h3>{{ item.position }}</h3>
      <p>{{ item.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>
