const year = Number(prompt("Enter a year"));

// method 1
let isLeapYear = false;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else isLeapYear = true;
} else isLeapYear = false;

// 2. method
if (year % 4 === 0 && year % 100 !== 0) {
return 'leap year'
} else if (year % 400 === 0) {
return 'leap year'
} else {
return 'not a leap year'
}
