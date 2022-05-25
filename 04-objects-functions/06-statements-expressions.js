var a = 3;

greet();

function greet() {
  console.log("hi");
}

var anonymousGreet = function () {
  console.log("hi");
};

anonymousGreet();

function log(a) {
  a();
}

log(function () {
  console.log("hi");
});

// 1. expression returns value
// 2. statement returns nothing
// 3. function in JS is an object
// 4. first class function means you can treat function as like others
