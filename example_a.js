/*
var pics_h = [
  {id: 0, tags: ["cat", "beach", "sun"]},
  {id: 3, tags: ["garden", "cat"]}
];

var pics_v = [
  {id: 1, tags: ["selfie", "smile"]},
  {id: 2, tags: ["garden", "selfie"]}
];
*/

const read = require("./parser").read;
const write = require("./output").write_slides;


// read example

var data = read("A");

console.log(data);


// write example

var slides = [
  [0, 1],
  [4],
  [3, 5]
];

write("out_ex.txt", slides);
