function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

// 2
function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    // let create new memory space
    let j = 0;
    arr.push(function () {
      console.log(j);
    });
  }

  return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();

function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();
