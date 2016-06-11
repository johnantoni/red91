---
layout: post
title: Bazaar - Python-based VCS
category: sourcecontrol
---

![Toronto Zoo](http://farm3.static.flickr.com/2262/1502536787_4c898e3c47.jpg)

Bazaar is a Python-based distributed versioning system, really simple lightweight and works under and with pretty much anything.

More [here](http://bazaar-vcs.org/) but to get it installed on your mac with macports just run...

    sudo port selfupdate
    sudo port install bzr

After it's installed and activated tell it who you are so it knows where all these changes are coming from in the future.

    bzr whoami "John Doe <john.doe@gmail.com>"

You can check that's worked via

    bzr whoami

Which should output who you told it you were,

##### Putting things under Bazaar

Next up it's real simple to start getting things stored under Bazaar, if you've used things like Mercurial or GIT then this should be a walk in the park,

First off navigate to the project you want to put under it then **init** a new Bazaar repository.

    bzr init

Next up add all the files you want into the repos via,

    bzr add .

...this'll add everything in the current directory you're in into the repository

Next up commit your files,

    bzr commit -m 'initial code'

Should go smoothly listing all that you've done and give you a revision number (in this case 1).

You can then check the log for what's occured via,

    bzr log

Which will show you the history, timestamps, user names & emails and messages posted so you can quickly see how things are evolving; and being Python it's pretty fast.

More [here](http://doc.bazaar-vcs.org/latest/en/mini-tutorial/index.html)

Like most others, your repository is kept under a hidden system directory **.bzr**, find it easily with,

    ls -a

However unlike others it doesn't mind what you put in it and will pack them tightly so it doesn't consume too much space, plus you can use it against any storage medium, current version at time of writing 1.1
