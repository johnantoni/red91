---
layout: post
title: Installing Sphinx
category: ruby
---

On Ubuntu Intrepid, this will get you Sphinx for rapid super-fast full-text searching.

    sudo apt-get install libmysqlclient15-dev
    wget http://www.sphinxsearch.com/downloads/sphinx-0.9.8.1.tar.gz
    tar -xzvf sphinx*.gz
    cd sphinx*
    ./configure
    sudo make
    sudo make install

    sudo gem install ultrasphinx

Tested and works ok

More [here](http://www.sphinxsearch.com/)

##### Note about Ubuntu Installs

Had a bit of a problem with installing this on Ubuntu, RAKE just couldn't find the **inspector** and **searchd** binaries.

Found a way to fix this by configuring it like....

    ./configure --prefix=/usr/local/sphinx

Then doing the usual **make** and **make install**, but creating a symlink afterwards with

    ln -s /usr/bin /usr/local/sphinx/bin

And then added a path to my **.bashrc** file, probably overkill after the first bit but got it working.

    nano ~/.bashrc

Then adding...

    PATH="$PATH:/usr/local/bin"
    PATH="$PATH:/usr/local/sphinx/bin"

##### Missing Programs?

Note, if you're logged in as a normal user some system commands like **smartctl** will return **command not found** even though you know you installed them.

Just use **sudo** at the start and they should be found and run.

