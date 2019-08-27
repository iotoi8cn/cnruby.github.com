---
layout: page
title: 欢迎你!
tagline: Welcome!
---
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## Quick Commands

    cd ~/GITROOT/cnruby
    git clone https://github.com/cnruby/cnruby.github.com
    cd cnruby.github.com
    bundle install
    bundle update github-pages
    bundle exec jekyll serve --watch --incremental
    open http://127.0.0.1:4000/
    git push origin master or GitHub Desktop >> Commit to master >> Menu >> Repository >> Push


