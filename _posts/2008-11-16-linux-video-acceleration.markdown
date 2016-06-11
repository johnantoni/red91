---
layout: post
title: Linux Video Acceleration
category: linux
---

![Vegas](http://farm4.static.flickr.com/3196/2683997616_cf5fb76f26.jpg)

Looks a non-starter but trying to find a way to enable video acceleration in Ubuntu.

You can list the hardware you've got from the prompt via:

    lspci -v | less

From that I know my chipset's an Intel GMA 965, Intel one's are better supported so might be possible....

Doing this tells me I have direct writing 3d support enabled,

    glxinfo |grep direct

Fusion-Icon may help,

    sudo aptitude install fusion-icon

Allows you to switch between different window decorators (compiz & metacity), plus change some of compiz's options.

### Sorted

Found a way to improve it, in **terminal** type

    gstreamer-properties

Hit enter, this'll popup a dialog to alter the audio and video properties of your linux distro.  

From here click the **video** tab and change **default** to **X Windows System (No Xv)**, hit **test** to be sure, should improve the video.

You can also manage and test your webcam from here ;-)
