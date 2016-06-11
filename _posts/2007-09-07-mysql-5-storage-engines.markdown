---
layout: post
title: MySQL 5 Storage Engines
category: database
---

MySQL is a very fast and very flexible multi-user / multi-threaded database system used most popularly for Web Applications and offers the simple startup a good platform to build from at very little cost.

Despite other more pedigree Database Systems (SQL Server, Oracle), it offers some fairly advanced functions to the developer and has gained a good reputation for it's large support base and adherence to standards.

Supporting the ANSI 99 query set, stored prodedures, cursors, triggers, updatable views, text indexing, SSL and even Database Clustering, it's grown up a bit from it's relatively meager beginnings.

It can be expanded upon and can quite successfully grow as your company grows with famous users like "YouTube":http://www.youtube.com , "Adobe":http://www.adobe.com and "Flickr":http://www.flickr.com most of which handling millions of transactions within a single hour.  Okay the unicode support isn't completely there, but it's on the way and release 6 isn't that far off so watch this space. 

h3. MySQL Storage Engines

On top of all this, MySQL offers different ways to handle and manage your data on top of the standard collation types.  Allowing you to basically choose an engine that closely  fits your company needs.  

So if you're a large archive house that only needs to query old records you can opt for the ARCHIVE engine or if your accessing many remote sources you can choose the FEDERATED engine.  The key here is that each one is designed around a specific daily function, allowing you to optimize your hardware  for the best performance.

Here's a look at what's offered,

h4. MyISAM

(default storage engine, best performance overall)
* Default install: Yes
* Data limitations: None
* Index limitations: 64 indexes per table (32 pre 4.1.2); max 16 columns per index
* Transaction support: No
* Locking level: Table
            
h4. MERGE

(allows to combine a number of identical tables into one)
* Data limitations: Underlying tables must be MyISAM
* Index limitations: N/A
* Transaction support: No
* Locking level: Table
    
h4. MEMORY

(stores all data in memory, if power failure, you lose it all good for quick access, calculations, rapid temp tables)
* Data limitations: BLOB and TEXT types not supported
* Index limitations: None
* Transaction support: No
* Locking level: Table
            
h4. FEDERATED

(allows remote data access, combining many sources into one system)
* Data limitations: Limited by remote database
* Index limitations: N/A
* Transaction support: No
* Locking level: No
            
h4. ARCHIVE 

(insert & select only supported, compressed, good for logs, old data)
* Data limitations: Data can only be inserted (no updates)
* Index limitations: N/A
* Transaction support: No
* Locking level: N/A
            
h4. CSV

(stores as comma-separated data, good for data transport)
* Data limitations: None
* Index limitations: Indexing is not supported
* Transaction support: No
* Locking level: Table

h4. BLACKHOLE 

(allows you to test out possible data structures, schemas)        
* Data limitations: No data is stored, but statements are written to the binary log (and therefore distributed to slave databases)
* Index limitations: N/A
* Transaction support: No
* Locking level: N/A
            
h4. ISAM

(original engine, included only for backwards compatibility)
* Data limitations: Limited maximum database size (4GB)
* Index limitations: Maximum 16 indexes per table, 16 parts per key
* Transaction support: No
* Locking level: Table
            
h4. BERKELEY DB

(hash-based storage engine, very quick to access & recover great for accessing data that does not change much, due to it's table locking)        
* Data limitations: None
* Index limitations: Max 31 indexes per table, 16 columns per index; max key size 1024 bytes
* Transaction support: Yes
* Locking level: Page (8192 bytes)
            
h4. INNO DB 

(based on myisam + adds database cacheing & indexing, in memory and disk, very fast recovery, less table-locking issues, speeds up recovery & storage. there is a management overhead with InnoDB that requires your system to be optimised to use it but great if you go that extra mile)
* Data limitations: None
* Index limitations: None
* Transaction support: Yes (ACID compliant)
* Locking level: Row

h4. EXAMPLE 

(used as a blueprint to create your own storage engine)

h3. Uses

Having a lot of different storage engines available is a major bonus, but just because I'm nice I'll let you into what I use.  It's really a mixture but mainly InnoDB (major apps) because it's less limiting and I like to have total control, but I do have a couple of sites I run for friend's using the Berkeley DB engine (blogs).

Enjoy,
