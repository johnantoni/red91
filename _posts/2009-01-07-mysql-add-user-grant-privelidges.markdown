---
layout: post
title: MySQL Add User and Grant Privelidges
category: database
---

Create user

    CREATE USER 'user1'@'localhost' IDENTIFIED BY 'pass1';

Grant rights specifically

    GRANT SELECT,INSERT,UPDATE,DELETE ON *.* TO 'user1'@'localhost';

Or All at once

    GRANT ALL ON *.* TO 'user1'@'localhost';

Or Create and Give rights all in one hit

    INSERT INTO user (Host,User,Password,Select_priv,Insert_priv)
   VALUES('localhost','user4',PASSWORD('pass3'),'Y','Y');
