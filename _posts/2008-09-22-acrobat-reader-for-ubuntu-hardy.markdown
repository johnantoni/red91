---
layout: post
title: Acrobat Reader for Ubuntu Hardy
category: linux
---

After reading [this](http://ubuntu-tutorials.com/2008/06/23/install-adobe-acrobat-reader-812-on-ubuntu-804/) article, it's pretty easy to install Adobe's PDF reader on Ubuntu Hardy 8.04

    sudo wget http://www.medibuntu.org/sources.list.d/hardy.list -O /etc/apt/sources.list.d/medibuntu.list

    sudo apt-get update && sudo apt-get install medibuntu-keyring && sudo apt-get update

This will add the **medibuntu** repository & and it's keyring to your system.

Now run,

    sudo apt-get install acroread

After the 75mb download you'll now have Acrobat Reader 8.12 installed on your linux machine.

Accessible in => Applications / Office / Adobe Reader 8

##### Adding Acrobat as the Default for PDF's

Now to make Acrobat Reader the default for PDF files, find one on your machine.  

* Right-click **Properties**
* Click the **Open-With** tab
* Click **Add**
* Scroll Down the list of applications to see if Acrobat Reader is available, if not,
* Click **Use a Custom Command**
* And type in **acroread**
* Click **Add**

Close that dialog, now every time you double-click on a PDF it'll open in Adobe's PDF reader and not the standard one.

Good stuff, 
