---
layout: post
title: Comparing Directories for Missing Files
category: linux
---

Ok, while putting the new release of RED91.COM onto my new box I suddenly noticed my broadband transmission stunted, making me worry if all my files had been uploaded to the new SVN repositorty; quite scary.

So to check this I pulled off a copy of everything in my new SVN source from what's in my old server.

Thankfully Linux comes with a very helpful file comparison tool called DIFF which allows you to check for any missing files in one directory and another.

Now realising there'd be a lot of fluff .SVN directories I shouldn't compare I altered the parameters to exclude these.

Here's what I used... 

    diff -r -q --exclude=.svn newsite oldsite

* -r ...search recursively
* -q ...report only files that differ, not sizes
* --exclude ...exclude certain directories and files

Worked like a charm, nothing missed! 
