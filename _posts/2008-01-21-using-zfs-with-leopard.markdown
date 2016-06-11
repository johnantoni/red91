---
layout: post
title: Using ZFS with Leopard
category: apple
---

With the inception of Sun OS 11 has come the much hoped 'dream' file system, the [Zettabyte File System](http://en.wikipedia.org/wiki/ZFS). 

This wonder offers the ability to self-heal files, repair file corruption transparently, resize partitions on-the-fly, hot-swappable, RAID built-in and dynamic encryption.  A real swiss army knife for file storage.

It also protected the files of billions when the Joyent service StrongSpace went down (now back up), thankfully data was kept under ZFS so it was all safely protected and restored without loss.

Apple are saying they'll have the ZFS file-system available with a future update (maybe 10.5.2) but if you're not scared of delving into the terminal then try installing it for yourself.

Remember this is all Alpha so not fully finalized but workable to use.

#### Installing the Binaries

first off, get these from...

* [ZFS Binaries - Intel Leopard](http://trac.macosforge.org/projects/zfs/wiki/downloads)

once downloaded, go into the Terminal and navigate to the unzipped directory, you should see a 'build' directory in there.

Now to add them to your O/S, run...

    sudo cp build/Release/zfs /usr/sbin/zfs
    sudo cp build/Release/zpool /usr/sbin/zpool
    sudo cp build/Release/libzfs.dylib /usr/lib/libzfs.dylib

Now we need to destroy any existing builds of ZFS on your machine, if existing...

    sudo /bin/rm -rf /System/Library/Filesystems/zfs.fs /System/Library/Extensions/zfs.kext
    sudo cp -R build/Release/zfs.fs /System/Library/Filesystems/zfs.fs
    sudo cp -R build/Release/zfs.kext /System/Library/Extensions/zfs.kext

Great, now navigate to the copied files locations and make sure they have ROOT WHEEL access via...

    ls -la [dir / filename]
    ls -la zpool

You should see in there a column for 'ROOT WHEEL', if it's the case with all six areas your set.

Reboot and you'll be ready to start.

#### Building a ZFS Memory Stick

Now for this experiment I'll convert my memory stick over to using the ZFS file system.

So first off, fire up Terminal again and type...

    diskutil list

This will list all disks available to the system, so in this case my 8gb stick has it's disk called : */dev/disk1*

So I partition it with ZFS doing...

    diskutil partitiondisk /dev/disk1 GPTFormat ZFS %noformat% 100% 

Then create a simple *spool* for it..

    zpool create stick /dev/disk1s2

...note the previous command will list the disks within this ZFS drive, one of them will be our 8GB partition, hence */dev/disk1s2*.

...and *stick* will be the name of our new ZFS disk drive.

Next up we'll need to upgrade the ZFS spool, as by default the current build will create using version 6 for backwards compatibility of the ZFS structure so we'll upgrade it to 8 doing...

    zpool upgrade

Excellent, now before you start dragging and dropping into the new *stick* drive on your desktop let's set some permissions so you don't have to authorise every file action.

So in the desktop, select the *stick* drive and press Option+J to see it's disk options.

On the bottom of the popup you'll see 'Permissions', click the padlock icon to unlock these, type in your system password and set the System and Wheel to both have R/W access.

Excellent, now you can drag & drop, delete files from the ZFS disk as if it was a normal disk drive.

#### Ejecting the ZFS Stick

Before you pull your USB stick out of your computer and cause a *panic* error, make sure to run this command to eject the drive.

    sudo zpool export -f stick

Replace 'stick' with the name of your ZTS spool drive.

#### Deleting Trash from my Stick

There's bug in the current build so clearing your trash on a ZFS drive isn't exactly easy, so back in Terminal...

    cd /volumes/stick

And now find the .Trashes directory with..

    ls -la

Now delete the .Trashes directory to clear your trash,

    rm -rf .Trashes

Bingo, job done.

#### Closing Points

Because of how the way our simple ZFS drive is structured, it performs lazy writes much like a usb drive in Windows; the user gets told the file has been commited but really it's waiting around to action.

By forcing a *zpool export* you are essentially telling the ZFS spool to finish any pending operations and eject the drive safely.

Some time in the future this'll be a much simpler process but for now it's pretty decent having this file system available to keep your files safe.

Looking forward to the final release.
