function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

// scope chain
// execution context has outer lexical environment ref
