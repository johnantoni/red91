---
layout: post
title: Tuning Windows Vista
category: windows
---

Well at my new job and have to say I'm lovin it, can't believe how lucky I was to land this position; team excellent, so proud!

However my new machine's running Vista so it's a little awkward getting .NET development kicking on it smoothly from XP.  So here's some pointers to get fellow ASP.NET developers up & running...

### Setting up IIS 

IIS comes with Vista Business edition, but to enable it, do...

* Goto **Control Panel** then **Programs & Features**
* Click **Turn Windows Features on or off**
* Wait...
* Tick **Internet Information Services**
* Click **OK**... done.

### Startup Items

To change what programs are launched at startup, do...

* Click the **Start** button on the Vista Taskbar
* In the **Start Search** box type **System Configuration**
* Vista should do live search and have the **System Configuration** program at the top of the list
* Click it.

Once it has opened up, click the **Startup** tab to configure what things run on machine start-up.

#### Things you don't need 

* **Windows Defender** that can be replaced by a lower memory-footprint app called [**Spybot Search & Destroy**](http://www.safer-networking.org/).  So untick that to stop it hogging resources and install S&D (note: when installing S&D make sure you say yes about installing it's resident checkers, good tools).

* **MsnMsgr** (aka. msn messenger) you can also untick, if you don't ever use it, [Skype](http://www.skype.com/intl/en-gb/) is so much better.

* **AcroTray** (adobe acrobat distiller helper), untick if you hardly ever use it.

* **Office Startup Helper** (not sure about the name of this one but know ms office comes with one), not needed if you hardly ever use office in your day-to-day life.

### Disabling UAE

Although dangerous as it allows the usual user to run **As Adminstrator** (a thing which all this security was introduced to prevent as running as admin was allowed in xp, etc, and incurred user's installing bogus viral programs), you can disable it.

To disable this, if you really really want to,

* Click the Vista **Start** button
* Type **Local Security Policy** in the Search box and click when the app appears
* When asked to allow it to open, say yes
* Select **Security Settings** \ **Local Policy** \ **Security Options**
* Scroll down the list until you get to the ones called **User Account Control**

From here you can set the kind of behaviour Vista will perform based on certain user actions (e.g. install software, browse network, etc.)

* [More Info...](http://blogs.msdn.com/tims/archive/2006/09/20/763275.aspx)
