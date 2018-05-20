------------------------------------------------------------------------

layout: post\
title: Linux VI Editor Intro\
category: linux\
----

The following is a short guide on using the Linux VI editor (aka VIM)
and a few helpful Linux console commands you may need...

#### VI Editor

this is an inline text editor which is used within your terminal window
to create & edit text files on your system, usually used remotely to
setup servers it's not that hard to get a handle round,

**vi filename.txt**\
p. ...this will open the VI editor and create a textfile called
filename.txt. VI will initally open in INSERT mode so you can just start
by adding text to your file like any other editor.

...to switch to COMMAND mode, hit the <strong>ESC</strong> key, the
status-bar on the bottom will change to reflect this, now to quit and
save your file type <strong>:wq</strong> and hit enter.

...to switch to INSERT mode, press <strong>shift + i</strong>

...if you don't want to save the file & just quit, type
<strong>:q!</strong> and hit enter.

The VIM editor is a really powerful tool and I'd recommend you to read
this <a href="http://www-acs.ucsd.edu/info/vi_tutorial.php">guide</a> to
get you up to speed if you want to do more advanced things, but this
should be good enough to get you going.

#### Linux Commands

In the terminal window, you can do the following to access & navigate
your Linux system:

CD ..\
p. ...this moves you down one directory from where you are

CD mydir\
p. ...moves you to the mydir directory

MKDIR foo\
p. ...creates the directory foo

RM -fr foo\
p. ...deletes the directory foo and any other files & directories within
it

MV \[from\] \[to\]\
p. ...moves a file or directory from one location to another

PASSWD\
p. ...change current password

Enjoy, will update later,

John.
