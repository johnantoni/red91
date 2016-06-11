---
layout: post
title: mod rewite + sqlite on joyent
category: apache
---

##### Mod Rewrite

in your /web/public directory create your .htaccess file:

    RewriteEngine On
    RewriteRule ^$ index.html
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^(.+) - [PT,L]
    RewriteRule ^(.*) index.php

Give it a minute and all requests for www.mysite.com will point to index.php

##### Enabling Sqlite support on Joyent Shared Accelerators

Although this has been left out of the shared accelerators you can re-enable it.

Using Transmit, or any other SFTP tool, in your domain's site navigate to it's **/etc/php5/php.ini**

Now find the below and enable them, removing **;**

    extension=pdo_sqlite.so
    extension=sqlite.so

Restart Apache or in VirtualMin go to **Edit Virtual Server** and hit **Save Virtual Server** to trigger a refresh.

In a minute your site should have SQLite3 support
