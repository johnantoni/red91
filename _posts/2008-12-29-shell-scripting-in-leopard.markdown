---
layout: post
title: Executable Shell Scripts in Leopard
category: apple
---

Running shell scripts as executables requires two things.

First add this as the first line of your script file

    #!/bin/bash

Then save and set it as an executable

    chmod +x myscript.sh

Then run it in your current path with

    ./myscript.sh

Job done.
