const Slide = require("./slide");
const parser = require("./parser");
const write_slides = require("./output").write_slides;
const calcArrangementScore = require("./calcArrangementScore");

const ITERATIONS = 1000;

// const problemName = "A"
// const problemName = "B"
// const problemName = "C"
// const problemName = "D"
const problemName = "E"

const problem = parser.read(problemName);

// TODO Get optimal pairings
const verticals = [];
for (let i = 0; i < problem.vertical.length; i += 2) {
  verticals.push(new Slide(problem.vertical[i], problem.vertical[i + 1]));
}

const horizontals = problem.horizontal.map(image => new Slide(image));

const allSlides = verticals.concat(horizontals);
const swapSlides = (index1, index2) => {
  const temp = allSlides[index1];
  allSlides[index1] = allSlides[index2];
  allSlides[index2] = temp;
}

let changed = true;
for (let i = 0; i < ITERATIONS && changed === true; i++) {
  changed = false;
  for (let slide = 0; slide < allSlides.length - 3; slide++) {
    const old1 = allSlides[slide].calcTransitionScore(allSlides[slide + 1]).total;
    const old1_inverse = allSlides[slide + 1].calcTransitionScore(allSlides[slide]).total;

    const old2 = allSlides[slide + 2].calcTransitionScore(allSlides[slide + 3]).total;

    const candidate1 = allSlides[slide].calcTransitionScore(allSlides[slide + 2]).total
    const candidate2 = allSlides[slide + 1].calcTransitionScore(allSlides[slide + 3]).total

    if (old1 + old2 < candidate1 + candidate2) {
      swapSlides(slide + 1, slide + 2);
      changed = true;
    }
  }
  //  console.log(calcArrangementScore(allSlides));
}

const printableSlides = allSlides.map(slide => slide.image2 ? [slide.image1.id, slide.image2.id] : [slide.image1.id]);

write_slides("../output/switch_if_Improved_1_" + problemName + ".txt", printableSlides);
