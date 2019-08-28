---
layout: page
title:  "使用rbenv安装Ruby语言环境"
tagline: "Installing Ruby With Rbenv"
date:   2019-08-28 15:24:35 +0200
tags: [Ruby, rbenv, Install]
categories: ruby
---


### 安装rbenv / Install rbenv
```bash
cd ~
git clone git://github.com/sstephenson/rbenv.git .rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
source ~/.bash_profile
```

### 安装Ruby / Install Ruby
```bash
sudo apt-get install -y libreadline-dev
rbenv install 2.5.3
rbenv -v
cd PROJECT_PATH
rbenv local 2.5.3
ruby -v
gem install bundler -v '1.17.3'
```

### 参考资料　Referencs
- [Installing Ruby With Rbenv](http://octopress.org/docs/setup/rbenv/)
- [app’s Ruby environment with rbenv](https://github.com/rbenv/rbenv)
- [An update on the Bundler 2 release](https://bundler.io/blog/2019/01/04/an-update-on-the-bundler-2-release.html)
