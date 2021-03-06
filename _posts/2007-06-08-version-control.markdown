------------------------------------------------------------------------

layout: post\
title: Beginning Version Control\
category: subversion\
----

<img class="alignright" src="//www.red91.com/assets/198613702_3c70d7fb8d_m.jpg" alt="subversion" />

<div class="img_author">
... photo by <a href="http://www.flickr.com/photos/jetienne/">jetienne
©</a>

</div>
Hi all, in today's article we're going to talk a little bit about
version control, what is it, why should I use it and some commands to
get you started.

#### Why?

First off let's talk about projects, now whenever a client comes up to
you with an app they'd like built (say a new clock widget) you probably
write some code, check if it works, show it to the client and then get
back and tweak it, again and again, maybe a couple of zip backups, a
copy & paste in there; who knows. Now what happens if say you write it,
compile it and it goes horribly wrong but you don't know why?, how could
you see what was going on in previous builds, or at the very least stop
having a mess of oddly-named backup zip files that you can never
remember what's in them.

This is where a Version Control system comes in handy, it allows you to
keep past & present copies of your work safe and available, and lets you
easily identify what changed with each new release. Also it offers you
the ability to collaborate work with your team, 'branch' off separate
builds for specific clients, create 'trunk' copies you can give to your
bleeding-edge developers.

It's more powerful that SourceSafe and in many ways more stable, you can
even use it to version control things other than code, maybe shopping
lists, your art project, a book your writing; practically anything your
working on that's important to you.

#### How it works

What Subversion SVN allows you to do is create a repository where you
can store archived versions of your work. Much like a filing system, you
can upload to it succeeding releases of your code-base for a specific
project (version 1.0, 1.1, etc...). The difference here is that it'll
record what was changed from one release to the next, allowing you to
quickly identify where things went wrong or how the project evolved from
the first build; giving you the power to rollback to any specific time
in the life of your app.

Once you create your repository, you then import your initial project
build into it; this is the base build (v1.0). The copy you have outside
the repository is now your 'working copy' and as time goes by you can
'check-in' your working copy to the repository to back it up (becomes
v1.1, etc...). Then next morning or when someone new joins your project,
they can 'check-out' the latest repository build so they're on the same
playing field as you. Checking-in will merge their changes to the latest
repository version creating a new build (v1.2 "john added gui", etc..),
etc. etc.

The difference here is that all your work is versioned and kept safe,
with a clear track of what went on, who did what, what was added, etc.
so you and your staff can be up to speed in no time whatever happens.
Keeping it on a remote server is even better since if anyone loses their
laptop it's no big deal they just run check-out and their back and
running.

#### Getting it

There are two major Version Control systems out right now, Subversion
SVN and CVS, but for here we'll be using Subversion; you can however
find more about CVS <a href="http://www.nongnu.org/cvs/">here</a>.

So first off you can download Subversion via the link, there's some
graphical gui's available too,
<a href="http://tortoisesvn.tigris.org/">TortoiseSVN</a> (windows) &
<a href="http://www.lachoseinteractive.net/en/community/subversion/svnx/features/">SvnX</a>
(mac).

Have a mosey on to the
<a href="http://subversion.tigris.org/">Subversion</a> website for a
more in-depth look at it's uses, also there's a really good book I
recommend called
'<a href="http://www.pragmaticprogrammer.com/starter_kit/vc/index.html">Pragmatic
Version Control</a>' available at Amazon.

Once you've got Subversion installed and had a little play with it,
here's some general commands you'll probably find useful...

#### Using it - Common Commands

<strong>mkdir svn-repos\
svnadmin create svn-repos</strong>\
p. (first we create a dir for our repository, next we initialise the
'svn-repos' repository in that directory)

<strong>svn import -m "initial import" .
file:///users/\[user\]/svn-repos/test/trunk</strong>\
p. (imports whatever is in the dir your in into the repository
initially. inside /\[project name\] /trunk \[build type\] )

