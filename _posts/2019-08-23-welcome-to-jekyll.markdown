---
layout: page
title:  "How to create the folder in Jekyll!"
date:   2019-08-23 15:24:35 +0200
categories: posts
---

## How to create the folder in Jekyll!
- make a new folder

{% highlight %}
mkdir _news
{% endhighlight %}

- create and edit a new listingsfile news.markdown
{% highlight %}
touch news.markdown
vi news.markdown
{% endhighlight %}

- add the follow code to the file news.markdown

{% highlight %}
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
{% endhighlight %}

- edit the file _config.yml

{% highlight %}
vi _config.yml
{% endhighlight %}

- add the follow code to the file _config.yml

{% highlight %}
...
collections:
  news:
    output: true
{% endhighlight %}

- create a new artile
touch _news/2019-08-26-news.markdown
