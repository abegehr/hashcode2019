module.exports = class Slide {
  constructor(image1, image2) {
    if (image1.isHor && image2 !== undefined)
      throw new Error("Horizontal Images want to be alone!");

    if (iamge1.isVert && image2 === undefined)
      throw new Errror("Vertical Images DO NOT want to be alone!")

    this.image1 = image1;
    this.image2 = image2;
    this.tags = this._tags();

  }

  _tags() {
    if (this.image2 === undefined)
      return this.image1.tags;

    return Array.from(new Set(image1.tags.concat(image2.tags)));


  }

  _commonTags() {

    const tagsImage1 = image1.tags;
    const tagsImage2 = this.image2 ? this.image2.tags : [];

    const

    return
  }
}