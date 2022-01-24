<!-- paginate: true -->

<a class="back-icon" href="../index.html"><img width="30" src="../assets/img/icons/arrow-left-short.svg"></a>

<img width="375" src="../assets/img/banner/banner-web-servers.png">

# Web Servers

An overview of servers, development servers, DNS, CDNs, FTP, and more.

[omundy/dig245-critical-web-design/topics/servers/web-servers.md](https://github.com/omundy/dig245-critical-web-design/blob/main/topics/servers/web-servers.md)

<!--
Presentation comments ...
-->



---

## Development web servers

For temporary use. See next slide...


---


### Python http.server

How to use Python [http.server](https://docs.python.org/3.9/library/http.server.html#module-http.server) to run a server on your computer (see also [PHP or node](https://css-tricks.com/snippets/html/start-a-web-server-with-one-terminal-command-on-os-x/)).

1. In Terminal, change `cd` to the location to run the server. This directory should exist.

```bash
# location of a Git repository
cd /Users/owenmundy/Documents/GitHub/<your-repository-name>
# or your the Sites directory in your home folder
cd ~/Sites/
```

2. Start the Python server, where `7777` is the port you wish to use:

```bash
python -m http.server 7777 # Python 3 version (try this first)
python -m SimpleHTTPServer 7777 # Python 2.7 (older)
```

3. Go to http://0.0.0.0:7777 in your web browser. To stop the server use <kbd>Ctl</kbd> + <kbd>C</kbd>









---

## Linux web servers

Following are notes applicable to many Linux servers.


---


### Linux: Set the hostname

View/edit the [hostname](https://www.commandlinux.com/man-page/man1/hostname.1.html) on Linux (tested in on Debian Jessie and Raspberry Pi OS).

```bash
hostname            # view name of the machine on the network
hostnamectl         # view hostname, etc.
cat /etc/hostname   # view the hostname directly
cat /etc/hosts      # view the hosts file, that map names to IP addresses
```

To change the hostname, edit the file, or use [`hostnamectl`](https://man7.org/linux/man-pages/man1/hostnamectl.1.html)

```bash
sudo nano /etc/hostname   # view the hostname directly
hostnamectl set-hostname chip1  # set the hostname
sudo reboot                 # reboot to take effect
```

- [Debian Linux: Change Hostname / Computer Name Permanently](https://www.cyberciti.biz/faq/debian-change-hostname-permanently/)
- [Pi WebServer Project](https://www.slicethepi.co.uk/pi_server/)
- [Server World > Set Hostname](https://www.server-world.info/en/note?os=Debian_8&p=hostname)






---

## References

1. [Start a Web Server With One Terminal Command on OS X](https://css-tricks.com/snippets/html/start-a-web-server-with-one-terminal-command-on-os-x/), 2015
