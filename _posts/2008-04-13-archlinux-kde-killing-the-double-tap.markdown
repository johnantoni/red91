---
layout: post
title: ArchLinux KDE killing the double-tap
category: linux
---

With ArchLinux, the one thing they don't tell you until you install it is that you have to build the graphical GUI yourself.  Honestly sometimes it's like a rite of passage solving all the problems you encounter along the way, good but hard work.

Anyway, I've thankfully managed to solve the one thing that's been driving me spare over the past week, that being the laptop's touchpad hyperactively tapping and opening apps when I don't want them to.

Once you've got KDE installed as your desktop GUI you may run into this problem, here's a copy of the most important sections of my **xorg.conf** file to solve the issue.

    nano /etc/X11/xorg.conf

Here's the head section where you define your devices...

    Section "ServerLayout"
    	Identifier     "X.org Configured"
    	Screen      0  "Screen0" 0 0
    	InputDevice    "Mouse0" "CorePointer"
    	InputDevice    "Keyboard0" "CoreKeyboard"
    	InputDevice    "Touchpad"  "SendCoreEvents"
    EndSection

After which down the line you define your touchpad configuration...

    Section "InputDevice"
        Identifier  "Touchpad"
    	Driver  "synaptics"
    	Option  "Device"   "/dev/input/mouse0"
    	Option  "Protocol"   "auto-dev"
    	Option  "LeftEdge"   "130"
    	Option  "RightEdge"   "840"
    	Option  "TopEdge"   "130"
    	Option  "BottomEdge"   "640"
    	Option  "FingerLow"   "7"
    	Option  "FingerHigh"   "8"
    	#Option  "MaxTapTime"   "180"
    	#Option  "MaxTapMove"   "110"
    	#Option  "EmulateMidButtonTime"   "75"
        Option  "TapButton0" "0"
        Option  "TapButton1" "0"
        Option  "TapButton2" "0"
    	#Option  "VertScrollDelta"   "20"
    	#Option  "HorizScrollDelta"   "20"
    	Option  "VertScrollDelta"   "0"
    	Option  "HorizScrollDelta"   "0"
    	Option  "MinSpeed"   "0.25"
    	Option  "MaxSpeed"   "0.50"
    	Option  "AccelFactor"   "0.010"
    	Option  "EdgeMotionMinSpeed"   "200"
    	Option  "EdgeMotionMaxSpeed"   "200"
    	Option  "UpDownScrolling"   "1"
    	Option  "CircularScrolling"   "1"
    	Option  "CircScrollDelta"   "0.1"
    	Option  "CircScrollTrigger"   "2"
    	Option  "SHMConfig"   "on"
    	Option  "Emulate3Buttons"   "on"
    EndSection

NOTE: The most important sections really are...

        Option  "TapButton0" "0"
        Option  "TapButton1" "0"
        Option  "TapButton2" "0"
      	Option  "VertScrollDelta"   "0"
      	Option  "HorizScrollDelta"   "0"

Once edited, save and reboot your X11 terminal by pressing **CTRL+ALT+BACKSPACE** and the tapping should be gone.

Worked for me but eventually needed a full reboot to really take effect, finally I can get to and build this baby.

NOTE: Also check your KDE Control Center / Peripherals / Mouse -> set to double-click for opening apps.

At the moment I'm trying to get XEN to bootup, once I figure that out I'll post it here; plus a more in-depth info on how the server project went.

Chat later,