note: <strong>-m </strong>\
(this means your going to add a message)

<strong>svn co file:///users/\[user\]/svn-repos/test/trunk
\[dir\]</strong>\
(check-out trunk build to 'dir' as your working copy)

<strong>svn commit -m "changes"</strong>\
p. (add files in current dir to repository, and add a message about this
release)

<strong>svn update \[dir\]/</strong>\
p. (updates working copy with latest in repository)

<strong>svn add \[file or dir\]</strong>\
p. (add file or directory to repository)

<strong>svn delete \[file or dir\]</strong>\
p. (remove file or directory from repository)

<strong>svn copy \[source\] \[dest\]</strong>\
p. (copy files from source to destination within the repository)

<strong>svn move \[source\] \[dest\]</strong>\
p. (moves files from source to destination within the repository)

#### Using it - Interogation Commands

<strong>svn ---version</strong>\
p. (gets subversion version number installed)

<strong>svn help</strong>\
p. (lists all commands available)

<strong>svn status \[file\]</strong>\
p. (check status of file, M = means your local working copy has been
modified and is not the same as what's in the repository)

<strong>svn diff -r19:21 \[file\]</strong>\
p. (shows difference between working copy and repository copy within the
range '-r' specified, in this case 19-21)

<strong>svn diff \[file\]</strong>\
p. (shows difference between working copy and repository copy, + = whats
added, - = whats removed)

<strong>svn diff -r \[file\]</strong>\
p. (shows differences since last change)

<strong>svn log \[file\]</strong>\
p. (show log of activity on repositories files / dirs)

<strong>svn info \[dir\]</strong>\
p. (shows info about where the current working copy came from, who
authored it, time, etc.)

#### Using it - Setting file properties

<strong>svn propset checked-by "john" \[file\]</strong>\
p. (set property with value 'john' to 'file')

<strong>svn propedit checked-by \[file\]</strong>\
p. (lets you edit the property of the 'file' via inline editor)

<strong>svn proplist \[file\]</strong>\
p. (list properties of 'file')

<strong>svn propget checked-by \[file\]</strong>\
p. (display specific property 'checked-by' for 'file')

<strong>svn propdel checked-by \[file\]</strong>\
p. (delete property from 'file')

#### Dealing with remote stores via SVN+SSH

Much like my
<a href="http://www.red91.com/2007/06/01/ssh-login/">previous</a>
article on remotely managing your server via SSH, first create a key
pair

<strong>ssh-keygen -t dsa</strong>

When prompted where to save them, it's probably best to leave them in
~/.ssh\ (as\ id\_dsa\ and\ id\_dsa.pub)\ unless\ you\ already\ have\ ssh\ keys\ there.\ You\ can\ use\ a\ null\ passphrase,\ but\ use\ of\ ssh-agent\ with\ a\ good\ password\ is\ recommended.\ Having\ generated\ your\ keys,\ upload~/.ssh/id\_dsa.pub
to your remote server and move it to \~/.ssh/authorized\_keys on the
remote. Your local copy of id\_dsa and id\_dsa.pub should remain
untouched.

If your local userid and your remote userid differ, you will need to
create a \~/.ssh/config file on your local system with the contents:

<strong>Host svn.\[remote domain\]\
User \[remote username\]\
RhostsRSAAuthentication yes</strong>

Once you have this setup, try to checkout your tree using:

<strong>svn co svn+ssh://\[remote domain\]/\[project\]/trunk/</strong>

Should work, just be careful when doing a commit as it'll be to your
remote (and possibly 'live' production server).

#### Downloads - Subversion Cheat Sheet

To help you learn faster click below to get the Subversion cheat sheet,
made possible by the nice people at
<a href="http://ariejan.net/svncheatsheet/">Ariejan.net</a>

<a href="http://www.red91.com/assets/svncheatsheet-1.0.1.pdf" class="pdf">Subversion
Cheat Sheet</a>

All the best,

John.
