---
layout: page
title: SQL Snippets
---

# SQL

##### return top N records

###### SQL Server:

    SELECT TOP 10 product, descr, email 
    FROM products 

###### ORACLE:

    SELECT product, descr, email
    FROM products 
    WHERE ROWNUM <= 10

###### MySQL:

    SELECT product, descr, email
    FROM products
    LIMIT 10

