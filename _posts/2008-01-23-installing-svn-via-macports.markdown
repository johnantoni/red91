---
layout: post
title: Installing SVN via MacPorts
category: subversion
keywords: "macports, svn install, howto, svnx, gui client"
---

Following on from my previous article concerning using MacPorts to install system software easily on your Mac, in this article I'll guide you thru install Subversion and all it's dependencies under Apple's Leopard O/S.

### Install MacPorts

Goto [here](http://www.macports.org/install.php) and grab the latest MacPorts install image, it's got it's own installer so shouldn't be too much hassle to get going.  Just takes a while configuring during the process.

### Update MacPorts

Next with MacPorts installed update it's port list,

    sudo port -v selfupdate

Perfect that should update the stock 1.5 build to the latest 1.6 release.

#### SVN Dependencies

Now to installing Subversion's dependencies, without these Subversion will not build.  So in Terminal run...

    sudo port install sqlite3
    sudo port install apr-util
    sudo port install neon

Excellent, you should now be ready to install Subversion 1.4.6 from source via MacPorts

#### Finally Subversion

Just run...

    sudo port install subversion

Should install ok leaving you with the latest binary build of Subversion on your Apple machine.

#### What about a GUI ?

Ok, as most people don't really like using SVN from the command-line, you can download a mac gui interface to it at...

* [SvnX for OSX](http://www.lachoseinteractive.net/en/community/subversion/svnx/features/)

More MacPorts are available at...

* [MacPorts Project](http://www.macports.org/index.php)

#### Handy Tip

Before I go you can find out the location of a piece of software via the 'which' command.

    which svn

Should return the path where it's installed.
