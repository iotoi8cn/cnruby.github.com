---
layout: page
title:  "Welcome to Jekyll!"
date:   2019-08-23 15:24:35 +0200
categories: jekyll update
---
* mkdir _news
* touch _news/2019-08-26-news.markdown
* touch news.markdown
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

* vi _config.yml
{% highlight %}
...
collections:
  news:
    output: true
{% endhighlight ruby %}

 post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
