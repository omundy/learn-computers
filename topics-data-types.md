
[<](README.md)

<img width="375" src="assets/img/banner-data-types.png">

# Data Types

Learn about specific data types used in programming, visualization, gaming, etc.

### Contents

1. [Introduction](#introduction)
1. [About Data Types](#common-data-types) `5 min`
1. [Primitive Data Types](#common-data-types) `5 min`
1. [Data Collections](#data-collections) `5 min`
1. [Discussion](#discussion) `5 min`
1. [Keep practicing](#keep-practicing)
1. [References](#references)


## Introduction

Review the following sections and perform the activities on your own or with your group.

<details>
<summary>Learning Objectives</summary>

Students who complete the following will be able to:

- Define and compare data types, and strongly vs loosely typed languages
- List common data types and recall examples of each
- Explain what a data collection is and provide examples
- Use appropriate types to create data representations of real world examples

</details>

<details>
<summary>Preparation</summary>

Complete the following to prepare for this module

- [Command Line Crash Course](topics-command-line-crash-course.md)
- [Learn Computing: Data Basics](topics-data-basics.md)

</details>












## About Data Types

A **data type** defines the kind of data that is stored or used by a program.

Some programming languages (e.g. Java, C, C#) are [strongly typed](https://en.wikipedia.org/wiki/Strong_and_weak_typing), requiring programmers to predefine the type of data to be used by variables, parameters, etc.

Note, a data type is different than a **value**. Below, `7` is the value of the `int` (integer) typed variable "mid" ("monster ID").

```cs
// C# example
using UnityEngine;
public class Monster : MonoBehaviour
{
    public int mid = 7;
    public float health = 0.20f;
}
```

Other loosely typed languages (like Javascript and PHP) do not require predefinition.

```js
// javascript example
var mid = 7;
var health = 0.20;
```





## Value vs reference types

Many programming languages organize data types by **primitive** and **non-primitive** types. This structure, often called value vs. reference, is about how and where the data is actually stored in memory and used by the language.

For example, when you use a value type in a program and send it to a function, a new copy of that data, the "value", is passed to the function. But, when you define a reference type the data is stored in only on location (the "heap"), and when you pass it to other functions then only a *pointer* or "reference" to that location in memory is passed.

[While reference types are created on the heap, value types are created on the stack](http://www.programmerinterview.com/data-structures/difference-between-stack-and-heap/). If you create too many copies of a value type then you can crash your program thanks to a "stack overflow".



#### Javascript

- **Primitive** - Boolean, Number, String, Undefined, Null
- **Objects** - Array, Object, Function, Date

#### C#

- **Value** - Simple (Boolean, Float, Integer, Char), Enum, Struct, Nullable
- **Reference** - Class, Interface, Array, Delegate, Objects, Strings






## Primitive Data Types

### Boolean

The boolean type can only have one of two values: `true` or `false`.

Most programming languages have a default value for a type. When you create a new boolean variable in a strongly-typed language it will be `false` by default.



### Integers

Integers, or `int` types, are for whole numbers.

```js
-4
1
45
10000000000
```

### Floats

Numbers with decimals, also called "floating-point numbers".

```js
3.14
.0000001
10000000000.0
```

Unlike other languages, Javascript does not distinguish between number types.


### Strings:

A string is any grouping of letters, words, numbers, or character symbols surrounded by single or double quotes.

```js
"hello world 😀"
'2 be or not 2 be'
`my favorite numbers are 1, 2, and 3.14`
```


### Non-types

Just as there are types that represent data, there are types that represent NO data

- **Null** is a zero value. A special “value” that represents NO value!
- **undefined** is the value of a variable that has not been assigned a value.

```javascript
var myVar;
console.log(myVar); // -> undefined
```



## Data Type Issues


#### Some data types require more storage than others

For example, if you store `"12345678"` in a database as a string, it will [require](https://dev.mysql.com/doc/refman/8.0/en/storage-requirements.html) 8+1 bytes. Whereas, the same value `12345678` stored as an integer type only requires 4 bytes



#### Software may try to convert your data

If your program requires a specific type of data it may try to convert your input to the type it expects. If you input `33` into a boolean field (depending on the language) it may be converted to `true` because it is > 0.

```js
var v1 = 0;
var v2 = 33;
var v3 = "33";
if (v1) console.log("v1 == true"); // -> ...
if (v2) console.log("v2 == true"); // -> "v2 == true"
if (v3) console.log("v3 == true"); // -> "v3 == true"
```



## Discussion

Discuss the following:

1. Give an example of each of the types above
2. What type is this? `"3.14"`













## Data collections

- Explain what a collection (data points, arrays, objects) is and give examples

- Arrays
- Objects
- Serialized vs. Unserialized data



e.g. A time series is a collection of observations made sequentially in time.









<!-- 
Data Fundamentals with Javascript slides,
JSON Tutorial Start, Overview, Syntax, Datatypes, JSON vs. XML
Identify and distinguish primitive and complex data types
Add Algorithms
Incorporate images / ideas from http://formandcode.com/code-examples/ into a lecture. particularly “repetition”  
Visualization – History
Potential activity - Classify all different ways data is made visual - Charts, graphs, audio, interfaces,
Chart iterations assignment - all i have to do is grade images
Delve into the 2018 Shortlist — Information is Beautiful Awards
 -->




## Hierarchical Types

- json, xml, etc.






## Discussion


- Use appropriate data formats to create representations of objects, things, in the world
- CSV, JSON, etc.







## Keep practicing

- [Learn Computing: Data Cleaning](topics-data-cleaning.md)


## References

- [When bandwidth and storage size matters: Bits vs. bytes](https://www.redhat.com/sysadmin/bits-vs-bytes)
- [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](https://kunststube.net/encoding/)
- [Zoom into a computer chip: Watch this video to fully appreciate just how magical modern microchips are](https://www.extremetech.com/extreme/191996-zoom-into-a-computer-chip-watch-this-video-to-fully-appreciate-just-how-magical-modern-microchips-are)
