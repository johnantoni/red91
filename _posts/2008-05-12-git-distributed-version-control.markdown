---
layout: post
title: GIT Distributed Version Control 
category: git
---

##### Install

    sudo aptitude install git-core

##### Basic Commands

    git init                   ...init repository
    git add .                  ...add everything in dir to repository
    git commit -a -m 'update'  ...add + commit changes
    git diff                   ...show changes since last commit
    
    git add [file]             ...add file
    git rm [file]              ...remove file
    git mv [file]              ...move file

##### Mirror Git Repository

    rsync -azvCL --delete --progress 
       -e "ssh -i /home/[user]/.ssh/[mykey]" .git/* 
    [user]@[user].strongspace.com:/home/[user]/[project]/.git/

##### Ignore Whitespace

    git-apply --whitespace=nowarn
