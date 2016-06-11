---
layout: post
title: Beginning NGINX
category: nginx
---

In this series of articles I'll explain how to install and setup the super light and fast NGINX webserver on your Linux box and get it to host rails apps and maybe a little extra.

#### First off let's install NGINX

To install the latest copy of NGINX you're gonna need to build from source so make sure you install the build-essentials (gcc), to do this run...

    sudo aptitude install build-essential

Now you've got the GCC compiler installed you can build from source, so let's download the latest copy of NGINX...

First some dependencies,

    sudo aptitude install libpcre3 libpcre3-dev libpcrecpp0 libssl-dev zlib1g-dev

Now the bad boy himself,

    cd ~/sources/
    wget http://sysoev.ru/nginx/nginx-0.5.35.tar.gz
    tar -zxvf nginx-0.5.35.tar.gz
    cd nginx-0.5.35/

now configure the source,

    ./configure --sbin-path=/usr/local/sbin --with-http_ssl_module

it'll finish with a summary of locations like,

    nginx path prefix: "/usr/local/nginx"
    nginx binary file: "/usr/local/sbin"
    nginx configuration file: "/usr/local/nginx/conf/nginx.conf"

write these down before you continue, very important!

now build,

    make

and install

    sudo make install

#### Running NGINX

As those last summary lines told us, nginx lives in -> /usr/local/sbin/nginx, so let's go start it,

    sudo /usr/local/sbin/nginx

now if you navigate to your boxes ip address you should see a fancy 'welcome to nginx' message, wahey! you have it installed.

#### Final part, startup scripts

Now the next script I'm very thankful for PickledOnion over at Slicehost.com for providing.

First off let's create an init script so we can start it more nicely and NGINX will start on reboot, so...

    sudo nano /etc/init.d/nginx

And now copy & paste this init script into nano...

    #! /bin/sh
    
    ### BEGIN INIT INFO
    # Provides:          nginx
    # Required-Start:    $all
    # Required-Stop:     $all
    # Default-Start:     2 3 4 5
    # Default-Stop:      0 1 6
    # Short-Description: starts the nginx web server
    # Description:       starts nginx using start-stop-daemon
    ### END INIT INFO
    
    PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
    DAEMON=/usr/local/sbin/nginx
    NAME=nginx
    DESC=nginx
    
    test -x $DAEMON || exit 0
    
    # Include nginx defaults if available
    if [ -f /etc/default/nginx ] ; then
            . /etc/default/nginx
    fi
    
    set -e
    
    case "$1" in
      start)
            echo -n "Starting $DESC: "
            start-stop-daemon --start --quiet --pidfile /usr/local/nginx/logs/$NAME.pid \
                    --exec $DAEMON -- $DAEMON_OPTS
            echo "$NAME."
            ;;
      stop)
            echo -n "Stopping $DESC: "
            start-stop-daemon --stop --quiet --pidfile /usr/local/nginx/logs/$NAME.pid \
                    --exec $DAEMON
            echo "$NAME."
            ;;
      restart|force-reload)
            echo -n "Restarting $DESC: "
            start-stop-daemon --stop --quiet --pidfile \
                    /usr/local/nginx/logs/$NAME.pid --exec $DAEMON
            sleep 1
            start-stop-daemon --start --quiet --pidfile \
                    /usr/local/nginx/logs/$NAME.pid --exec $DAEMON -- $DAEMON_OPTS
            echo "$NAME."
            ;;
      reload)
    	      echo -n "Reloading $DESC configuration: "
    	      start-stop-daemon --stop --signal HUP --quiet --pidfile     /usr/local/nginx/logs/$NAME.pid \
    	          --exec $DAEMON 
    	      echo "$NAME."
    	      ;;
    	  *)
    	        N=/etc/init.d/$NAME
    	        echo "Usage: $N {start|stop|restart|reload|force-reload}" >&2
    	        exit 1   
    	        ;;
    	esac
    
    	exit 0

Yes it's a monster, I've copied it over to my server so you can grab it at..

 * [NGINX Init Script](http://www.red91.com/assets/nginx.txt)

Now lets use it with...

    sudo chmod +x /etc/init.d/nginx
    sudo /usr/sbin/update-rc.d -f nginx defaults

You should now see...

    Adding system startup for /etc/init.d/nginx ...
       /etc/rc0.d/K20nginx -> ../init.d/nginx
       /etc/rc1.d/K20nginx -> ../init.d/nginx
       /etc/rc6.d/K20nginx -> ../init.d/nginx
       /etc/rc2.d/S20nginx -> ../init.d/nginx
       /etc/rc3.d/S20nginx -> ../init.d/nginx
       /etc/rc4.d/S20nginx -> ../init.d/nginx
       /etc/rc5.d/S20nginx -> ../init.d/nginx

Now NGINX will startup on reboot and you can run these commands to control it better.

*Start*

    sudo /etc/init.d/nginx start

*Stop*

    sudo /etc/init.d/nginx stop

*Restart*

    sudo /etc/init.d/nginx restart

Next up i'll put together the nginx scripts I use myself which should help you out a lot when hosting your site with this great tool.

#### Final Note

On a later note you may get times when you change your NGINX .conf scripts restart NGINX and it doesn't seem to have taken your latest config changes, I get this myself sometimes.

What you can do is brute-force kill the NGINX process and restart it with...

    ps aux | grep nginx

which will return the process id NGINX is running at, then kill it with...

    kill [processid]

and now start NGINX from fresh,

    sudo /etc/init.d/nginx start

#### .Conf Templates

For your info and more so the guys who have working NGINX setups, I've put example config files in my [downloads](http://www.red91.com/pages/downloads) area, with direct links here....

* [nginx system .conf template](http://www.red91.com/assets/nginx.conf)

* [nginx ruby app .conf template](http://www.red91.com/assets/nginx_ruby.conf)

* [nginx redirect .conf template](http://www.red91.com/assets/nginx_redirect.conf)
