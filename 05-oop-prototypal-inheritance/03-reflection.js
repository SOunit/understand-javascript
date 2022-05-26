var person = {
  firstName: "default",
  lastName: "default",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

var john = {
  firstName: "John",
  lastName: "Doe",
};

// do not do this ever. this cause bad performance
john.__proto__ = person;

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(`${prop} ${john[prop]}`);
  }
}
