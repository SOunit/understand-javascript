var person = {
  firstName: "default",
  lastName: "default",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());

var john = {
  firstName: "John",
  lastName: "Doe",
};

// do not do this ever. this cause bad performance
john.__proto__ = person;

console.log(john.getFullName());
console.log(john.firstName);

var jane = {
  firstName: "Jane",
};

jane.__proto__ = person;
console.log(jane.getFullName());
