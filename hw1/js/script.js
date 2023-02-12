"use strick";

class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  set salary(value) {
    this._salary = value;
  }

  get salary() {
    return this._salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary, lang);

    this.lang = lang;
  }
  set salary(value) {
    this._salary = value * 3;
  }

  get salary() {
    return this._salary;
  }
}

const user = new Employee("snej", 36, 500);
const user1 = new Programmer("roman", 34, 700, "ua en ru");
const user2 = new Programmer("karina", 24, 1250, "ua ru");
const user3 = new Programmer("artem", 32, 10000, "ua en fr de es");
