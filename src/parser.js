const fs = require("fs");
const path = require("path");

const input = require("./input");

const files = {
  A: "../input/a_example.txt",
  B: "../input/b_lovely_landscapes.txt",
  C: "../input/c_memorable_moments.txt",
  D: "../input/d_pet_pictures.txt",
  E: "../input/e_shiny_selfies.txt"
};

const read = (file) => {
  const fileText = fs.readFileSync(path.join(__dirname, files[file]), { encoding: "ASCII" });
  return new input(String(fileText));
}

module.exports = {
  read,
}

