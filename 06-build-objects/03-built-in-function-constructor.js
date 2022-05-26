String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};

console.log("john".isLengthGreaterThan(4));

Number.prototype.isPositive = function () {
  return this > 0;
};

// console.log(3.isPositive());

var a = new Number(3);
console.log(a.isPositive());
