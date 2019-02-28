// slides:
//   one slide per line
//   one horizontal or two vertical pictures per slide

const fs = require('fs');

const filename = "out.txt";

var slides = [
  [1],
  [2, 3],
  [4, 5],
  [6],
  [7, 8, 9]
];

var slides_text = slides.length + "\n";

slides.forEach(slide => {
  // detect wrong slides (not 1 or 2 pictures per slide)
  if (slide.length !== 1 && slide.length !== 2) {
    console.log("ERROR: wrong slide: ", slide);
  }

  slides_text += slide.join(" ") + "\n"
});

console.log("slides_text: ", slides_text);

fs.writeFile(filename, slides_text, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
