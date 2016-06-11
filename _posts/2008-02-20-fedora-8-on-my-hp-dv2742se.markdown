---
layout: post
title: Fedora 8 on my HP dv2742se
category: linux
---

![Fedora](http://farm3.static.flickr.com/2064/2281315001_3f81ed2853.jpg)

My excellent fiancee came back from her dad's bowling trip with a nice new Intel Core 2 Duo laptop for little ole' me, ain't she great.

Anyway I decided to put two fingers to Vista, install Fedora 8 and see how things went.  Well I can tell you, things are pretty damn good.

Here's how,

#### Install Fedora

First download your 64-bit image from the fedora site at...

* [Fedora](http://fedoraproject.org/)

Click [get fedora] and select the 64-bit build because the new Intel core 2 duo chip is a 64-bit chip (the previous 'core duo' chip wasn't).

Burn the 4gb image to DVD and boot from it, install, check Office / Web / etc. so you get everything and give it 30 minutes to install and you to go thru the install process.

####  After Installing

First off you'll notice the touchpad is a bit over-reactive and the WIFI doesn't work, this we'll fix.

For this you'll need a network cable to hook up directly to your router, a standard CAT5 network cable will do, nothing too posh.

#### Getting Wifi and everything else

Once hooked up, boot up with the ROOT account so you've got admin rights OR boot in normally, open Terminal (Applications / System / Terminal) and type...

    sudo wget http://dnmouse.webs.com/scripts/dangermouse
    sh dangermouse

A dialog will popup, this is the best bit and will hopefully fix all your problems, choose...

* flash plugin
* dvd-playback
* madwifi
* webcam drivers
* java
* touchpad
* lightscribe

and any others you want and hit OK, after the lengthly install and a reboot you should have wifi working and drivers for your touchpad, webcam, java, etc.

For this I really have to thank DangerMouse and his work at [http://dnmouse.webs.com/](http://dnmouse.webs.com/), really well done!

#### Touchpad

Now lets fix that over-reactive touchpad, click System / Preferences / Hardware / Touchpad.  Select [Tapping] tab and untick tapping, bingo, that's done.

#### DVD Playback Slow

Uh-oh, you're video might be slow when playing DVD's (which the DangerMouse script just enabled!). Select System  / Desktop Effects, and disable Desktop Effects, ok it's not the best of fixes but should sort it out.

Otherwise try re-installing your ffmpeg drivers and other builds, in Terminal...

    sudo yum remove ffmpeg
    sudo yum install ffmpeg mjpegtools libquicktime

The others are just incase.

#### System Beep

Really easy to get rid of, System / Preferences / Hardware / Sound.  Select the [System Beep] tab and untick [Enable System Beep].

#### Rails ?

Real easy,

    sudo yum install ruby ruby-devel rubygem-rails rubygem-mongrel lighttpd lighttpd-fastcgi

Then,

    sudo gem update --system
    sudo gem install rails
    sudo gem install rake

#### Interrogate Hardware

To see what USB devices you have on your system...

    su root
    lsusb -v | less

Good for finding what model of webcam you've got.

#### Tweaks

You might agree, but I didn't much like the big lettering in the default view, so i changed the font size down to 8 (system / preferences / appearance / look & feel / fonts).

Knocking the font sizes down a bit made it look a bit more professional, along with inverting the colours to green-on-black is much easier on the eyes.

The default editor in Fedora 8 is gEdit (listed as Text Editor), in this it has many plugins to make your life eaiser (edit / preferences / plugins), with some tweaking you can quickly turn it from a basic tool to something very powerful.

#### Afterwards

Get yourself a coffee or cocoa, you now have a very fast, very powerful 64-bit O/S with firewall and wifi to keep you going for many years to come.

Enjoy, you're sitting on the future ;-)
