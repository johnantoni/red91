---
layout: post
title: NGINX Config Update
category: nginx
---

Using the Firebug addon YSlow from Yahoo I managed to tune site performance a little more by adding 'expires' to the nginx.conf file

<typo:code lang="ruby">
location ~* ^.+\.(jpg|jpeg|gif|js)$ {
  root   /var/www/apps/myapp/public;
  access_log   off;
  expires      30d;
}
</typo:code>

What this basically does is tell NGINX that any files of type jpg, jpeg, gif, and js with the root dir specified shouldn't be logged for access and have an expires value set to 30 days.

As most of the images I use on-site don't change that much this works perfect for me.

Updated my NGINX example files in the [CODE DOWNLOADS] area so you can grab a copy.

More tips located at...

* [Zhesto Nginx notes](http://zh.stikipad.com/notes/show/nginx)
* [Nginx Full Example 1](http://wiki.codemongers.com/NginxFullExample?highlight=%28expire%29)
* [Nginx Full Example 2](http://wiki.codemongers.com/NginxFullExample2?highlight=%28expire%29)
