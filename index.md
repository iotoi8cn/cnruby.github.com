---
layout: page
title: 欢迎你!
tagline: Supporting tagline
---
{% include JB/setup %}

## First Posts

- Read [Websites for you and your projects.](https://pages.github.com/)

- Read [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

- Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

- Read [Using Jekyll as a static site generator with GitHub Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)

- Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:
    
    title : My Blog =)
    
    author :
      name : Name Lastname
      email : blah@email.test
      github : username
      twitter : username

The theme should reference these variables whenever needed.
    
## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

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

## To-Do

This theme is still unfinished. If you'd like to be added as a contributor, [please fork](http://github.com/plusjade/jekyll-bootstrap)!
We need to clean up the themes, make theme usage guides with theme-specific markup examples.


