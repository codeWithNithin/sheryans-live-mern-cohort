const arr = [1, 2, 3, 4];

console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4
console.log(arr[4]); // undefined

//  2 ways to create arrays
// 1. 1st method
const users1 = [];
// 2. 2nd method
const users2 = new Array();

console.log(users1, users2);

const users3 = new Array();
users3[0] = 12;
users3[1] = 15;

// Task create an array and add 5 values in it
const users4 = new Array();
users3[0] = 12;
users3[1] = 15;
users3[2] = 24;
users3[3] = 30;
users4[5] = 90;

let arr1 = new Array(30);

for (let i = 0; i < 30; i++) {
    arr1[i] = i;
}

console.log(arr1[i])

// we can store data of different data types inside array

let arr4 = [1, true, 'nithin', NaN, undefined]

// objects
var obj = {
    name: 'iphone 13 pro max',
    price: 10,
    cameras: 3,
    processor: 'm2'
}

// why object? to store info about one real-world entity.