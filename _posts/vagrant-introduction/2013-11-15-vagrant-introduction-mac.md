---
layout: post
category : lessons
tagline: "Supporting tagline"
tags : [intro, beginner, vagrant, tutorial, mac]
---
{% include JB/setup %}


This Vagrant introduction will outline specifically  what Vagrant is and why you would want to use it.
Directly following the intro we'll learn exactly _how_ Vagrant does what it does.

## Overview

### What is Vagrant?

Vagrant is a tool for building and distributing working environments. You can create and configure lightweight, reproducible, and portable development environments. Vagrant](http://www.vagrantup.com)

### WHY VAGRANT?
Vagrant provides easy to configure, reproducible, and portable work environments built on top of industry-standard technology and controlled by a single consistent workflow to help maximize the productivity and flexibility of you and your team.

To achieve its magic, Vagrant stands on the shoulders of giants. Machines are provisioned on top of VirtualBox, VMware, AWS, or any other provider. Then, industry-standard provisioning tools such as shell scripts, Chef, or Puppet, can be used to automatically install and configure software on the machine.

### 第一步：在MacOSX上安装虚拟机VirtualBox

    ** 在MacOSX上安装虚拟机VirtualBox
    wget http://download.virtualbox.org/virtualbox/4.3.2/VirtualBox-4.3.2-90405-OSX.dmg
    open VirtualBox-4.3.2-90405-OSX.dmg
    open /Volumes/VirtualBox/VirtualBox.mpkg

    ** 启动虚拟机VirtualBox
    open /Applications/VirtualBox.app

![软件世界：分布式虚拟开发环境工具Vagrant——第一步](https://lh5.googleusercontent.com/-UsQU-0JYftc/UBWDM0mUQPI/AAAAAAAADAg/WPRYESh_rvA/s400/virtualbox-2012-07-3-0035.png)

### 第二步：在MacOSX上安装虚拟机Vagrantup

    ## 安装方法一
    gem install vagrant

    ## 安装方法二
    wget http://files.vagrantup.com/packages/a40522f5fabccb9ddabad03d836e120ff5d14093/Vagrant-1.3.5.dmg
    open Vagrant-1.3.5.dmg
    open Vagrant.pkg

### 第三步：在MacOSX上使用虚拟机Vagrantup

    # 打开终端
    vagrant
    vagrant －v

![软件世界：分布式虚拟开发环境工具Vagrant——第二步](https://lh6.googleusercontent.com/-EhKFObAJr7E/UBWYSsYOlCI/AAAAAAAADA8/g-Jz-NMBbg4/s400/vagrant-2012-07-31-0035.png)

### 第四步：在MacOSX上安装Vagran虚拟开发环境

### 参考资料
** http://www.virtualbox.org/wiki/Downloads
** http://downloads.vagrantup.com/
** https://gist.github.com/2714101

## Next Steps

Please take a look at [{{ site.categories.api.first.title }}]({{ BASE_PATH }}{{ site.categories.api.first.url }})
or jump right into [Usage]({{ BASE_PATH }}{{ site.categories.usage.first.url }}) if you'd like.