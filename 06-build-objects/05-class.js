class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hi ${this.firstName} ${this.lastName}`);
  }
}

const john = new Person("John", "Doe");
console.log(john);
john.greet();
