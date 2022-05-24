function a() {
  function b() {
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();

// scope chain is decided by lexical environment
