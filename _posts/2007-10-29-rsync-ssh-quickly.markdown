---
layout: post
title: Rsync and SSH quickly
category: linux
keywords: "rsync, ssh, keyfile, ssh keyfile, commandline example, tutorial"
---

Another little mini article on automating file remote file transfers with RSYNC + SSH.

#### RSYNC

RSYNC is a Linux tool that allows you to copy all the files from the source to the destination, but copies only the one's which have changed between them; limiting the data you have to send rather than doing a blanket copy all.

#### SSH

SSH is a tool that allows you to gain remote access to a server from your computer.

#### RSYNC + SSH

Put these two together and you'll be able to copy files from your pc to a remote box as seemlessly as you do a COPY * from the command prompt.

#### Creating the Keyfile

First off it's good to stick your .SSH keys in the .SSH directory rather than all over the place so type...

    CD .SSH

...From the terminal to navigate to your .SSH directory.

Now type...

    ssh-keygen -d

This will generate a stronger SSH key.  When asked for the name of your key type 'STORAGE' as we'll use this to backup our files to somewhere else.  Don't enter a password if you want it to not prompt you for one everytime you do a transfer.

Two files will be created, a private key, and a public .pub public key.  These will be both binded to your PC and wherever you upload the public key file you will have access to from your PC.

#### Copy to your Remote Box

Now use WinSCP, TRANSMIT or some FTP tool to access your remote box and create a .SSH directory in it's root.

Create a text file called 'authorized_keys' with no extension and copy-n-paste the contents of your .ssh/storage.pub file into this text file on your remote box and save it.

Now you will have access to the remote box from your PC.

#### The RSYNC Command

Now to copy files from your PC to the remote box type this complex RSYNC command...

    rsync -azvCL --exclude=.DS_Store --progress -e "ssh -i .ssh/storage" * user@mybox.com:/home/backup/

Let's break this down...

* *-azvCL*, this tells RSYNC to compress the data across the connection if it can so if your sending 22mb of text data it'll take less time; plus it'll recursively copy all the files and directories you choose.

* *--exclude*, defines what files to exclude in the transfer, for this i'm on a MAC box and I want to exclude the file thumbnails OSX creates.

* *--progress*, tells rsync to show us interactively the progress of our transfers.

* *-e*, is the important bit, this tells rsync to use SSH and where the keyfiles are located.

* Replace *USER* with the username for your remote box, and *storage.com* with the domain name or IP address of your remote box.

* :/home/backup/ tells RSYNC to copy the files to the backup directory located in the base of your remote box.

The beauty with RSYNC is that if the transmission breaks half-way it won't copy the file, so you won't be left with half of a file on your remote server thinking it's the full copy; and with all these options enabled it's hellishly quicker.

P.S.
Use [Markdown](http://daringfireball.net/projects/markdown/syntax) + [SmartyPants](http://daringfireball.net/projects/smartypants/ ) for semantically correct XHTML.

Enjoy! 
