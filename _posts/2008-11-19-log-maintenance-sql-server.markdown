---
layout: post
title: Log Maintenance (SQL SERVER)
category: database
---

Over time your SQL Server transaction log will fill up and if you don't watch it it'll consume all your server's disk space.

So to cure that problem it's best adding a weekly job to SQL Agent with these commands

Truncate log...

    USE [databasename]
    GO
    BACKUP LOG databasename WITH TRUNCATE_ONLY
    GO

Shrink database...

    USE [databasename]
    GO
    DBCC SHRINKDATABASE(N'databasename' )
    GO

(truncating only clears the logfile, to reclaim that space you have to shrink the database)

##### Important!

Do remember to schedule a full database backup before this so you don't lose any important transactions; critical in a live environment.
