
[<](README.md)

<img width="300" src="assets/img/banner-data.png">

# What is Data?

Learn how computers store data, common data types, and how to use them

### Contents

1. [Learning Objectives](#learning-objectives)
1. [Introduction](#introduction) `5 min`

1. [File encoding](#file-encoding) `5 min`
1. [Common Data Types](#common-data-types)  `5 min`

1. [Discussion](#discussion) `5 min`
1. [Keep practicing](#keep-practicing)
1. [References](#references)

## Learning Objectives

Students who complete this lesson will be able to:

- Recall how computers store and use binary data
- Organize data storage amounts by their respective sizes
- List common data types and recall examples of each
- Explain what a collection is and provide examples
- Compare text vs. binary-encoded files
- Use appropriate formats to create data representations of real world examples


## Introduction

Before continuing, complete the [command line crash course](topics-command-line-crash-course.md)





### notes



- Use appropriate data formats to create representations of objects, things, in the world
	- CSV, JSON, etc.


- Next steps
	- data cleaning








### Bits and Bytes

Computers don't actually store text (letters and numbers) or pictures. The only thing a computer can store are bits.

A bit is considered to be the smallest unit of data and can have only two different values: `1` or `0`. You could also think of this **binary** relationship as `true` | `false` or `yes` | `no`. Since computers use electricity to store data, a bit is actually a blip of electricity that is either **on** `1` or **off** `0`.

Since computers are storing only 1s and 0s, the binary sequences must be converted to text using an encoding scheme.



01100010 01101001 01110100 01110011
b        i        t        s



n this encoding, 01100010 stands for the letter "b", 01101001 for the letter "i", 01110100 stands for "t" and 01110011 for "s". A certain sequence of bits stands for a letter and a letter stands for a certain sequence of bits. If you can keep this in your head for 26 letters or are really fast with looking stuff up in a table, you could read bits like a book.

The above encoding scheme happens to be ASCII. A string of 1s and 0s is broken down into parts of eight bit each (a byte for short). The ASCII encoding specifies a table translating bytes into human readable letters. Here's a short excerpt of that table:




👉 **Try it out**

Enter the following text examples into this [BitCounter](https://lingojam.com/BitCounter) and [ByteCounter](https://lingojam.com/ByteCounter). *Try to guess the outcomes first!*

1. How many bits? How many bytes? `a`
1. How many bits? How many bytes? `abc`
1. How many bits? How many bytes? `hello world!`
1. How many bits? How many bytes? `😂`




http://www.unit-conversion.info/texttools/convert-text-to-binary/







### Computers are binary machines

All files on computers are stored as 1's and 0's. Images, text files, music, software, everything—They are all 0's and 1's. The only difference is that they are interpreted differently depending upon what program can open them.

<img src="assets/img/cat-binary.png">

The above shows a photo of a [cat](assets/img/cat.png) (on the left) displayed by an application that can read and render the image data as pixels on a screen, and (right) the binary representation of the file's data.

👉 **Try it out** on the command line with [hexdump](https://en.wikipedia.org/wiki/Hex_dump). Save the cat image to your computer and run this command:

```bash
hexdump -C /path/to/your/cat.png
```








## File encoding

All computer files encode data in one of two different formats—binary or text.

### Binary-encoded files

- Stored as bits (binary 1s and 0s) and may include multiple types of data in the same file (e.g video and audio).
- More efficient to store and access but can easily become corrupted.
- Examples `.jpg`, `.pdf`, and `.mp4`.


### Text-encoded files

- Also stored as bits, but represented by actual text characters.
- You can open text files in many types of editors.
- Examples `.txt`, `.html`, and `.cs`.

File encoding [is not the same as](https://kunststube.net/encoding/) character encoding.

If you can open ***and read*** a file in a plain text editor (e.g. [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) on Windows, or [TextEdit](https://en.wikipedia.org/wiki/TextEdit) on Mac) it is a text file. However, if the content of the file appears as mostly garbled text, it is a binary file.

<img src="assets/img/files-binary.png"><br>
<sub>A `.png` file opened in TextEdit</sub>


### Examine filetypes in plain text

1. Find examples of each on your own computers  
1. Open them in a plain text editor to verify
1. What clues can you see in the binary formats to tell you about the filetype?









## Common Data Types

Thus, a boolean type requires less memory to store than a string type. The string `"false"` contains 5 characters and thus requires 5 bytes. Zero


A data type defines the kind of data that is stored. This is important for many reasons:






Here are some common types and examples of each:

- Booleans (`true` and `false`)
- Numbers (integers and floats)
- Strings
- Collections

Note: A type is different than it's value. `true` is the value of the type `Boolean`.



## Discussion

Discuss the following:

1. Give an example of each of the types above
2. What type is this? `"3.14"`





## Data Collections

- Explain what a collection (data points, arrays, objects) is and give examples

- Arrays
- Objects
- Serialized vs. Unserialized data



e.g. A time series is a collection of observations made sequentially in time.






## Hierarchical Types

- json, xml, etc.






## Discussion




## References

- [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](https://kunststube.net/encoding/)
- [When bandwidth and storage size matters: Bits vs. bytes](https://www.redhat.com/sysadmin/bits-vs-bytes)
