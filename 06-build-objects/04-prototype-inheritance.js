var person = {
  firstName: "default",
  lastName: "default",
  greet: function () {
    return `Hi ${this.firstName} ${this.lastName}`;
  },
};

// create a new object which __proto__ pointing to person
var john = Object.create(person);
john.firstName = "John";
john.lastName = "Doe";
console.log(john);
console.log(john.greet());
