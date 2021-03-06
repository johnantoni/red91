------------------------------------------------------------------------

layout: post\
title: MySQL Commands\
category: database\
----

Here's some useful commands for using MySQL from the command line, and
breakdowns of the most common SQL query syntax.

#### Command Line

**mysql -u root\@localhost**\
p. login to mysql server with username 'root', host = localhost, this
will drop you into a sql console where you can fire off common SQL
queries & commands (e.g. select \* from users, create table users...)

<strong>mysqladmin -u root password \[mysqlpassword\]</strong>\
p. change the 'root' password

<strong>mysqladmin -u root create sessions\_development</strong>\
p. using 'root' account, create database 'sessions\_development'

<strong>mysqladmin -u root drop sessions\_development</strong>\
p. using 'root' account, delete database 'sessions\_development'

<strong>mysqldump -u root -ppassword ---opt \>/all.sql</strong>\
p. backup all databases to disk

<strong>mysqldump -u root mydb \> mydb.sql</strong>\
p. backup only database 'mydb' to disk

<strong>mysql -u username -ppassword mydb \< /mydb.sql</strong>\
p. restore database mydb from disk

#### Console Queries

<strong>CREATE TABLE new\_tbl SELECT \* FROM orig\_tbl;</strong>\
p. create one table from the results of a SELECT query

<strong>CREATE TABLE people (\
id INT NOT NULL AUTO\_INCREMENT PRIMARY KEY,\
fullname VARCHAR (255) );</strong>\
p. creates a new table 'people' with an auto-incrementing
(AUTO\_INCREMENT) 'id' field that is the primary key (PRIMARY KEY) and
can't be null (NOT NULL), along with a 'fullname' variable text string
field

<strong>INSERT INTO goods (price) VALUES (1.99);</strong>\
p. insert a new record into goods with the field 'price' of 1.99

<strong>UPDATE goods SET price = 2.99 WHERE name = 'shampoo';</strong>\
p. update 'price' value for record with 'name' of shampoo in 'goods'
table

<strong>DROP TABLE IF EXISTS goods;</strong>\
p. conditionally only delete the table 'goods' if it exists

<strong>SHOW databases;</strong>\
p. list all databases on server

<strong>USE mydb;</strong>\
p. switch to another database

<strong>DESC goods;</strong>\
p. show table definition for 'goods' table

<strong>SHOW CREATE TABLE goods;</strong>\
p. show the sql syntax for creating the 'goods' table

<strong>DESCRIBE goods;</strong>\
p. to see all of table 'goods' field formats

<strong>FLUSH PRIVILEGES;</strong>\
p. update all database permissions & privileges

<strong>COMMIT;</strong>\
p. commit all pending transactions

<strong>ROLLBACK;</strong>\
p. rollback previous transaction
