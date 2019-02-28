
module.exports = class image {
  constructor(line, id) {
    this.id = id;
    this.line = line;
    this.tags = this.tags;
    this.tags = this._tags();
    this.isVert = this._isVert();
    this.isHor = this._isHor();
    this.tagNum = this._tagNum();

  }

  _tags() {
    return this.line.split(" ").slice(2);
  }

  _isVert() {
    return this.line[0] == "V";
  }

  _isHor() {
    return !this.isVert;
  }

  _tagNum() {
    return this.tags.length;
  }
} 