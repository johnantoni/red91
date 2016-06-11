---
layout: post
title: Enabling the Vista Administrator
category: windows
---

With Windows Vista you will automatically have the main user (you) and a disabled Administrator account, which is part-used for you to install software, etc. when you're logged in.

But how do you enable this Administrator account so you can really take control of Vista and make it do what you want it to do, no questions asked, here's how...

* Open the Start Menu
* Type **cmd** to find the Command Prompt, then right-click and **Run As Administrator**

Now type...

    Net user administrator mypassword
    Net user administrator /active:yes

(change **mypassword** for anything you want)

Now log-out and switch over to the Administrator account using the password you picked.
