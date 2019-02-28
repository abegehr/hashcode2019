const read = require("../parser").read;
const write = require("../output").write_slides;

// change to A, B, C, D, E
const file = "E";

var data = read(file);

//console.log(data);

pics_h = data.horizontal;

// slides from only horizontal pictures
var slides = pics_h.map(pic => {
  //console.log(pic);
  return [pic.id];
})

console.log("slides: ", slides)

write("../../output/only_hor_" + file + "_out.txt", slides)
