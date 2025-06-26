// function Toffee(name, price) {
//   this.name = name;
//   this.price = price;
// }

// const kMango = new Toffee("Kacha Mango", 10);
// const dMilk = new Toffee("Diary Milk", 10);

// if we want to keep something common across all objects. instead of passing common properties and methods inside every  object. we can keep it at one place and we share it among all the objects. this is because, keeping the same thing in all objects, will have affect on memory

// This is bad practice
// function Toffee(name) {
//   this.name = name;
//   this.price = 10;
// }

function Toffee(name) {
  this.name = name;
}

// This line make sure that, we dont need to pass the hardcoded value to all the object. instead we can keep the properties and methods at prototype and use it whenever we need it.
Toffee.prototype.price = 10;

Toffee.prototype.getToffeeName = function () {
  console.log(this)
  return this.name;
};

const kMango = new Toffee("Kacha Mango");
const dMilk = new Toffee("Diary Milk");

// since we havent defined any methods inside the Toffe constructor, how we are getting all these methids?
// - its because of the prototype.
dMilk.toString()