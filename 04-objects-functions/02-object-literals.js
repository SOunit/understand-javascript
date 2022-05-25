var person = {
  firstName: "Jack",
  lastName: "Pearson",
  address: {
    street: "test st.",
    city: "test city",
    state: "test state",
  },
};
console.log(person);

// same result with new Object
var person = new Object();
person.firstName = "Bec";
person.lastName = "Pearson";
console.log(person);

function greet(person) {
  console.log(`Hi ${person.firstName}`);
}

greet(person);
greet({ firstName: "Kevin", lastName: "Pearson" });

// 1. object literal syntax
