---
layout: post
category : raspberrypi
tagline: "Supporting tagline"
tags : [intro, beginner, raspberrypi, tutorial]
---
{% include JB/setup %}

### 改变Raspberry Pi电脑名称

    # 在RaspberryPi上执行下面命令，
    # 把raspberrypi修改为自己希望的电脑名称gbooks：
    sudo vim /etc/hostname
    sudo vim /etc/hosts
    sudo reboot

![Raspberry Pi电脑世界：改变Raspberry Pi电脑名称](https://lh6.googleusercontent.com/-WsOeVCi2p4o/UoqBcL1jWPI/AAAAAAAAF30/eJ-RJHaFBHE/w697-h500-no/2013-11-18-2159.png)

![Raspberry Pi电脑世界：改变Raspberry Pi电脑名称](https://lh5.googleusercontent.com/-hjXeH-zVedk/UoqBcG4ijwI/AAAAAAAAF34/5lub4uNBqIU/w655-h416-no/2013-11-18-2202.png)

### 参考资料
![change-the-hostname-of-your-raspberry-pi](http://www.developpeers.com/blogs/change-the-hostname-of-your-raspberry-pi)

## Next Steps

Please take a look at [{{ site.categories.api.first.title }}]({{ BASE_PATH }}{{ site.categories.api.first.url }})
or jump right into [Usage]({{ BASE_PATH }}{{ site.categories.usage.first.url }}) if you'd like.