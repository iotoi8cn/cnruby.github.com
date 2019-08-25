---
layout: page
title: Rust语言
permalink: /rust/
---


<ul>
  {% for item in site.rust %}
    <li>
      <h2><a href="{{ item.url }}">{{ item.name }}</a></h2>
      <h3>{{ item.position }}</h3>
      <p>{{ item.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>
