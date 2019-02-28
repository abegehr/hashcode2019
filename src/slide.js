module.exports = class Slide {
  constructor(image1, image2) {
    if (image1.isHor && image2 !== undefined)
      throw new Error("Horizontal Images want to be alone!");

    if (image1.isVert && image2 === undefined)
      throw new Errror("Vertical Images DO NOT want to be alone!")

    this.image1 = image1;
    this.image2 = image2;
    this.tags = this._tags();

  }

  _tags() {
    if (this.image2 === undefined)
      return this.image1.tags;

    return Array.from(new Set(this.image1.tags.concat(this.image2.tags)));

  }

  calcTransitionScore(nextSlide) {
    const commonTags = this.tags.filter(tag => nextSlide.tags.includes(tag));
    const inMeNotInNext = this.tags.filter(tag => !nextSlide.tags.includes(tag));
    const inNextNotInMe = nextSlide.tags.filter(tag => !this.tags.includes(tag));

    const stat1 = commonTags.length;
    const stat2 = inMeNotInNext.length;
    const stat3 = inNextNotInMe.length;

    const total = [stat1, stat2, stat3].reduce((acc, cur) => cur < acc ? cur : acc);

    debugger;

    return {
      stat1,
      stat2,
      stat3,
      total,
    }
  }
}
