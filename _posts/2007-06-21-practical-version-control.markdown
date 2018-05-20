------------------------------------------------------------------------

layout: post\
title: Practical Version Control\
category: subversion\
----

Hiya, here's a quick little guide to show you how to put all your work
under version control, backup the repository to a remote data store (in
this case Strongspace), checkout a working copy and then commit any
changes you make back to your repository (and then back to your remote
data store).

Let's begin,

<strong>svnadmin create ./svn\_notes</strong>\
p. ...creates a subversion repository called svn\_notes, and the
directory svn\_notes within your current location

<strong>svn import -m "initial" ./notes
file:///users/joe/svn\_notes</strong>\
p. ...imports all files & directories recursively from the notes
directory and adds them into your svn\_notes repository and adds the
message 'inital' to the repository log

<strong>scp -r ./svn\_notes
joe\@joe.strongspace.com:/home/joe/svn\_notes</strong>\
p. ...transmits the contents of the svn\_notes repository to your
strongspace remote store inside the svn\_notes directory (create this
directory first on your strongspace store), replace 'joe' with your
username; it will prompt you for your password, but only once.

now go into your notes directory and delete it's contents, you'll
replace it with a checked-out working copy version, that you'll check
back into your repository every time you make a significant change.

<strong>svn co file:///users/joe/svn\_notes ./notes</strong>\
p. ...checks out a working copy of the contents of the svn\_notes
directory into the notes directory\
p. ...co = check out

<strong>svn commit -m "beta release" ./notes</strong>\
p. ...commits changes in the notes directory back into it's relevant
repository

...afterwards, just run this to re-upload repository changes back into
your strongspace store <strong>scp -r ./svn\_notes
joe\@joe.strongspace.com:/home/joe/svn\_notes</strong>

You can alter the above line to point to a domain account, rather than
strongspace, just change the joe.strongspace.com to your domain address
and the :/home.... to where you want.

Also remember that when you create new files or directories they won't
automatically be put under version control with your current working
copy, to do this run...

<strong>svn add \[dir\]</strong>\
p. ...to add a directory (or file) into the repository the next time you
run 'svn commit'.

All the best, drop me a line if you run in to trouble,
