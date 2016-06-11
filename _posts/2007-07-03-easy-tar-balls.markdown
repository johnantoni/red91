---
layout: post
title: Easy TAR balls
category: linux
---

TAR is a linux command that makes it easy to wrap up entire files & directories and put them into one  file that can be moved to another location.  Basically it creates a tape archive (TARBALL) of your files, allowing you to extract them later on and even compress their contents via BZIP; plus it's really fast!

#### Creating a .TAR

    tar -cvvf backup.tar work

...creates a tar file named work.tar which contains everything in work directory and recursively everything beyond

    tar -cjvf backup.tbz work

...adding -j enables tar to compress files & directories with bzip, backing up everything in the work directory and everything beyond.  note the different extension used -> .tbz denoting it's a compressed archive

#### Extracting a .TAR

    tar -xvvf backup.tar

...extracts / untar's everything from the work.tar tarball inside the directory your in

#### Extract TarBall

if bzipped, extract with...

    tar -xjvf backup.tgz

or gzipped, extract with...

    tar -xcvf backup.tar.gz

#### Gzipped ?

GZip is essentially a free version of winzip without the you-gotta-pay-for-it stamp.  Now used on it's own it works on single files turning them into gzipped .gz files, with TAR and it allows you to gzip tons of files (see examples above).

to gzip a file do...

    gzip myfile.txt

...this gzips it to myfile.gz

to extract the gzipped file do...

    gunzip myfile.gz

### Or Simply...

#### Archive & Compress directory I'm in

    tar -zcvf backup.tgz . 

#### ...Then Extract it

    tar -xzvf backup.tgz
