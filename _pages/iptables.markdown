---
layout: page
title: Ubuntu Scripts
---

# Linux Scripts

##### BASH Script

...Create with

    nano ~/.bashrc

...Copy + Paste

    export PS1='\[\033[0;35m\]\h\[\033[0;33m\] \w\[\033[00m\]: '
    alias free="free -m"
    alias update="sudo aptitude update"
    alias install="sudo aptitude install"
    alias upgrade="sudo aptitude safe-upgrade"
    alias remove="sudo aptitude remove"
    alias clean="sudo aptitude clean"

...Activate with

    source ~/.bashrc

##### Make A Script Executable

    sudo chmod +x [file.sh]

##### Linux IPTables Rules

(using port 22 for ssh)

    *filter
    
    
    #  Allows all loopback (lo0) traffic and drop all traffic to 127/8 that doesn't use lo0
    -A INPUT -i lo -j ACCEPT
    -A INPUT -i ! lo -d 127.0.0.0/8 -j REJECT
    
    
    #  Accepts all established inbound connections
    -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
    
    
    #  Allows all outbound traffic
    #  You can modify this to only allow certain traffic
    -A OUTPUT -j ACCEPT
    
    
    # Allows HTTP and HTTPS connections from anywhere (the normal ports for websites)
    -A INPUT -p tcp --dport 80 -j ACCEPT
    -A INPUT -p tcp --dport 443 -j ACCEPT
    
    
    #  Allows SSH connections
    #
    # THE -dport NUMBER IS THE SAME ONE YOU SET UP IN THE SSHD_CONFIG FILE
    #
    -A INPUT -p tcp -m state --state NEW --dport 22 -j ACCEPT
    
    
    # Allow ping
    -A INPUT -p icmp -m icmp --icmp-type 8 -j ACCEPT
    
    
    # log iptables denied calls
    -A INPUT -m limit --limit 5/min -j LOG --log-prefix "iptables denied: " --log-level 7
    
    
    # Reject all other inbound - default deny unless explicitly allowed policy
    -A INPUT -j REJECT
    -A FORWARD -j REJECT
    
    COMMIT

##### DataBase Backup Script

Simple script to backup, datestamp, gzip and transmit it to your strongspace store.

Store in /var/www/apps/myapp/dump-myapp.sh

    #!/bin/bash
    # backup db and transfer to strongspace store
    
    #parameters
    app=myapp
    remote_user=johnsmith
    pass=mypassword
    key=mykeyfile

    #app settings
    dir=/var/www/apps/${app}/sql
    
    #remote host settings (strongspace)
    keyfile=/root/.ssh/${key}
    remote_ip=${remote_user}.strongspace.com
    remote_location=/home/${remote_user}/db
    
    #generate filename and append datestamp
    datestamp=`date '+%m%d%y'`
    file=${app}_backup_${datestamp}
    
    #dump database
    cd ${dir}; sudo /usr/bin/mysqldump --opt -u root -p${pass} ${app}_production > ${file}.sql
    
    #gzip dump
    sudo gzip -f -q ${dir}/${file}.sql
    
    #send gzipped dump to remote host
    sudo scp -i ${keyfile} ${dir}/${file}.sql.gz ${remote_user}@${remote_ip}:${remote_location}

Open CRON;

    crontab -e

Then add this to backup db;

    #backup db at midnight each night
    0 0 * * * (sh /var/www/apps/myapp/dump-myapp.sh) > /dev/null 2>&1
    

##### Rails App Restart Script

Simple script to restart your rails app,

Store in /var/www/apps/myapp/start-myapp.sh

    #!/bin/bash
    # restart rails app
    
    app=myapp
        
    cd /var/www/apps/${app}
    rake log:clear
    rake db:sessions:clear
    chown root public
    chown root log
    chown root tmp
    chmod -R a+rw public
    chmod 775 public/cache
    thin stop -C thin_${app}.yml
    thin start -C thin_${app}.yml

Open CRON;

    crontab -e

And add this to restart app on reboot;

    #restart app on reboot
    @reboot (sh /var/www/apps/myapp/start-myapp.sh) > /dev/null 2>&1

##### WGET from FTP Site

    #!/bin/bash
    # mirror remote ftp directory with wget

    # parameters    
    ftp_host=mysite.com
    ftp_user=johnsmith
    ftp_pass=mypassword
    grab_dir=/httpdocs
    
    wget -r -m --follow-ftp ftp://${ftp_user}:${ftp_pass}@${ftp_host}${grab_dir}

