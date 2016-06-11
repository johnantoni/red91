---
layout: post
title: CRUD and CRON Jobs
category: linux
---

### Create, Read, Update, Delete = CRUD

The four basic functions of any persistent storage mechanism.

Refers to all of the major functions that need to be implemented in a relational database application to consider it complete. Each letter in the acronym can be mapped to a standard SQL statement:

* Create => INSERT
* Read (Retrieve) => SELECT
* Update => UPDATE
* Delete (Destroy) => DELETE

It's really that simple and not only applies to databases but nearly any form of application.

### CRONTAB and Cron Jobs

In simplest terms, a time-based scheduling service in Unix & Linux systems.

Driven by a configuration file named crontab that specifies shell commands to run periodically on a given schedule.

E.g.
* Load the LighTPD web server when the server reboots
