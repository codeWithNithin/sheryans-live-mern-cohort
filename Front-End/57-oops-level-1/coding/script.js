// Here tofee is a Function constructor
// function Toffee() {
//     this.name = 'Kacha mangoo'
//     this.price = 10
// }
// chocolate1 is a object that will have name and price as properties
// const chocolate1 = new Toffee();

// we can also pass arguments inside function constructor for dynamic value adding.

function Toffee(name, price) {
  this.name = name;
  this.price = price;
}

const kMango = new Toffee("Kacha Mango", 10);
const dMilk = new Toffee("Diary Milk", 10);

// new keyword does the following thing
// 1. creates a brand new plain empty object.
// 2. it calls the constructor by itself. this plain empty object is passed (not as a paramete) but inside this keyword.
// constructor will have aces to the this keyword, so when we call new this keyword will have acces to the newly created empty object.
// 3. it does everything for making prototypes work.
// 4. if the constructor has non-primitive value as return statement, like object, Array etc, then that non-primitive object will be returned
// if primitive value is there as return value, then this keyword object will be returned implicitly.

// class

class ToffeeClass {
  name;
  price;

  constructor(name, price) {
    console.log(this)
    this.name = name;
    this.price = price;
  }
}

const chocoObj = new ToffeeClass('kacha Mango', 10)
console.log(chocoObj)
