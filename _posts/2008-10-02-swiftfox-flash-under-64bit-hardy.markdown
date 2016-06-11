---
layout: post
title: Swiftfox and Flash (under 64bit Hardy)
category: browser
---

Swiftfox is like Firefox, but hellishly optimized for your Linux build, you can get it from...

* Go [here](http://getswiftfox.com/installer.htm)
* Then download the installer right for your build (if 64-bit, download **Athlon 64**)

Once downloaded, navigate to the download in Terminal and do,

    sudo sh install-swiftfox.sh

##### Flash

Now to get Flash running first check the ~/.mozilla/plugins directory exists on your machine, if not create it...

    mkdir ~/.mozilla/plugins

Adobe only provide it as a 32-bit library but with the necessary dependency you can support it so run...

    sudo aptitude install nspluginwrapper

Once you've got that you should be capable of handling the 32-bit Flash player,

...grab Flash from [here](http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash)

Download the **.tar.gz** version, extract it to your desktop, then move the **libflashplayer.so** into the **~/.mozilla/plugins** directory,

    sudo mv ~/Desktop/install_flash_player_9_linux/libflashplayer.so  ~/.mozilla/plugins

And finally restart Swiftfox, navigate to a flash video [here](http://www.red91.com/2008/10/02/i-know-who-id-vote-for-) and enjoy faster browsing with Swiftfox + Flash!
