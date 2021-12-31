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

## References

1. [Start a Web Server With One Terminal Command on OS X](https://css-tricks.com/snippets/html/start-a-web-server-with-one-terminal-command-on-os-x/), 2015
