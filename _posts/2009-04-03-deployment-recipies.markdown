---
layout: post
title: Deployment Recipes + GIT on Accelerators + more
category: ruby
---

#### Deployment Recipes

on **Joyent**

* [for a joyent shared accelerator with svn](http://codesnippets.joyent.com/posts/show/1874)
* [for a joyent shared accelerator with git](http://codesnippets.joyent.com/posts/show/1876)

Really like this one,

* [deploying a sinatra app with capistrano](http://pemberthy.blogspot.com/2009/02/deploying-sinatra-applications-with.html)

This is a little useful too if your messing with Joyent Shared Accelerators,

* [Git on Accelerators](http://wiki.joyent.com/accelerators:kb:git)
* [Git on Shared Accelerators](http://wiki.joyent.com/shared:kb:git?s[]=git)

Glad to see [**deprec**](http://deprec.failmode.com/) is still alive & well, was a major help in building slices, playing with the new release on a vm now,

    sudo gem install deprec

...and

* [Tasty Capistrano Recipes](http://seancribbs.com/tasty-recipes-for-capistrano)
* [Softies on Rails - capistrano, git and thin](http://www.softiesonrails.com/2008/6/5/the-absolute-moron-s-guide-to-capistrano-git-and-thin-edition)
* [GitCasts](http://gitcasts.com/)

#### How-To ?

so in a nutshell

##### on your server

    ssh joe@mygithub.com

Then create somewhere to host all your git repositories,

    mkdir git && cd git

And create your remote repository directory and bare git setup

    mkdir awesomeapp.git && cd awesomeapp.git
    git --bare init
    chmod -x ~/git/*/hooks/*

The last line is really important, without it you'll get these kind of errors when pushing an update from the client to the server.

    hooks/update: syntax error at line 40: `allowunannotated=$' unexpected
    error: hooks/update exited with error code 2
    error: hook declined to update refs/heads/master

##### on your client

Now on your client, create you git repository, add & commit it.

    cd awesomeapp
    
    git init
    git add .
    git commit -m 'init'

Now create the link to your remote repository,

    git remote add origin ssh://joe@mygithub.com/users/home/joe/git/awesomeapp.git

And push your update

    git push origin master

...now a word from our sponsor

<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/I-7f7vVCqvI&hl=en&fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="//www.youtube.com/v/I-7f7vVCqvI&hl=en&fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>
