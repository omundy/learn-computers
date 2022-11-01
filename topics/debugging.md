<!-- paginate: true -->

<a class="back-icon" href="../index.html"><img width="30" src="../assets/img/icons/arrow-left-short.svg"></a>

<img width="375" src="../assets/img/banner/banner-debugging.png">

# debugging

How to approach and overcome computer and coding issues

<span class="slides-small"><a href="../slides/debugging.html">slides</a> | <a href="../www/debugging.html">HTML</a></span>

<!--
Presentation comments ...
-->


---


### Contents

1. [Introduction](#introduction)
1. [About](#about)




---


## Introduction

Review the following sections and perform the activities on your own or with your group.

Perform the task(s) when you see this 👉  emoji

<details>
<summary>Learning Objectives</summary>

Students who complete the following will be able to:

- Explain why debugging is important
- List methods for general debugging applicable to any system or code language
- Use different methods to find and fix potential errors

</details>




---

## About

<div class="twocolumn">
<div class="col">

You completed your final project and turned it in. The last thing you want to do right now is think about it.

Six months later, you are in a job interview and they ask to see your work.

The problem is, you've slept since then, nothing is live anymore, and you didn't document it.


</div>
<div class="col">

<img width="375" src="../assets/img/debugging/debugging-meme.jpg">

</div>
</div>



---

## Computer Benchmarks

A computer benchmarking program works by running a series of specific tests to measure performance, ultimately giving a score that allows comparison across machines.

### Geekbench

Geekbench is a [cross-platform](https://www.geekbench.com/download/) benchmark tool that can measure and track your device's CPU and GPU performance. Their website lets you compare your score to other machines ([Mac](http://browser.geekbench.com/mac-benchmarks)).






### Sysbench

[sysbench](https://github.com/akopytov/sysbench) is a command line multi-threaded benchmark tool primarily for MacOS and Linux. It can be used for database, filesystem-level, CPU, memory access, and many other benchmarks.

```bash
# install with homebrew
brew install sysbench
# run a cpu test
sysbench cpu run
# run a memory test
sysbench memory run
```



### Phoronix Test Suite

The [Phoronix Test Suite](https://www.phoronix-test-suite.com/) is an open source  licensed under the GNU GPLv3 free software license. The Phoronix Test Suite can be used for personal or professional purposes free of charge. Patches to the Phoronix Test Suite are welcome via GitHub.

Compare results on https://openbenchmarking.org


```bash
# install with homebrew
brew install phoronix-test-suite
# this install into
which phoronix-test-suite
```

Then to test, [download the repository](https://github.com/phoronix-test-suite/phoronix-test-suite)

> "To run the Phoronix Test Suite locally you must first change directories to phoronix-test-suite/ or install the program using the install-sh script."

```bash
# download and then move into directory
cd /Users/owenmundy/Documents/_code/phoronix-test-suite
# get system info
phoronix-test-suite system-info
# list recommended tests
phoronix-test-suite list-recommended-tests
# test
phoronix-test-suite benchmark chess
```



### Activity

1. Install
2. Compare with a partner
