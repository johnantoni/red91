---
layout: post
title: Ubuntu Ibex 8.10 Beta
category: linux
---

<a href="http://www.flickr.com/photos/indieflickr/2933235767/" title="Ubuntu Ibex 8.10 by John Griffiths, on Flickr"><img src="//farm4.static.flickr.com/3154/2933235767_894964412e.jpg" width="500" height="313" alt="Ubuntu Ibex 8.10" /></a>

Last night I upgraded my laptop's o/s to the new Ibex 8.10 release, not yet official still in beta but so far very stable.

This can be done via,

    sudo update-manager -d

...then choosing the new distribution 8.10 from the top of the update manager dialog, you'll need about 1 hour for it to download & install.  Be around for some of the dialogs; one of which will ask you if you want to merge or replace your network script (i clicked merge) after which you should be ok.

It comes with a lot of new updates and a major interface overhaul.

There's now a fallback linux kernel if the main one should fail (like ArchLinux), more windows-like logout panel, better hibernation and a new theme called NewHuman (see screenshot above).

Along with this there's available from the repository,

* VLC 0.94 (with a more graphical control panel)
* GIMP 2.6 (much more professional)
* Gnome 2.24 (with tabbed browsing)
* GEdit 2.24

...and a ton of other newer packages, **Mercurial** is also updated along with the Kernel so any new hardware should be properly recognised.

After the install I had to reboot obviously, on rebooting my wifi no longer worked, so after another reboot that came back.  Did an **update & upgrade** for any newer packages and so far other than the battery indicator applet crashing a couple of times nothing majorly serious.

Eclipse is still at 3.2 in the repository, along with NetBeans at 6.1 so that's a little bit of a bummer.  However NetBeans does come with an easier installer so just grab the latest nightly build for that, Eclipse Ganymede and 3.2 are proving a little flakey at the moment.

Interface-wise it is a heck of a lot better than the previous release and although unofficially available I would recommend grabbing a copy, definitely worth the effort.

##### Update

Just done an update,

* In the repositories is **Flash Player 10**.  
* On bootup instead of saying 'kernel alive.. etc..', they've replaced it with 'Starting up...'; nice.
* The Installer is now graphical with a very osx partition manager and new logout screens and graphics.  
* On that end when you login the screen doesn't go blank then show the desktop but stay Ubuntu Brown then show the desktop.  
* Stick a dvd in first-time and like Windows it'll ask you what you want to open it with, vlc, totem, etc.
* Plus you've got some nice new default wallpapers available.

Did have a problem with the **NewHuman** theme, after doing a safe-upgrade I lost the theme, although I did find a replacement;

* [Dust](https://wiki.ubuntu.com/Artwork/Incoming/DustTheme?action=show&redirect=Artwork%2FIncoming%2FIntrepid%2FDustTheme) Theme

![Dust](https://wiki.ubuntu.com/Artwork/Incoming/DustTheme?action=AttachFile&do=get&target=dust-OOoWrite.png)

..you need to download the **Murrine** debian package for the distro you're using, install it, then download + install the Dust Theme.

Other than that this release is shaping up pretty nicely!

##### OpenOffice 3

Found this good guide to replacing OpenOffice 2.4.1 with the latest 3.0 release, pretty simple.

* [OpenOffice 3 Guide](http://news.softpedia.com/news/How-To-Install-OpenOffice-org-3-0-in-Ubuntu-8-10-96449.shtml)

Basically add this to your repository then update and upgrade & you should have the new build.

    deb http://ppa.launchpad.net/openoffice-pkgs/ubuntu intrepid main

##### Firefox 3.1 alpha

Add this to your repository to grab Firefox 3.1

    deb http://ppa.launchpad.net/fta/ubuntu intrepid main
