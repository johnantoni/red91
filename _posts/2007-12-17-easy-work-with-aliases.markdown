---
layout: post
title: Easy Work with Aliases
category: linux
---

Nice little way to make operations easier for you.

In your **.bash_profile** file you can define command aliases to make light work of difficult tasks...

#### How ?

Start a Terminal session and open up your .bash_profile file with TextMate (or whatever text editor your want to use);

    mate .bash_profile

Now add this to your .bash_profile;

    alias jason='ssh root@mybox.com'

Now save & close that file, close Terminal and Open a new Terminal window.

#### And to Run it ?

Now everytime you run...

    jason

It'll open a remote session to your box, cool, eh?

You can also expand this to fire off RSYNC tasks, system upgrades, whatever you want.
