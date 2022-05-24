// this is not recommended way to create a new object
// just for temporally, it's create what is happening
var person = new Object();

person["firstName"] = "Jack";
person["lastName"] = "Pearson";

var firstNameProperty = "firstName";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "111 main st.";
person.address.city = "new york.";
person.address.state = "New york.";
console.log(person);
console.log(person.address);
console.log(person.address.city);
console.log(person["address"]["city"]);

// 1. bracket operator sample
// 2. dot operator sample
