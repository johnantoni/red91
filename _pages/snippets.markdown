---
layout: page
title: Commands
---

# Code & Commands Snippets

<img src="//data.red91.com/red91/assets/2509876146_f1ed489e85.jpg"/>

Here's a collection of useful code and commands i've picked up over the years, use at your own risk.

##### Apple iPhone

    \var\root\Library\Notes\notes.db    ...location of notes

##### C# Guid

Create a Guid (globally unique identifier)

    string strGuid = Guid.NewGuid().ToString();

##### CSS

Class

    <div class="myclass"></div>
    .myclass { .... }

ID 

    <div id="myid"></div>
    #myid { .... }

##### Firefox

    CTRL+SHIFT+DEL = clear private data outside dialog

##### GIT Distributed Version Control

    sudo aptitude install git-core

    git init                   ...init repository
    git add .                  ...add everything in dir to repository
    git commit -a -m 'update'  ...add + commit changes
    git status                 ...show repository status
    git checkout [path]        ...checkout remote repository
    
    git add [file]             ...add file
    git rm [file]              ...remove file
    git mv [file]              ...move file

##### JavaScript

* [TinyMCE Perfect Config](http://www.red91.com/assets/tinymce_perfect_setup.txt)

* [Hiding Elements via the DOM](http://www.red91.com/assets/hide_elements_via_dom.txt)

generate random number...

    var randomnumber=Math.floor(Math.random()*11)

convert integer to string...

    mys = myi + '';

convert object to string...

    myi = Math.floor(myo);

href links...

    <a href="javascript:void(0);" onclick="dosomething();" />

to access a javascript object from outside the iframe...

    top.[my js object]
    onclick="top.myobj.close();"

* [example](http://cross-browser.com/talk/inter-frame_comm.html)

check if form element exists...

    function testIsValidObject(objToTest) {
        if (objToTest == null || objToTest == undefined) {
            return false;
        }
        return true;
    }

get value of selected list item...

    $('myListBox').options[$('myListBox').options.selectedIndex].value

get text name of selected list item...

    $('myListBox').options[$('myListBox').options.selectedIndex].value

* [lowpro - unobtrusive javascript](http://www.danwebb.net/2006/9/3/low-pro-unobtrusive-scripting-for-prototype, danweb.net)

##### JavaScript - Prototype

attach function to load event of page

    Event.observe(window, 'load', myfunc);

or attach code to run once page has fully loaded (if you've got one Event.observe-on-load already setup, this will be appended to that one, so one doesn't overwrite the other)...

    Event.observe(window, "load", function () {
        ...code...
    };       

alternatively, try Dexagogo's FastInit library,

* [FastInit](http://tetlaw.id.au/view/javascript/fastinit)

...more functions,

* parseFloat syntax:   **parseFloat('string')**
* parseInt syntax:   **parseInt( 'string' [, base] )**

##### JAVA

compile java file to .class binaries

    JAVAC [source.java]

run java program

    JAVA [source -minus .java extension]

##### IIS

    IISRESET ...restart iis service (run as administrator)

##### Linux

    who      ..users logged in and what they're doing
    users    ..users logged in
    last     ..users who have logged in / out + when last rebooted
    lastlog  ..does the same but lists as log
    whoami   ..who you're logged in as
    sudo passwd [user]  ..change users password

    nano [file]  ..nice text editor
    gedit .      ..open current dir in gnome editor (note the . )

    cat /proc/cpuinfo  ..show cpu info
    free -tm           ..shows memory free in mb
    top                ..memory usage
    uname -options     ..show o/s info
    dmesg              ..debug info

    chown [user] file/folder  ..change file/folder ownership
    which [program]           ..find location of program
    
    sudo aptitude update
    sudo aptitude safe-upgrade
    sudo aptitude clean
    
    sudo aptitude install [package]
    sudo aptitude remove [package]
    
    crontab -e   ...cron records
    crontab -i    ...test cron records
    
    visudo         ...setup user rights

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

##### Microsoft .NET

**File upload settings in WEB.CONFIG**

By default, ASP.NET permits only files that are 4,096 kilobytes (KB) (or 4 megabytes [MB]) or less to be uploaded to the Web server. To upload larger files, you must change the maxRequestLength parameter of the <httpRuntime> section in the Web.config file.  Note When the maxRequestLength attribute is set in the Machine.config file and then a request is posted (for example, a file upload) that exceeds the value of maxRequestLength, a custom error page cannot be displayed. Instead, Microsoft Internet Explorer will display a "Cannot find server or DNS" error message.

    < httpRuntime 
    executionTimeout="90" 
    maxRequestLength="4096"
    useFullyQualifiedRedirectUrl="false" 
    minFreeThreads="8" 
    minLocalRequestFreeThreads="4"
    appRequestQueueLimit="100"
    />

##### MySQL 5

**MySQL and MySqlDump paths**

these are usually located in /usr/bin/mysqldump and /usr/bin/mysql

##### CocoaMySQL Config

    host = localhost
    user = root
    password = blank

##### NGINX Config Files

* [nginx startup script](http://www.red91.com/assets/nginx.txt)

* [nginx system .conf template](http://www.red91.com/assets/nginx.conf)

* [nginx ruby app .conf template](http://www.red91.com/assets/nginx_ruby.conf)

* [nginx redirect .conf template](http://www.red91.com/assets/nginx_redirect.conf)

##### Rails - Console

    script/console              ...open RoR interactive console
    script/console production   ...load in production mode
    
    reload!                     ...reload classes, etc.
    quit                        ...quit console (or try 'exit')

##### Rails - RAKE

    rake db:create                 ..create database
    rake db:drop                   ..drop database
    
    rake db:sessions:clear         ..empty sessions table
    
    rake db:migrate                ..run db migrations
    rake db:migrate VERSION=<version to roll back to>  ..rollback db
    
    rake rails:update:javascripts  ..update javascript libraries
    
    rake routes  ...list available routes in application

[Rake Command Reference](http://thinkingrails.blogspot.com/2007/06/rails-rake-tasks-reference.html)

##### Rails -  no such file to load -- sqlite3/database

    /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.2.2]$ sudo find . -perm 0662 -exec chmod 664 {} \;

...more [here](http://www.icoretech.org/2008/07/06/no-such-file-to-load-sqlite3-database)

##### TrueCrypt

    sudo truecrypt arc      ...mount archive
    sudo truecrypt arc -d   ...dismount archive

##### UltraEdit


Line breaks with CRLF

* find: **><**
* replace: **>^p<**

##### SQL Server

**Shrink TempDB, No Mercy**

    BACKUP LOG tempdb WITH TRUNCATE_ONLY 
    DBCC SHRINKDATABASE(tempdb,TRUNCATEONLY)

##### SQL 2005 User Account Security

In SQL 2005 onwards all user accounts get the ability to force users to change their passwords on login, along with expiration times.  So if you're logging in via ODBC and get the message 'The Password of the account must be changed' its because 'must change' is flagged for the login account.  To change this, open Management Studio / Security / Logins and select the login account, double-click and untick CHECK_POLICY and CHECK EXPIRATION.  Alternatively delete the user account and re-create it but this time making sure MUST CHANGE and the two others are un-ticked.

##### Ruby on Rails

* [Migrations Cheat Sheet](http://garrettsnider.backpackit.com/pub/367902)
* [Acts_as_Authenticated](http://technoweenie.stikipad.com/plugins/show/User+Authentication)
* [RailsCasts - PodCast](http://railscasts.com/)
* [Ruby Forum](http://www.ruby-forum.com/)

    Rails [app]  ...creates initial ruby application files and creates [app] directory they will reside under 

##### TextMate

    Mate [dir]
    Mate ../mydir <= opens directory in textmate

##### Tube (london)

get status updates, send text to **60835** with...

    Tube district

to get status updates for the district line, change [district] to the line you use.

##### VI

Emulators,

* [Vim](http://www.vim.org/) ...vi clone
* [ViEmu](http://www.viemu.com/) ...Vi/vim emulation for Visual Studio, Word, Outlook and SQL Server
* [Vimperator](http://vimperator.mozdev.org/) ...Vimperator is a free browser add-on for Firefox, which makes it look and behave like the Vim text editor

##### Visual Studio 

Toggle whitespace

    ctrl + r
    ctrl + w

* [Keyboard Shortcuts](http://www.codinghorror.com/blog/files/Visual%20Studio%20.NET%202005%20Keyboard%20Shortcuts.htm)

##### Win / Linux Command-Line

    PING -t [server] ..ping address infinitely
    TRACERT 192.001.002.002* ..trace path across net

    DIG [domain name] ..domain info (mac/linux)

    CLS ..clear screen (win)
    NSLOOKUP [domain name] ..domain info (win)
    IPCONFIG /FLUSHDNS ..flush local dns cache

note: for DIG, you'll need the BIND9 & DNSUTILS package,

    sudo aptitude install bind9 dnsutils

##### Windows Hosts File

Located in...

    c:/windows/system32/drivers/etc/

Open the file **hosts** with notepad to edit it (open as **Administrator** in Windows Vista to change it).

##### Window Vista Explorer View Settings

This is changed in Vista, to set how you want files to show, hidden files, extensions, etc.,

* open **'Computer'**
* then click on the **'Organise'** tab, 
* then on the drop-down select **'Folder and Search Options'**
* within the popup select the **'View'** tab, from there you can set the view options.

##### JSON Handler for .NET IIS

Code:

    <add name="Json" path="*.json" verb="*" type="JsonHTTPHandler.JSONHandler" resourceType="Unspecified" preCondition="integratedMode" />

Via IIS:

* Open IIS, Site, Handler Mappings
* Add Managed Handler

    Request Path: *.json<br/>
    Type: JsonHTTPHandler.JSONHandler<br/>
    Name: Json<br/>

* Save
