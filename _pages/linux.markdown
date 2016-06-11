---
layout: page
title: Commands (more)
---

# Linux Specific Commands

![Ironman](http://data.red91.com/red91/assets/2509876144_90c82aa064.jpg)

    cat /etc/issue   ...return o/s installed
    
    who      ..users logged in and what they're doing
    users    ..users logged in
    last     ..users who have logged in / out + when last rebooted
    lastlog  ..does the same but lists as log
    whoami   ..who you're logged in as
    sudo passwd [user]  ..change users password

    nano [file]  ..nice text editor
    gedit .      ..open current dir in gnome editor (note the . )

    cat /proc/cpuinfo  ..show cpu info
    cat /proc/cpuinfo | grep processor | wc -l  .   ...cpu info + processors
    dmidecode | less  ...BIOS info
    ethtool -i eth0  ...ethernet adapter hardware info
    
    free -tm           ..shows memory free in mb
    top                ..memory usage
    uname -options     ..show o/s info
    dmesg              ..debug info

    chown [user] file/folder  ..change file/folder ownership
    chmod -R a+rw public   ...change permissions recursively
    which [program]           ..find location of program
    
    sudo aptitude update
    sudo aptitude safe-upgrade
    sudo aptitude clean
    
    sudo aptitude install [package]
    sudo aptitude remove [package]
    
    crontab -e

    ..start task on reboot without email reporting
    @reboot (sh /startup.sh) > /dev/null 2>&1
        
    poweroff   ..shutdown machine
    shutdown -r now  ..reboot machine

    rm -rf  [dir]  ...remove directory recursively

    ls -a  ..show files / dirs inc. hidden files
    ls -l  ..show file / dir permissions & sizes
    
    ssh-keygen           ..generate rsa key
    ssh-keygen -d        ..generate dsa key
    ssh-keygen -f mykey  ..generate named rsa key
    
    chmod -R a+rw public ..make [public] public recursively
    
    lspci | grep VGA  ..show video hardware

**Tip:** if your copying files from one server to another wondering why the target server doesn't retain your file permissions; make sure your target server has the same user account as your source server.

    adduser [username]

[Security Enhanced Linux - SELinux](http://www.ibm.com/developerworks/linux/library/l-selinux/?ca=dgr-btw01SELinux)

[Cron Article](http://www.ibm.com/developerworks/linux/library/l-job-scheduling.html?S_TACT=105AGX03&S_CMP=ART)

[Power Management](http://www.lesswatts.org/tips/ethernet.php#giga)

##### Linux add user to SUDOers List

Be as root, then edit the suoders file

    su root
    nano /etc/sudoers

Now add & save...

    mynewsudoer ALL=(ALL) ALL

Logout, login and you're done.

##### Linux Frozen Restart

Hold down ALT + SysRq, then type **REISUB**, after which you machine will shutdown gracefully from a total lockup, quaintly remembered as 'Raising Elephants Is So Utterly Boring'.

##### Linux Screen Resolution Fix

Grabbed this a while back, not completely sure on the 100% ness, but may help you out re-testing your hardware,

    //backup xorg config
    sudo cp /etc/X11/xorg.conf /etc/X11/xorg.conf_backup

    //stop x server
    sudo /etc/init.d/gdm stop

    //logout to non-graphical interface
    Ctrl+ Alt+ F1

    //login

    //reconfigure xorg
    sudo dpkg-reconfigure -phigh xserver-xorg

    //restart xorg
    sudo /etc/init.d/gdm start

##### Linux SCP

Securely copy *.gz files from server to local Documents directory,

    sudo scp joe@mybox.com:/home/joe/*.gz ~/Documents

Or with an ssh identity file, 

    sudo scp -i ~/.ssh/mybox.pub joe@mybox.com:/home/joe/*.gz ~/Documents

##### Install OpenSSH

    sudo aptitude install openssh-server openssh-client

##### Change SSH port

    sudo nano /etc/ssh/sshd_config

look for the line **port 22** and change the number to the one you want, save and close the file; then restart ssh;

    sudo /etc/init.d/ssh restart

Now when you connect use,

    ssh –p portnumber servername

##### Change SSH Client Default Port

    sudo nano /etc/ssh/ssh_config

Look for the line **port 22** and uncomment it, change it to the port you want it to automatically use instead of the normal 22.  Save and it should take effect next time you use the SSH command to connect to a remote host.

##### IPTables

Save existing rules,

    iptables-save > /etc/iptables.up.rules

See what rules are currently defined,

    iptables -L

Create new iptables rule file,

    nano /etc/iptables.test.rules

Copy and paste from [here](http://articles.slicehost.com/assets/2007/9/4/iptables.txt), example linked from [SliceHost.com](http://articles.slicehost.com/2008/4/25/ubuntu-hardy-setup-page-1)

...or from the example here (using ssh port 22) [here](http://www.red91.com/pages/iptables).

Save the file and apply those rules to the server,

    iptables-restore < /etc/iptables.test.rules

Check for any difference,

    iptables -L

Once happy, apply permanently,

    iptables-save > /etc/iptables.up.rules

To make sure these new rules are applied on reboot, edit this file;

    nano /etc/network/interfaces

Add a single line (shown below) just after 'iface lo inet loopback';

    auto lo
    iface lo inet loopback
    pre-up iptables-restore < /etc/iptables.up.rules

Save and close the file, the reload SSH,

    /etc/init.d/ssh reload

##### Fail2Ban

    sudo aptitude install fail2ban

* [HowTo Guide](http://www.howtoforge.com/fail2ban_debian_etch)

Edit configuration in,

    sudo nano /etc/fail2ban/jail.conf

Create a new file to add your specific customisations, like **jail.local**, don't edit **jail.conf** directly;

    sudo nano /etc/fail2ban/jail.local

Add your computer (and any you don't want accidentally banned) to the **ignoreip** list.

Restart Fail2Ban,

    sudo /etc/init.d/fail2ban restart

To see if any hosts are blocked, check for iptables,

    sudo iptables -L

##### Turn off Bluetooth (Ubuntu)

    sudo nano /etc/modprobe.d/blacklist

Add this to the bottom of the file,

    blacklist hci_usb

This will disable it from boot (blacklisting it as a problem area).

Open **System > Preferences > Sessions**, find a listing for **bluetooth** and disable it.

Next open **System > Administration > Services**, find the listing for **bluetooth** and uncheck it.

...if this doesn't work, edit:

    sudo nano /etc/init.d/bluetooth 

and add this to the top of the file,

    exit 0

##### Screen Tool

    sudo aptitude install screen -y

Start screen,

    screen

This [Screen tutorial](http://www.linuxjournal.com/article/6340) may help you out understanding it's benefits.  Basically by using Screen, if your normal SSH session fails halfway thru something the process will still continue (normally it'd hang and fail); when you reconnect you'll be back where you started, losing nothing.

Your bash profile won't be initiated but can be with,

    source ~/.bash_profile

...and to collaborate with someone else also connected to the box using SCREEN,

    screen -S foo  ...joins your Screen session with someone else (called 'foo')

detach with CTRL + A, then D,

and reattach with

    screen -X foo

##### BASH Profile

    sudo nano ~/.bash_profile

Add this to colorise the console,

    export PS1='\[\033[0;35m\]\h\[\033[0;33m\] \w\[\033[00m\]: '

Alternatively try this, along with some helpful aliases,

    export PS1='\[\033[0;32m\]\h\[\033[0;36m\] \w\[\033[00m\]: '
    alias free="free -m"
    alias update="sudo aptitude update"
    alias install="sudo aptitude install"
    alias upgrade="sudo aptitude safe-upgrade"
    alias remove="sudo aptitude remove"

To active your changes, logout & login or run the following:

    source ~/.bash_profile

Note: for ubuntu desktop, i've found this only takes effect if you copy & paste it into the **.bashrc** file.

    sudo nano .bashrc

##### Sources

    sudo nano /etc/apt/sources.list

##### Locales

Install,

    sudo aptitude install localeconf

Set locale (usually only need this one initially),

    sudo locale-gen en_GB.UTF-8

Configure locale,

    sudo dpkg-reconfigure localeconf

##### Reset Screen

    reset

equivalent to logging out and logging in again, without actually losing your connection, good if your screen just got hosed.

##### Mount / Unmount CD

    mount /media/cdrom  ...mount cdrom
    eject  ...eject cdrom

...and if it's playing up

    fuser /media/cdrom  ...find out who's got control of the drive
    fuser -k /media/cdrom  ...kick them off
    eject  ...eject cdrom

##### Check Bandwidth

    wget http://dast.nlanr.net/Projects/Iperf2.0/iperf-2.0.2.tar.gz
    tar zxvf iperf*gz
    cd iperf-2.0.2
    ./configure -prefix=/home/bob/perf
    make
    make install

then...

    /home/[user]/perf/bin/iperf -s -f M
