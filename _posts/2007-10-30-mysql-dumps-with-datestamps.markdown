---
layout: post
title: MySQL dumps with DateStamp
category: database
---

Quickie here, below is a simple command to backup your MySQL database to a fully datestamped file...

    mysqldump -u user mydbname > "backup_`date +%Y%m%d_%H%M`.sql"

Replace 'user' with your MySQL username and mydbname with the name of the database your making a dump of.

The > pipes the output to the file.

The 'date' part uses Linux's date function to append date digits inside the filename.  The ' embeds it inside the filename.

So in the end you should end up with a file something like...

    backup_20071030_1700.sql

Neat!
