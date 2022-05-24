function b() {
  console.log("b-1", myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
console.log("g-1", myVar);
a();

function a() {
  var myVar = 2;

  function b() {
    console.log("b-2", myVar);
  }

  b();
}

var myVar = 1;
console.log("g-2", myVar);
a();
