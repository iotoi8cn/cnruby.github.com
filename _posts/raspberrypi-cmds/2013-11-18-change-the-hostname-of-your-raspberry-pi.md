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

![Raspberry Pi电脑世界：改变Raspberry Pi电脑名称](https://lh6.googleusercontent.com/-zGOtZf_OD0k/UoqNwYiPCDI/AAAAAAAAF90/oiURt3rQGEs/w506-h363/2013-11-18-2159.png)

![Raspberry Pi电脑世界：改变Raspberry Pi电脑名称](https://lh5.googleusercontent.com/-pnL5M4Qp94s/UoqNpAmV_PI/AAAAAAAAF9c/AMyEptWCJvU/w506-h321/2013-11-18-2202.png)

### 参考资料
![change-the-hostname-of-your-raspberry-pi](http://www.developpeers.com/blogs/change-the-hostname-of-your-raspberry-pi)

## Next Steps

Please take a look at [{{ site.categories.api.first.title }}]({{ BASE_PATH }}{{ site.categories.api.first.url }})
or jump right into [Usage]({{ BASE_PATH }}{{ site.categories.usage.first.url }}) if you'd like.