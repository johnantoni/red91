---
layout: post
title: Installing MySQL on Vista
category: database
keywords: "mysql install, windows vista, howto, application failed, resource hacker, edit resources, guide"
---

Easy it aint, kept getting this...

**The application has failed to start because its side-by-side configuration is incorrect. Please see the application event log for more detail.**

But here's how to fix it,

#### Get MySQL

First download MySQL

* [MySQL Download](http://dev.mysql.com/downloads/)

#### Install MySQL

Now unzip the executable and install it, when it's finished and asking you if you want to run the configuration tool, don't; we'll deal with this in a minute.

#### Install Resource Hacker

Now to fix the MySQL Instance Configuration Tool, so it will install the MySQL service in Vista, download Resource Hacker...

* [Resource Hacker](http://www.angusj.com/resourcehacker/)

Unzip it and open it's folder, then Right-Click on ResourceHacker and **Run as Administrator**.

#### Edit Resources

Now using Resource Hacker open the file...

* C:\Program Files\MySQL\MySQL Server 5.0\bin\MySQLInstanceConfig.exe

Navigate to 24 / 1 / 1033 and look at the config on the left.  On line 6 you should see **asAdministrator**, change this to **requireAdministrator** then click **Compile Script**; then finally Save the file.

#### Run MySQL Instance Config

Finally run the MySQL Instance Configuration tool from within...

* C:\Program Files\MySQL\MySQL Server 5.0\bin\MySQLInstanceConfig.exe

This should now be able to create the system service and finally give you MySQL running on Windows Vista.
