---
layout: post
title: ArchLinux NAS Box
category: linux
---

To make the system shutdown when you press the power button, add the acpid package.

    pacman -S acpid

Then add it to the DAEMONS array in **rc.conf**

    DAEMONS = (...... acpid)

Then create a file for the event,

    sudo nano /etc/acpi/events/power

With...

    # /etc/acpi/events/power
    # This is called when the user presses the power button
    
    event=button/power (PWR.||PBTN)
    action=/sbin/poweroff

##### ACPI Shutdown

Now add these two lines to the end of your kernel load in /boot/grub/menu.lst

    acpi=on acpi=power-off

What this extra bit will do is force the machine to poweroff completely on shutdown, rather than halting with the power still running.
