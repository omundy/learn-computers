<!-- paginate: true -->

<a class="back-icon" href="../index.html"><img width="30" src="../assets/img/icons/arrow-left-short.svg"></a>

<img width="375" src="../assets/img/banner/banner-data-cleaning.png">

# Data Cleaning

Tips for cleaning data

<span class="slides-small"><a href="../slides/data-cleaning.html">slides</a> | <a href="../topics/data-cleaning.md">md</a></span>

<!--
Presentation comments ...
-->


---


### Contents

1. [Introduction](#introduction)
1. [About Data Cleaning](#about-data-cleaning) `5 min`
1. [Remove formatting](#remove-formatting) `5 min`
1. [Preserve tabular data](#preserve-tabular-data) `5 min`
1. [Type conversion](#type-conversion) `5 min`
1. [Find and replace with RegEx](#find-and-replace-with-regex) `5 min`
1. [Keep practicing](#keep-practicing)
1. [References](#references)


---


## Introduction

Review the following sections and perform the activities on your own or with your group.

Perform the task(s) when you see this 👉  emoji

<details>
<summary>Learning Objectives</summary>

Students who complete the following will be able to:

- Describe data cleaning and its benefits
- Compare data before and after cleaning
- List methods for data cleaning
- Improve and clean data for visualization or other use

</details>

<details>
<summary>Preparation</summary>

Complete the following to prepare for this module

- [Command Line Crash Course](command-line-crash-course.md)
- [Learn Computing: Data Basics](data-basics.md)

</details>


---

## About Data Cleaning

Data cleaning is a process that involves

1. Identifying unfinished, unreliable, inaccurate, or non-relevant parts in a dataset, table, or database
1. Removing or correcting the dirty or inaccurate data

Data cleaning can be performed via scripting or interactively with data cleaning tools.




---

## Remove whitespace

[Whitespace characters](https://en.wikipedia.org/wiki/Whitespace_character) (tabs, spaces, line breaks) are essential to make text documents human-readable, but if you have too many they can really clutter up a dataset.

```bash
      this  is                      some
			 really       dirty
	 data       !
```

Replacing all the spaces, tabs, and line breaks ("carriage returns") in the example above by hand would be a lot of work in a big dataset. However, you can use simple find/replace tools in Atom to make short work of this.


---

👉 **Try it out**

1. Copy the text in the example above into Atom
1. Try to remove the three types of whitespace from the text using **only** the find / replace tools.

<details>
<summary>Hint</summary>

<img width="500" src="../assets/img/data-cleaning/find-whitespace.png">

- Whitespace is invisible, but you can still copy / paste the characters into find / replace.
- To replace all the extra spaces, search for two spaces and replace with a single space.

</details>




---

## Remove formatting

When getting data for a project, the goal is almost always to be able to reuse the data somehow. Usually this means pasting into a plain text document (e.g. `csv` or `json`), spreadsheet, or database.

Perhaps the simplest way to get data is to copy and paste. If you copy any [formatted](https://www.nytimes.com/2021/08/31/technology/facebook-accenture-content-moderation.html) (a.k.a. "rich") text from the web or a document, then that formatting will be applied if you paste it into a document that supports the formatting.

<img width="400" src="../assets/img/data-cleaning/copy-paste.png"> <img width="600" src="../assets/img/data-cleaning/copy-paste-formatting.png">

---

To remove rich text formatting from copied text either

**Use plain text**:

Immediately paste the text into a plain text document, then select all and copy the unformatted text.

**Use a supported app**:

Edit > Paste without formatting, or (Google Sheets) Edit > Paste special > Paste values only







---

## Preserve tabular data

Many times you will want to paste tabular data into a spreadsheet to be able to sort or further change the data using the columns. While you can paste *tab-separated* data and preserve the columns and rows, *comma-separated* data will not automatically be recognized as tabular. Two options to correct this issue:

<img width="600" src="../assets/img/data-cleaning/find-replace-copy-pasted3.png">



---

### Option 1: Save as CSV

If the text is comma-separated...

1. Copy / paste the text into a new plain text file.
1. Save the file as a `.CSV`
1. Open the in Excel or Google Sheets.


---

### Option 2: Find and Replace with a tab character

1. Copy / paste the text into a new plain text file in [Atom](https://atom.io/).
2. Use Find to search for the delimiter

<img width="500" src="../assets/img/data-cleaning/find-replace-tab-before.png">

3. Type a tab character and copy and paste it into the replace field.

Copy and paste a tab character into the replace field.

<img width="500" src="../assets/img/data-cleaning/find-replace-tab.png">

---

4. Click Replace All

<img width="500" src="../assets/img/data-cleaning/find-replace-tab-after.png">

5. Copy / paste the now *tab-delimited* data into your spreadsheet, which will recognize that we are pasting tab-separated content and add each field to its own column.

<img width="500" src="../assets/img/data-cleaning/find-replace-copy-pasted4.png">



---

👉 **Try it out** - Try to paste some tabular data from

- [this page](https://machinelearningmastery.com/time-series-datasets-for-machine-learning/) into a sheet and preserve the column structure.
- [these advertising categories](https://developers.google.com/adwords/api/docs/appendix/verticals) so that all the tiers are represented in their own columns.





---

## Type conversion

Once you import your data into a spreadsheet it will likely be treated as plain text. In order to sort, present, or chart the data you may need to use the spreadsheet application to recognize the data type.

For example, once a column is set as a date format you can select how you wish that date to be displayed:

<img width="200" src="../assets/img/data-cleaning/data-type-date1.png"> <img width="200" src="../assets/img/data-cleaning/data-type-date2.png">






---

## Find and replace with RegEx

Sometimes you may need to use something more powerful to clean your data. This example uses Regular Expressions to search for specific instances of text.


👉 **Try it out**

Use RegEx function with find/replace in a text editor to clean these [stock symbols](datasets/nasdaqtraded-20210831.txt)

1. Select all, copy, and paste them into a new document in Atom.
2. Searching for all the pipes `|` shows some of what we do and don't want.

---

3. Enabled Regular Expressions and Case Sensitive in Atom
4. Search for each of the following
 	1. `[A-Z]` - Any capitalized letters
	1. `[A-Z]{1,5}` - Any capitalized letters, one to five characters long
 	1. `^[A-Z]{1,5}` - Any capitalized letters, one to five characters long, at the start of a string
 	1. `(^[A-Z]{1,5})` - Wrap this match in a capture group
	1. `(^[A-Z]{1,5})+(.*)` - Add a second group that matches any number of any character
5. Add to the replace `$1` to copy the result of the first capture group


---


6. And Find All / Replace All

We could make these stock symbols into a Javascript array using

1. Find `(^[A-Z]{1,5})` and Replace: `'$1',`
1. Adding `const arr = [` to the beginning and `];` to the end














---


## More Regex examples




Also see this converter: https://www.convertcsv.com/csv-to-json.htm




---

#### Search for a string

Replace line 1 with line 2
```bash
https://code.jquery.com/jquery-3.5.1.min.js
https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
```

With this find / replace
```bash
http(.*)jquery(.*).js
https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
```


---

#### Remove and replace characters

Replace characters in line 1 with line 2
```bash
javascript-1/1-1-variables/
topics/variables/
```

With this find / replace
```bash
javascript-1/([0-9])-([0-9])-
topics/
```

---

#### Remove and replace characters

Remove `""` and replace `-` characters in line 1
```bash
"1-03"
1,03
```

With this find / replace
```bash
"(.*)-(.*)",
$1, $2,
```

<a href="../assets/img/data-cleaning/find-regex-date.png" target="_blank"><img width="500" src="../assets/img/data-cleaning/find-regex-date.png"></a>

---

#### Swap the order

Change line 1 > line 2
```bash
<p>First / Second</p>
<p>Second | First</p>
```

With this find / replace
```bash
<p>(.*) / (.*)</p>
<p>$2 | $1</p>
```

---

#### Prepare a table for Javascript

Replace all the tabs
```bash
adjective	color	animal
sad	red	dog
furtive	green	cat
cautious	blue	rabbit
happy		rooster
adventurous		gazelle
		aardvark
		sea lion
```

With this find / replace (the tab is hidden) and then add additional syntax and copy / paste.
```bash

', '
```


```js
let options = {
    adjective: ['sad', 'furtive', 'cautious', 'happy', 'adventurous'],
    color: ['red', 'green', 'blue'],
    animal: ['dog', 'cat', 'rabbit', 'rooster', 'gazelle', 'aardvark', 'sea lion']
}
```


---

#### Metacharacters

Use a backslash to escape <a href="https://en.wikipedia.org/wiki/Metacharacter#:~:text=A%20metacharacter%20is%20a%20character,regular%20expression%20(regex)%20engine." target="_blank">metacharacters</a>. To match `(123)` not `123`
```bash
\(123\)
```


Change line 1 > line 2
```bash
<p>[slides](../slides/data-cleaning.html)</p>
<p><a href="../slides/data-cleaning.html">slides</a></p>
```

With this find / replace
```bash
<p>\[slides\]\(../slides/(.*)\)</p>
<p><a href="../slides/$1">slides</a></p>
```
















---

## Other issues

Other issues that aren't covered here:

- Spelling and grammar issues, which make searching, find / replace, and any other actions that rely on string identification difficult.







---

## Keep practicing

- Learn Computing: Data Basics [slides](../slides/data-basics.html) | [markdown](../topics/data-basics.md)
- Learn Computing: Data Types [slides](../slides/data-types.html) | [markdown](../topics/data-types.md)
- Learn Computing: Data Cleaning [slides](../slides/data-cleaning.html) | [markdown](../topics/data-cleaning.md)
- Learn Computing: APIs [slides](../slides/data-apis.html) | [markdown](../topics/data-apis.md)

---

## References

- Towards Data Science [The Ultimate Guide to Data Cleaning](https://towardsdatascience.com/the-ultimate-guide-to-data-cleaning-3969843991d4)
- Tableau [Guide To Data Cleaning: Definition, Benefits, Components, And How To Clean Your Data](https://www.tableau.com/learn/articles/what-is-data-cleaning)
