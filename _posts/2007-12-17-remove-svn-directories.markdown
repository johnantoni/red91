---
layout: post
title: Remove SVN directories
category: subversion
---

Quick little command, run this inside a directory to remove any .svn directories within it recursively.

    find . -name .svn -print0 | xargs -0 rm -rf

Thanks goes to [Sitening](http://sitening.com/blog/2007/04/03/os-x-finder-plugin-to-remove-svn-directories/)
