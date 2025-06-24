# Day-14: Intro to JavaScript

# Agenda

- What is js
- How to link js in html?
- Create a plain website.?
- Explore dev tool.
- print something on console in script js.
- console methods.
- variables in js.
- How to make js variable,
- How variables are stored in memory?
- Variable declaration
- variable initilization
- variable rules
- variable reinitialization or reassigning
- Static languages (strictly typed)
- Dynamic languages (loosely typed)
- Arthimatic operators
- Alert, confirm and prompt
- variable created with var becomes a global object.
- Expression and statement

#### What is js ?

- Its a programming langugage.
- Learn JS in purest form.
- if we learn js, then we can do Front-end, Backend, we can access mutiple libraries, we can also do AIs, blockchains, mobile apps, desktops apps.
- It is dynamically typed.

#### How to link js in html?

by adding js file into script tag inside body at the end.

```js
<html>
  <head></head>
  <body>
    <script src="./script.js"></script>
  </body>
</html>
```

#### Explore dev tool?

- its a tool which helps us debug css, also helps us to cehck perfomance metrics, api related data.

#### print something on console in script js

```js
console.log("hello Cohort");
```

#### console methods

There are 3 methods:

- console.log('Hello') -> prints hello in normal way.
- console.warn('depricated') -> displays data with warning symbol.
- console.error('typeError') -> displays data with error message.

#### variables in js

- Its like a container which holds value.
- when we create variable, it creates a memory.

To use variables,we have 3 keywords:
let, var, const

#### variable declaration

```js
let age;
```

#### variable initialization

```js
let name = "Harsh";
```

#### Arthimatic operators

```js
let num1 = 10;
let num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
```

#### variable reinitialization or reassigning

```js
let num1 = 10;
num1 = 20;
```

#### Static languages vs Dynamic languages

- static languages: strictly typed language, for ex: java
- Dynamic languages: loosely typed language, js, python, etc...

#### variable created with var becomes a global object

```js
var a = 10;

console.log(a === window.a);
console.log(window);
```

#### Variables rules

- variable cannot start with numbers.
- variable cannot be created with special chars other than $ and \_.
- keywords are not allowed.
- always better to follow camel case.

#### Expression and statement

Expression: Any operation related code
Statement: Any Statement related code.

```js
const sum = a + b; // expression
console.log(sum); // Statement
```
