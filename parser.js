const fs = require("fs");
const path = require("path");

const input = require("./input");

const files = {
  A: "a_example.txt",
  B: "b_lovely_landscapes.txt",
  C: "c_memorable_moments.txt",
  D: "d_pet_pictures.txt",
  E: "e_shiny_selfies.txt"
}


const read = (file) => {
  const fileText = fs.readFileSync(path.join(__dirname, files[file]), { encoding: "ASCII" });
  return new input(String(fileText));
}

module.exports = {
  read,
}

