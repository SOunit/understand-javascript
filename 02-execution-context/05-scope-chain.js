function a() {
  function b() {
    console.log(myVar);
  }

  b();
}

var myVar = 1;
a();

// scope chain is decided by lexical environment
