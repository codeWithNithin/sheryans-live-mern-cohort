# Day-27, DSA basics

# without using keywords declare a variable and check its output

```js
a = 10;
console.log(a); // output: 10, but this is bad practice.
```

# Special about var

- it allows us to access variable first and declare a variable

```js
a = 10;
var a;
```

# let: it doesnt allow us to access variables before its been declared, it thorws initialization err.

```js
age = 10;
let age;

//  this throws an err
console.log(age);
```

# What is a integer?

- Its a number without decimal part, or floating point.
- ex: 23, 87654, 9999999

# Add 2 integers

- 10 + 20 = 30

# Rules

- With addition

String + string = concat
number + number = addition
number + string = concat

- with other operators, it will always be number
  string - string = number
  string - number = number

# Guess the output

console.log('Sum of' + a + ' and ' + b + is + a + b)

```js
console.log("Sum of" + a + " and " + b + " is " + a + b);
// output: Sum of 10 and 20 is 1020
```

- To fix this issue
  console.log('Sum of' + a + ' and ' + b + is + (a + b))

# output of this:

console.log( a + b + 'Sum of' + a + ' and ' + b)
// output: 30 is sum of 10 and 20

console.log(1 + 1) // output: 2

console.log('1' + 1) // output: 11

console.log(1 + '1') // output: 11

console.log('1' - '1') // output: 0

# Arithmatic operators