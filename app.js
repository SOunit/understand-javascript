b();
console.log(a);

// belongs to window
var a = "this is a";
function b() {
  console.log("called b!");
}

b();
console.log(a);

// belongs to lexical environment
let c = 20;
const d = () => {};
