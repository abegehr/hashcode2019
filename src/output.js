// slides:
//   one slide per line
//   one horizontal or two vertical pictures per slide

const fs = require('fs');
const path = require("path");


function write_slides(filename, slides) {
  var slides_text = slides.length + "\n";

  slides.forEach(slide => {
    // detect wrong slides (not 1 or 2 pictures per slide)
    if (slide.length !== 1 && slide.length !== 2) {
      console.error("ERROR: wrong slide: ", slide);
    }

    slides_text += slide.join(" ") + "\n"
  });

  console.log("slides_text: ", slides_text);

  fs.writeFile(path.resolve(__dirname, filename), slides_text, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}


// example
/*
const ex_filename = "out.txt";
var ex_slides = [
  [1],
  [2, 3],
  [4, 5],
  [6],
  [7, 8]
];
write_slides(ex_filename, ex_slides);
*/


module.exports = {
  write_slides
}
