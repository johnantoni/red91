---
layout: post
title: Better Installs with Aptitude
category: linux
---

As you'll gather by now in Linux (Ubuntu) you usually install new software on your box with:

    sudo apt-get install postfix

Even though this is ok, with the latest release of Ubuntu (Gutsy 7.10) comes a better installer called **Aptitude** (thanks to the Debian / Linux guys).

Aptitude in essence does the same that **apt-get** does, however it does extra background checks to make sure your keeping your system clean and that you can properly remove packages if need be.

Hence given the choice, try to use **aptitude** in place of **apt-get** where you can; you won't regret it.

    sudo aptitude install postfix

* [Aptitude vs Apt-Get  Comparision](http://www.psychocats.net/ubuntu/aptitude)
 
