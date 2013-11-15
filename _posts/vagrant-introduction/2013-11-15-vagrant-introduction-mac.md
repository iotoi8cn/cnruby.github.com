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
    wget http://download.virtualbox.org/virtualbox/4.1.18/VirtualBox-4.1.18-78361-OSX.dmg
    open VirtualBox-4.1.18-78361-OSX.dmg
    open /Volumes/VirtualBox/VirtualBox.mpkg

    ** 启动虚拟机VirtualBox
    open /Applications/VirtualBox.app

### 第二步：在MacOSX上安装虚拟机Vagrantup

## Next Steps

Please take a look at [{{ site.categories.api.first.title }}]({{ BASE_PATH }}{{ site.categories.api.first.url }})
or jump right into [Usage]({{ BASE_PATH }}{{ site.categories.usage.first.url }}) if you'd like.