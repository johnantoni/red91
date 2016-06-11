---
layout: page
title: Installing NGINX
---

# NGINX WebServer Notes

##### Where's the Config Stored

    cd /etc/nginx

##### Example Config Files

* [nginx startup script](http://data.red91.com/red91/assets/nginx.txt)

(startup script no longer needed with latest versions)

* [nginx system .conf template](http://data.red91.com/red91/assets/nginx.conf)

* [nginx ruby app .conf template](http://data.red91.com/red91/assets/nginx_ruby.conf)

* [nginx redirect .conf template](http://data.red91.com/red91/assets/nginx_redirect.conf)

##### Redirects

    server {
        server_name  www.example.com;
        rewrite ^(.*) http://example.com$1 permanent;
    }

or listen off the port,

    server {
        listen 80;
        server_name  www.example.com;
        rewrite ^(.*) http://example.com$1 permanent;
    }

* [more](http://aleksandarsavic.com/nginx-redirect-wwwexamplecom-requests-to-examplecom-or-vice-versa/#comment-274)

##### Start / Stop / Restart

    sudo /etc/init.d/nginx start
    sudo /etc/init.d/nginx stop
    sudo /etc/init.d/nginx restart

##### Check If Running

    ps aux | grep nginx

or 

    top  (then ctrl+m or ctrl+p)
