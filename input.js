const image = require("./image")
module.exports = class input {
  constructor(inputString) {

    const withoutCount = inputString.slice(inputString.indexOf("\n"));
    let lines = withoutCount.split("\n")
    lines = lines.slice(1, lines.length - 1);
    this.images = lines.map((line,index) => new image(line, index));
    this.vertical = this.images.filter(image => image.isVert);
    this.horizontal = this.images.filter(image => image.isHor);
  }
}