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

class InformalPerson extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  greet() {
    console.log(`Yo ${this.firstName} ${this.lastName}`);
  }
}

const kevin = new InformalPerson("Kevin", "Pearson");
console.log(kevin);
kevin.greet();
