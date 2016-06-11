---
layout: post
title: mod_deflate and packer
category: apache
---

Ok, a lot of people try to knock Apache because it's not as fast as some other really lightweight webserver's; but in fact truth be known there's a ton of ways to speed it up if you try.

### mod_deflate

One of these is mod_deflate, which enables gzip compression on your web pages being served to your clients.

#### Enabling mod_deflate

To enable this, remote onto your server and...

    cd /usr/local/apache2/conf
    nano httpd.conf

Now scroll down (ctrl+v, up with ctrl+y), till you get to the bottom of the **LoadModule** declarations,

And add this...

    LoadModule deflate_module modules/mod_deflate.so

Note: if you used capistrano to deploy your rails server it might be enabled already, so do a quick check of the LoadModule lines to see if it's already declared.

Now to declare what should be compressed, add this to the file:

    AddOutputFilterByType DEFLATE text/html text/plain text/xml

or more intensively

    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE image/svg+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/atom_xml
    AddOutputFilterByType DEFLATE application/x-javascript
    AddOutputFilterByType DEFLATE application/x-httpd-php
    AddOutputFilterByType DEFLATE application/x-httpd-fastphp
    AddOutputFilterByType DEFLATE application/x-httpd-eruby
    AddOutputFilterByType DEFLATE text/html

Now save the file and restart your Apache server...

    /etc/init.d/httpd restart

P.S. Tested and does work on Apache 2.2


#### Testing

You can test how it's working by going to:

* [http://www.whatsmyip.org/mod_gzip_test/](http://www.whatsmyip.org/mod_gzip_test/)

...and entering your website's address, this will check the site to see if gzip compression is running and how good it's doing.


### Compressing Javascript with Packer

Also on the boards is Dean Edwards awesome Packer utility, to use it goto:

* [http://dean.edwards.name/packer/](http://dean.edwards.name/packer/)

and copy in your javascript code, run it and you'll get the packed version, paste that back into your file and your done.

Be careful though, best to make copies before you do that.
