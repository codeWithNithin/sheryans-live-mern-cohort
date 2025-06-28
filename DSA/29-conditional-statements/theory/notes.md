# Day 29, conditonal statements problems

Agenda:
1 - check if the year is leap year.
2 - check the bijli bill
3 -

#### 1 - check if the year is leap year

**description**:

check for following condition:

1.  given year should be divisible by 4.
2.  if it is divisible by 4 then it should not be divisible by 100.
3.  if its divisible by 4 and it is divisible by 100, then it should be divisilbe by 400.
4.  if its divisible by 4 and it is not divisible by 100, its a leap year.
5.  if its divisible by 400 then it is leap year.

# Brute force:

- 1.  get the year.
- 2.  check if the year is divisible by 4.
- 2.1 if its not divisible by 4, then its not leap year.
- 2.2 if its divisible by 4 then go to step 3.
- 3.  if the number is divisible by 100.
- 3.1 if its divisible by 100, then its not leap year, but also check if its divisible by 400.
- 3.2 if its not divisible divisible by 100 then its a leap year.

There are 2 methods to solve this problem:

1. algorithm:
1. get the year from prompt method.
1. keep one boolean flag to identify if its leap year or not.
1. check if the number is completely divisilbe by 4.
1. if its divisible completely by 4, consider it as leap year.


    - 4.1 if its divisible by 4, then check if its divisible by 100.
     - 4.1.1 if its divisible by 100, then its not a leap year.
     - 4.1.2 if its not divisible by 100, then considier it as leap year.
     - 4.1.3. if its divisible by 100, then make sure that its divisilbe by 400.

5.  if its not divisible by 4, then not a leap year.

then the code goes at below

#### code by teacher
```js
const year = Number(prompt("Enter a year"));

if(year % 4 === 0) {
 if(year % 100 === 0) {
  if ( year % 400 === 0) {
  return 'leap year'
  } else return 'not a leap year'
 } else return 'leap year'
} else return 'not a leap year'

```

```js
const year = Number(prompt("Enter a year"));

if (year % 4 !== 0) return "Not a leap year";

if (year % 100 === 0) {
  if (year % 400 === 0) {
    return "Leap year";
  } else {
    return "Not a leap year";
  }
} else {
  return "Leap year";
}
```
