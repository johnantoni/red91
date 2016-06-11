---
layout: post
title: Getting Mercurial to Ignore Stuff
category: sourcecontrol
---

![Mercurial](http://selenic.com/hg-logo/logo-droplets-200.png)

Simple to do, first make your **.hgignore** file:

    gedit .hgignore

Add to this some basic syntax

    syntax: glob
    *.sql
    *.gz
    .DS_Store
    public/cache/*

(basically here you're telling mercurial what file extensions and directories to ignore in your app's root directory)

Save & close the file (nano: CTRL+Y, VI:esc then ':wq' + enter), now when you do **hg add .** and **hg commit** it'll skip these files & directories and keep your repository clean storing only the things you need to worry about; the code.

* [Mercurial Daily Use](http://hgbook.red-bean.com/hgbookch5.html)
