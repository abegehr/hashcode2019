const Slide = require("./slide");
const parser = require("./parser");

const firstProblem = parser.read("A");

let dummy;

try {
  dummy = new Slide(firstProblem.vertical[0]);
  assert(false);
} catch (e) {
  console.log("passed first");
}

dummy = new Slide(firstProblem.vertical[0], firstProblem.vertical[1]);
console.log("passed second");
dummy = new Slide(firstProblem.horizontal[0]);
console.log("passed third");


try {
  dummy = new Slide(firstProblem.horizontal[0], firstProblem.horizontal[1]);
  assert(false);
} catch (e) {
  console.log("passed fourth");
}



const firstImage = new Slide(firstProblem.images[0]);
const fourthImage = new Slide(firstProblem.images[3]);

console.log(firstImage.calcTransitionScore(fourthImage));