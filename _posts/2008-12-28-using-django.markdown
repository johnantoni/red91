---
layout: post
title: Quick-Install Django
category: python
---

![Django](http://farm4.static.flickr.com/3081/3142635195_7c147ec55c.jpg)

Developed four years ago by a fast-moving online-news operation, Django was designed to handle two challenges: the intensive deadlines of a newsroom and the stringent requirements of the experienced Web developers who wrote it. It lets you build high-performing, elegant Web applications quickly.

##### Install Latest

Install [Guide](http://docs.djangoproject.com/en/dev/intro/install/)

    svn co http://code.djangoproject.com/svn/django/trunk/ django
    cd django
    sudo python setup.py install

Check installed ok by doing,

    python
    import django

If the library was imported ok then Django's installed fine.

##### Create Project

    cd ..
    django-admin.py startproject mysite

Creates a new project called **mysite**

Check the development webserver runs ok with...

    cd mysite
    python manage.py runserver
    ..or run on different port
    python manage.py runserver 8080

##### More

* [Django Tutorial](http://docs.djangoproject.com/en/dev/intro/tutorial01/#intro-tutorial01)
* [Django Documentation](http://docs.djangoproject.com/en/dev/#using-django)

##### Django on Nginx

Quick Link, prefer Nginx over Apache or Lighty so will want to have it under this from day one.

* [Link](http://www.rkblog.rk.edu.pl/w/p/django-nginx/)

