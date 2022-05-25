var objLiteral = {
  firstName: "Jack",
  lastName: "Pearson",
};

console.log(JSON.stringify(objLiteral));
console.log(
  JSON.parse(`{
    "firstName": "Bec",
    "lastName": "Pearson"
  }`)
);
