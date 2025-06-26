class Employee {
  #name;
  #age;
  #salary;
  #id;

  constructor(name, age, salary, id) {
    this.#name = name;
    this.#age = age;
    this.#salary = salary;
    this.#id = id;
  }

  set name(newName) {
    this.#name = newName;
  }

  get name() {
    return this.#name;
  }

  set age(age) {
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set id(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  set salary(salary) {
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }
}

Employee.prototype.printDetails = function () {
  return `${this.name} is ${this.age} years old having id ${this.id} earning salary of ${this.salary}`;
};

const emp1 = new Employee("Nithin", 23, 49999, 1234);
