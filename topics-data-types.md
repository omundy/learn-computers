
[<](README.md)

<img width="375" src="assets/img/banner/banner-data-types.png">

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

- Define and compare data types, as well as strongly- and loosely-typed programming languages
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

A **data type** defines the *kind* of data that is stored or used by a program.

Most languages organize data by **primitive** and **non-primitive** types. This diagram shows the most common data types in Javascript.

![js data types](assets/img/data-types/javascript-diagram-data-types.png)

> The **primitive** and **non-primitive** organization structure (a.k.a. **value** vs. **reference**) also explains how data is stored in computer memory and affects software production and performance. See [Advanced Topics](#value-vs-reference-types) for more.




A data type is different than its **value**. In this C# example below, `7` is the *value* of the `mid` variable  and `int` (integer) is its *type*.

```cs
// Unity C# example
public class Monster
{
    int mid = 7;
    float health = 0.20f;
}
```

Some programming languages (e.g. C#, Java, Python) are [strongly typed](https://en.wikipedia.org/wiki/Strong_and_weak_typing), requiring programmers to predefine what kind of data they are using in variables, parameters, functions, etc. before they actually use them. Other, loosely typed languages like Javascript, Perl, and PHP, *do not* require programmers to define their type ahead of time.

```js
// javascript example
var mid = 7;
var health = 0.20;
```



<!-- Variations of this section:
learn-javascript/javascript-1/1-0-introduction.md
learn-computing/topics-data-types.md
-->

### 👉 **Try it out** - Explore data types using the Javascript Console

An [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) is any unit of code that resolves to a data value. Expressions are the fundamental building blocks of code, and use data ("operands") with [operators](https://www.w3schools.com/js/js_operators.asp) to perform math, logic, or string calculations.

1. In a web browser, [open the Developer Tools](https://developer.chrome.com/docs/devtools/open/) and click Console.
2. At the bottom, you will see a `>` **prompt** where you can enter (*input*) Javascript code.
3. **Primary expressions** - If you pass data to Javascript it will simply **return** the data's value.

```js
12
```

<details>
<summary>Solution</summary>

<img src="assets/img/data-types/devtools-console-12.png">

</details>


4. Adding an [arithmetic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators) operator and another data value will prompt Javascript to **evaluate** the code, multiplying the values to **return** (*output*) the *new* value `144` produced.

```js
12 * 12
```

5. If you use the [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator, Javascript will return a string describing the data's *type*.

```js
typeof 12
```

6. If you combine expressions, Javascript will evaluate each in the appropriate order. **What will these return?**

```js
typeof (12 * 12)
typeof (typeof (12 * 12))
typeof "hello world!"
```

<details>
<summary>Solution</summary>

```js
typeof (12 * 12) // -> "number"
typeof (typeof (12 * 12)) // -> "string" - The 1st returns "number", a string value, to the 2nd
typeof "hello world!" // -> "string"
```
</details>


7. A data's value and its type are not the same thing. **What type are these?**

```js
555
"555"
`false`
true
```

<details>
<summary>Solution</summary>

```js
555 // -> "number"
"555" // -> "string"
`false` // -> "string"
true // -> "boolean"
```
</details>






## Type conversion

Many programming languages allow you to [convert a data's type](https://en.wikipedia.org/wiki/Type_conversion). In Javascript, [type conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion) can happen intentionally (a.k.a. "explicit conversion"), such as when you use built-in functions to initiate the conversion.

```js
typeof Number("555") // -> "number"
typeof String(555) // -> "string"
```

It can also happen when it automatically converts your data to another type (a.k.a. "implicit conversion" or "type [*coercion*](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)"). For example, when you use the `+` operator with two numbers then Javascript will perform arithmetic. But, if one of the operands is a `string` it will automatically convert all data types to `string` and then concatenate them into a larger string.  

```js
var test = 10;
test + 1 // -> 11
test + " apples" // -> "10 apples"
```












## Primitive Data Types

These common primitive data types (and examples) can be found across many strong- and loosely-typed programming languages and databases.



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








## Advanced Topics






### Memory implications

Data types are important because some data types require more storage than others.

For example, if you store `"12345678"` in a database as a string, it will [require](https://dev.mysql.com/doc/refman/8.0/en/storage-requirements.html) `8+1` bytes. Whereas, the same value `12345678` stored as an integer type only requires 4 bytes.







### Value vs reference types

> Many programming languages organize data types by **primitive** and **non-primitive** types. This structure, often called **value** vs. **reference**, is about how and where the data is actually stored in memory and used by the language.

For example, when you use a value type in a program and send it to a function, a *new copy* of that data, its "value", is passed to the function. But, when you define a reference type the data is stored in *only one* location (the "heap"), and when you pass it to other functions then only a *pointer* or "reference" to that location in memory is passed.

[Reference types are created on the heap, value types are created on the stack](http://www.programmerinterview.com/data-structures/difference-between-stack-and-heap/). If you create too many copies of a value type then you can crash your program thanks to a "stack overflow".


#### Javascript

- **Primitive** - Boolean, Number, String, Undefined, Null
- **Objects** - Array, Object, Function, Date

#### C#

- **Value** - Simple (Boolean, Float, Integer, Char), Enum, Struct, Nullable
- **Reference** - Class, Interface, Array, Delegate, Objects, Strings







## Keep practicing

- [Learn Computing: Data Cleaning](topics-data-cleaning.md)


## References

- [When bandwidth and storage size matters: Bits vs. bytes](https://www.redhat.com/sysadmin/bits-vs-bytes)
- [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](https://kunststube.net/encoding/)
- [Zoom into a computer chip: Watch this video to fully appreciate just how magical modern microchips are](https://www.extremetech.com/extreme/191996-zoom-into-a-computer-chip-watch-this-video-to-fully-appreciate-just-how-magical-modern-microchips-are)
