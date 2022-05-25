function greet(whatToSay) {
  return function (name) {
    console.log(`${whatToSay}, ${name}`);
  };
}

var sayHello = greet("Hello");
sayHello("Jack");

// arrow function test
{
  function greet(whatToSay) {
    return (name) => {
      console.log(`${whatToSay}, ${name}`);
    };
  }

  var sayHello = greet("Hello");
  sayHello("Jack");

  var greet = (whatToSay) => {
    return (name) => {
      console.log(`${whatToSay}, ${name}`);
    };
  };

  var sayHello = greet("Hello");
  sayHello("Jack");
}
