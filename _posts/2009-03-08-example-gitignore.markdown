---
layout: post
title: .gitignore
---

First get **git**

    sudo aptitude install git-core

Then create your **.gitignore** file to exclude certain files from being versioned.

    nano .gitignore

Add what specifics you want to exclude

    log/*.log
    log*.gz
    tmp/**/*
    .DS_Store
    doc/api
    doc/app
    Thumbs.db
    db/development.sqlite3
    db/production.sqlite3
    public/cache/*
    public/photo/*
    index/production/*

The last two are for my html cache directories and sphinx indexing files.

and globally ignore them

    git config --global core.excludesfile ~/.gitignore 

More here,

* [Elijah Miller](http://jqr.github.com/2009/02/03/global-git-ignore.html)
* and [Toolman Tim](http://toolmantim.com/articles/setting_up_a_new_rails_app_with_git)
