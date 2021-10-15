
[<](../README.md)

<img width="375" src="assets/img/banner/banner-networks.png">

# Networks

Description of topic

### Contents

1. [Introduction](#introduction)
1. [IP Addresses](#ip-addresses) `5 min`
1. [Domain Names](#domain-names) `5 min`
1. [Basic Network Commands](#basic-network-commands) `5 min`
1. [Advanced Network Tools](#advanced-network-tools) `5 min`
1. [Keep practicing](#keep-practicing)
1. [References](#references)


## Introduction

Review the following sections and perform the activities on your own or with your group.

<details>
<summary>Learning Objectives</summary>

Students who complete the following will be able to:

- Describe why the Domain Name System exists and what it does.
- List important concepts (IP Addresses, domain names, TCP/IP, etc.) essential to the the modern internet.
- Explain common situations when you might use `whois` or `ping` when doing web development.
- Demonstrate how to use network-specific command line tools.

</details>

<details>
<summary>Preparation</summary>

Complete the following to prepare for this module

- [Command Line Crash Course](topics-command-line-crash-course.md)

</details>





<a href="assets/img/networks/network-centralized.png"><img src="assets/img/networks/network-centralized.png" height="430"></a> <a href="assets/img/networks/network-decentralized.png"><img src="assets/img/networks/network-decentralized.png" height="430"></a> <a href="assets/img/networks/network-distributed.png"><img src="assets/img/networks/network-distributed.png" height="430"></a>

<sup>A centralized, decentralized, and distributed network</sup>





## IP Addresses

An [Internet Protocol (IP) address](https://en.wikipedia.org/wiki/IP_address) is a numerical label used to identify and connect devices to the Internet. Assigned by your Internet Service Provider (ISP), it is required before your device can send data through the network.

On Google, ["what is my ip"](https://www.google.com/search?q=what+is+my+IP) will yield a number that looks like this:

```
24.224.66.226
```

IP Version 4 (IPv4) defines a dot-decimal number with four sections, each between 0-255. Noteworthy examples:

```
1.1.1.1        => Cloudflare DNS server
8.8.8.8        => Google DNS server
192.168.1.1    => Default address to configure your home internet router
255.255.255.0  => Subnet mask used by TCP/IP to know if a host is local or remote.
```

Surprisingly, IPv4's 2<sup>32</sup> addresses was not enough for a constantly growing Internet and a new IPv6 standard was released in 1998 to increase the number to 2<sup>128</sup> ([how to say this number](https://whatis.techtarget.com/feature/IPv6-addresses-how-many-is-that-in-numbers))!

```
IPv4 => 4,294,967,296
IPv6 => 340,282,366,920,938,000,000,000,000,000,000,000,000
```








## Domain Names

A domain name is a human-readable name for an IP address or web host. Domain names are much easier to recall than the string of numbers in an IP. A domain name must be **resolved** to the IP address of the destination via the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) (DNS) to reach data on a web host.

1. A user types a domain name into a web browser
1. The browser performs a Domain Name Service (DNS) query to get the IP address of the destination
1. The browser can then fetch the data from the server using the IP






## Basic Network Commands

The following network commands should run via the [Command Line Interface](https://en.wikipedia.org/wiki/Command-line_interface) (CLI) on any Linux, Mac, or Windows (🤞) command line. These are essential for basic web development.


### whois

> Who owns this domain?

The whois system contains records about domain ownership. The [Internet Corporation for Assigned Names and Numbers](https://www.icann.org/) (ICANN) regulates domain name registration, but the records are held by many companies, known as registries. Anyone can query the whois list receive details like:

- **registrant** - the legal domain owner and their contact information
- **registrar** - the company the registrant used to create the registration
- **dates** of the registration, including the first, most recent, and expiration date
- **nameservers** of the host to which the domain name points

Try a whois search with the following names, and at least one additional domain. What do you notice?

```bash
whois davidson.edu
whois cnn.com
whois owenmundy.com
```






### ping

> How fast is my connection this domain?

`ping` (Packet INternet Groper) checks network connectivity and latency (the time it takes data to move across network in milliseconds (ms)) between two nodes. It is a simple way to check your device's connection to the outside world. You can use ping with a domain name or IP address.

Ping Google's domain name. By default, ping will continue executing until you use `Ctrl+C` to interrupt the execution.

```bash
ping google.com
```

Ping Google's DNS server 5 times and then stop

```bash
ping -c 5 8.8.8.8
```

Run `ping` with different domains to compare speeds. What did you notice?





### traceroute

> What is the path to a domain?

The `traceroute` command is also useful for network troubleshooting. It provides latency information for and identifies each node along the path to the target destination. Trace the path your packets take to a destination:

```bash
traceroute google.com
```

By default, traceroute uses [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) ports which are blocked by some firewalls. If your traceroute "hangs", try it with the [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) port

```bash
traceroute -I google.com

```




### curl

> Save a file from the internet

[curl](https://en.wikipedia.org/wiki/CURL) (Client URL) is used to download network files via CLI. To fetch a file and display it in the shell:

```bash
curl https://davidson.edu
```

To fetch a file and *save it on your computer*

```bash
curl -o index.html https://davidson.edu
```





### SSH

Secure SHell is perhaps the most invaluable tool for accessing data on other computers on the network. SSH uses [public-key cryptography](http://en.wikipedia.org/wiki/Public-key_cryptography) to secure data. When you "SSH" into a remote computer you can execute all commands just as you do on your local machine. Common scenarios where you would use SSH:

1. To edit files on a web server
1. To edit contents of a database on a server
1. To pull changes to a Git repository on your web server

If you know your username and password, and are allowed to connect via SSH to your host you can do it like this. The first time you connect you will be prompted to trust the secure key on the remote host and [enter your password](#about-passwords).

```bash
ssh  <username>@<servername>
```

You could then edit a file using the Nano text editor. This command will open a file to edit (creating the file if it doesn't currently exist):

```bash
nano index.html
```

Use `Ctl+o` to save and `Ctl+x` to exit nano.










## Advanced Network Tools


### About passwords

When you type passwords the command line will not display your input. If you make a mistake just press delete a few times and start over. To view all your network activity in real time, run the following. Use `Ctl+C` to exit:



### SFTP

SFTP (Secure File Transfer Protocol) allows you to send files across a network with the command line. It is usually more convenient to use a GUI like Cyberduck. To create an SFTP connection type the following.

```bash
sftp <username>@<servername>
```

To "put" a file simple type: `put <local_filename>` at the `sftp>` prompt like so:

```bash
sftp> put hello.jpg
```




### dig

> Just give me the nameservers

`dig` (Domain Information Groper) is used in DNS lookup to query the nameservers, or troubleshoot related DNS issues. It returns info on the A record by default.

```bash
dig davidson.edu
```

If you want all records including MX (email) and NS (nameservers):

```bash
dig google.com ANY
```







### ifconfig

The InterFace CONFIGurator is used to inspect, configure, and/or enable/disable network interfaces.

Print your [MAC](https://en.wikipedia.org/wiki/MAC_address) (Media Access Control) address. This is a unique identifier assigned to each network interface controller on your system (e.g. ethernet, WiFi, and bluetooth).

```bash
ifconfig | grep ether
```

Print your IP address

```bash
ipconfig getifaddr en0
```

Note, `ifconfig` reports your device's address ***on your subnet***, and looks something like: `192.168.*.*`. The IP address looking at your device from the internet can be found from an external source.

```bash
ifconfig en0
```






#### Netstat

[netstat](https://en.wikipedia.org/wiki/Netstat) (NETwork STATistics) displays information about TCP, routing tables, and all virtual connections to/from your computer. [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) is the set of communications protocols used to transfer data over the Internet and similar computer networks. The current protocols are [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) and [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) (IP).

To view a list of all the network interfaces (a.k.a. "[sockets](https://en.wikipedia.org/wiki/Network_socket)") on your machine:

```bash
netstat -at
```
View statistics for network interfaces
```bash
netstat -i
```




#### Tcpdump

[tcpdump](https://www.tcpdump.org/) is a network package analyzer. It can be used to monitor network activity or even capture data packets.

To prevent others from viewing your network activity without permission (a.k.a. a [Man in the Middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)) this command must be run with `sudo` (Super User DO) permission [using your password](#about-passwords).

```bash
sudo tcpdump -nS
```




#### Wireshark

Wireshark can inspect network packets with a GUI. Mac users can install it using this script (via [homebrew](https://formulae.brew.sh/formula/wireshark))

```bash
brew install --cask wireshark
```
Windows users should install from the [Wireshark](https://www.wireshark.org/) website.



<a href="assets/img/networks/network-wireshark.png"><img src="assets/img/networks/network-wireshark.png"></a>
<sup>Wireshark showing incoming/outgoing data packets</sup>



## Keep practicing

- [mac network commands cheat sheet](https://gree2.github.io/mac/2015/07/18/mac-network-commands-cheat-sheet)
- [Linux Networking Commands with Examples](https://mindmajix.com/linux-networking-commands-best-examples)

## References

- [Why Your Home Router is 192.168.1.1](https://www.ghacks.net/2011/04/29/why-your-home-router-is-192-168-1-1/)
- Microsoft [Understand TCP/IP addressing and subnetting basics](https://docs.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting)
- Cloudflare [What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/)
