---
layout: post
title: Open Terminal Quicker and Improve VLC
category: linux
---

##### Open Terminal via Keyboard Shortcuts

Open **System / Preferences / Keyboard Shortcuts**

Now find the one called **Run a Terminal**

Click on the column opposite saying **disabled** and hit **CTRL+ALT+T**, then close the dialog

Now everytime you hit CTRL+ALT+T a terminal window will open.

##### Improve VLC + Keyboard Shortcuts

    CTRL+CURSOR-UP  => increase volume
    CTRL+CURSOR-DOWN  => decrease volume
    SPACEBAR  => pause movie

Also don't install the XINE packages, GStreamer is much faster for video playback

    sudo apt-get remove xine
    sudo apt-get autoremove

Also if you've got a slow video card, try changing the de-interlacing mode in VLC to **discard** via **VLC / Video / Deinterlace / Discard**.

If that doesn't work, try changing your Appearance settings to **Normal** via **System / Preferences / Appearance**, then **Visual Effects** and select **Normal**.  It's a good balance and you'll still get the cube desktop.

...also found [this](http://ubuntuguide.org/wiki/Ubuntu:Hardy#Fix_for_Video_Playback_Problem_in_Compiz-Fusion) which suggests using the **blend** deinterlacing mode to improve DVD playback,

    gedit ~/.local/share/applications/vlc-dvd.desktop

Scroll down and find the line reading...

    Exec=vlc %U

Replace that with...

    Exec=vlc --vout-filter deinterlace --deinterlace-mode blend --volume 512 %f
