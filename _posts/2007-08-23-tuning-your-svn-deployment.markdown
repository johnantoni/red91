---
layout: post
title: Tuning your SVN Deployment
category: subversion
---

One of the problems you may run into with a project that has been deployed with SVN is choosing what it should ignore so that the production app does not fall over itself.

E.g.
accidentally putting log files under version control and then deploying them to the server knowing your box will alter these over time.

So how can you get around this, pretty simple really; but first off try the following commands...

#### Reverting a Directory

    svn revert log/*

This basically tells svn to revert everything in the log directory to it's previous state.

#### Ignoring .log files

    svn propset svn:ignore ".log" log

This tells svn to ignore any .log files within the log directory, so the log files generated on your production box aren't the ones from your laptop.

#### Ignoring mongrel .pid's 

    svn propset svn:ignore ".pid" pid

This like the command above will ignore the .pid files generated on your laptop, not taking these to your production box.

#### Ignoring the contents of a Directory

To go one step more, how about when you want the entire contents of a directory ignored from SVN.  So say the photos generated on your production box don't get overwritten from your development laptop.

    svn propset svn:ignore '*' photo 

Enjoy,
