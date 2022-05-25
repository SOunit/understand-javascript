function greet(firstName, lastName, language) {
  language = language || "en";

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments);
  console.log("--------------");
}

greet();
greet("Jack");
greet("Jack", "Pearson");
greet("Jack", "Pearson", "es");
