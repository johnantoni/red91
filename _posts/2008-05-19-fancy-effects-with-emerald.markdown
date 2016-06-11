---
layout: post
title: Fancy Effects with Emerald
category: linux
---

After the kr0w commented on my Ubuntu install post about the Emerald Theme Manager I had to try it out myself.

#### Installing

To get emerald and it's dependencies do,

    sudo aptitude install emerald

#### Enabling

Emerald isn't enabled by default in Hardy, but you can enable it in the command line to try it out,

    emerald --replace &

To keep it, edit the compiz-decorator file,

    sudo nano /usr/bin/compiz-decorator

Look for the line...
 
    USE_EMERALD="no"

Change this to **yes**, save and next time you boot you'll be using the Emerald Theme Engine.

#### Keep losing top of windows?

After install Emerald and playing around with it I noticed I kept losing the top bar to my windows and corners, making things pretty unusable.

Found out I needed the Xgl Server which was missing in my build, you can check if this is the problem by,

    compiz --replace

This runs checks to see whats available and the health of your compiz setup, mine told me I was missing Xgl.

Which was rectified by,

    sudo aptitude install xserver-xgl

And a reboot, after which things started to work right.

#### Restarting X Server

If things start to break up you can restart the X windowing system with CTRL-ALT-BACKSPACE.

#### Avant Window Manager

You can also get the Leopard-like dashboard by installing the AWN,

    sudo aptitude install avant-window-navigator

This'll really make people green with envy, however after installing that my double-tap issue came back with the touchpad, but that was quickly rectified by editing my **xorg.conf** file,

    sudo gedit /etc/X11/xorg.conf

And adding,

    Option          "MaxTapTime"            "0"

Under the options for the Synaptics Touchpad, after a reboot I was back up and running,
