function greet(firstName, lastName, language) {
  language = language || "en";

  if (language === "en") {
    console.log(`hello ${firstName} ${lastName}`);
  }

  if (language === "es") {
    console.log(`hola ${firstName} ${lastName}`);
  }
}

function greetEnglish(firstName, lastName) {
  greet(firstName, lastName, "en");
}
function greetSpanish(firstName, lastName) {
  greet(firstName, lastName, "es");
}

greetEnglish("Jack", "Pearson", "en");
greetSpanish("Jack", "Pearson", "es");

// there is no function overload in JS
// this is one approach used instead of function overload
