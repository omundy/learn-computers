<!-- paginate: true -->

<a class="back-icon" href="../index.html"><img width="30" src="../assets/img/icons/arrow-left-short.svg"></a>

<img width="375" src="../assets/img/banner/banner-web-development.png">

# Web Development




---

## Web Development Environment

Set up your web development environment using this lesson:

[https://github.com/omundy/dig245-critical-web-design/blob/main/topics/development/environment.md](https://github.com/omundy/dig245-critical-web-design/blob/main/topics/development/environment.md)






---

## About websites

> Both everyday and exotic, public and private, autonomous and commercial, the internet is a chaotic, diverse and crowded form of contemporary public space. — Rachel Greene, "Internet Art" (2004)

This quote summarizes the internet really well, but it is missing the technical description that reflects the vast number of options one has for building a website or web application. The follow attempts to do that.




---

## Definitions

- **website** any collection of files at a particular web address or **url** (e.g. https://google.com)
- **web application** the files and code that provide functionality
- **publish** to make a website **live**, or accessible to its intended audience.
- **deploy** to update the files and information of a website.
- **static** files or an entire website that do not change based on some state
- **dynamic** when a website displays different content (e.g. you are logged-in, you searched for a)
- **client** the browser or mobile application that displays the website
- **server** the computer that **hosts** the website files, application, database, etc.
- **data store** the location of data could be a database, flat files (a collection of text documents), or various others types of storage software


---

## Static vs. Dynamic websites

- Static websites are made of files that do not change.
- Web pages from **dynamic** sites are built by an application server when users request a page. They often may use a database or other dynamic content (APIs, other server-side software, etc.) for their functionality or content.



---

## What is a stack?

- A website or app's **stack** describes the technologies and resources that make the site work.
- The stack often (but not always) includes 1) the server OS 2) the server software 3) programming languages (client and server side) that make the site dynamic and 4) the data store, though they are usually listed in an orde that makes them phonetically pronouncable.


Name | Frontend | Backend | Database | Server | Example
--- | --- | --- | --- | ---  | ---
LAMP | HTML/CSS/JS | PHP | MySQL | Apache/Linux | Wordpress
[MERN](https://www.mongodb.com/mern-stack) | React | Node/Express | Mongo | Apache or Nginx |
[MEAN](https://www.mongodb.com/mean-stack) | Angular | Node/Express | Mongo | ^ |
MEVN | Vue.js | Node/Express | Mongo | ^ |

See also: [The Modern Application Stack – Part 1: Introducing The MEAN Stack](https://www.mongodb.com/blog/post/the-modern-application-stack-part-1-introducing-the-mean-stack)

---

## Jamstacks

- Primarily built using static assets, these sites are usually created using a static site generator (SSG)
- May contain Javascript for basic client-side functionality
- Examples: Github Pages, Jekyl

See also: [The Jamstack Book: Beyond static sites with JavaScript, APIs, and markup](https://www.amazon.com/Jamstack-Book-Beyond-static-JavaScript/dp/1617298883/ref=sr_1_1?Adv-Srch-Books-Submit.x=0&Adv-Srch-Books-Submit.y=0&qid=1652828917&refinements=p_66%3A9781617298882&s=books&sr=1-1&unfiltered=1)
