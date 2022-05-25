console.log(this);

function a() {
  console.log(this);
  this.newVariable = "hello";
}

var b = function () {
  console.log(this);
};

a();
b();
console.log(newVariable);

var c = {
  name: "property of object c",
  log: function () {
    var self = this;

    this.name = "update name using this keyword!";
    console.log(this);

    var setName = function (newName) {
      //   this.name = newName;
      self.name = newName;
    };
    setName("updated by setName!");

    console.log(this);
    console.log(global.name);
  },
};

c.log();

// this points to...
// 1. global        / object
// 2. object        / method pattern / method is a function inside an object
// 3. global object / function inside a method

// this from ZTM
// 1. new
// 2. implicit
// 3. explicit
// 4. arrow
