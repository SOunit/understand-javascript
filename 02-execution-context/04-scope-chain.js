function b() {
  console.log("b-1", myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

function a() {
  var myVar = 2;

  function b() {
    console.log("b-2", myVar);
  }

  b();
}

var myVar = 1;
a();
