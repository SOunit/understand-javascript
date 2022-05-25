// sample1
var a = 3;
var b;

b = a;
a = 5;

console.log(a, b);

// sample2
var c = { greeting: "hi" };
var d;
d = c;
c.greeting = "hello";
console.log(c, d);

// sample3
function changeGreeting(obj) {
  obj.greeting = "Good night";
}

changeGreeting(c);
console.log(c, d);

// sample4
c = { greeting: "hello again" };
console.log(c, d);

// 1. by value (primitives)
// 2. by reference (all objects)
// 3. equal operator setup new address
