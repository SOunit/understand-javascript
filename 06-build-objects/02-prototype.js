function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// person.__proto__ points to Person.prototype
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

var person = new Person("John", "Doe");
console.log(person);
console.log(person.getFullName());
