---
layout: post
title: no such file to load sqlite3/database
category: database
keywords: "no such file to load, ruby gems, problem, chmod"
---

had a similar problem to [these guys](http://www.icoretech.org/2008/07/06/no-such-file-to-load-sqlite3-database)

fixed with...

    cd /usr/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.2.2
    sudo find . -perm 0662 -exec chmod 664 {} \;
