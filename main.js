const parser = require("./parser");

const firstProblem = parser.read("A");
console.log(firstProblem);

firstProblem.vertical.forEach(image => console.log(image.tags));

console.log(firstProblem);
