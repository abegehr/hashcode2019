const read = require("../parser").read;
const write = require("../output").write_slides;



// change to A, B, C, D, E
const file = "E";

// read data
var data = read(file);
pics_h = data.horizontal;
pics_v = data.vertical;



// helpers

const combineTags = (pic1, pic2) => {
  var newTags = []
  var pic1Tags = pic1["tags"]
  var pic2Tags = pic2["tags"]
  var lengthOfPic1 = pic1Tags.length
  var lengthOfPic2 = pic2Tags.length

  for (var i = 0; i < lengthOfPic1; i++){
      if(!contains(newTags,pic1Tags[i])){
        newTags.push(pic1Tags[i])
      }
  }

  for (i = 0; i < lengthOfPic2; i++){
      if(!contains(newTags,pic2Tags[i])){
        newTags.push(pic2Tags[i])
      }
  }

  return newTags
}

const contains = (arr, val) => {
  if (arr.indexOf(val) != -1) {
    return true
  }
  return false
}

const combinePics = (pic1, pic2) => {
    return {id: [pic1["id"],pic2["id"]], tags: combineTags(pic1,pic2)}
  }

const pairAllPicsV = () => {
  var allPairs = []
  for (var i = 0; i < pics_v.length; i=i+2){
    if (pics_v.length - i >= 2){
      allPairs.push(combinePics(pics_v[i],pics_v[i+1]))
    }
  }

  return allPairs;
}

const createUltimatePicArray = (allPairs) => {
  var ultimatePicArray = []
  for (var i = 0; i < pics_h.length; i++){
    ultimatePicArray.push(pics_h[i])
  }
  //console.log("allPairs: ",allPairs)
  for (i = 0; i < allPairs.length; i++){
    ultimatePicArray.push(allPairs[i])
  }
  return  ultimatePicArray;
}




let allPairs = pairAllPicsV();
let solution = createUltimatePicArray(allPairs);


//console.log(solution);

// sort by number of tags
solution.sort((a, b) => {
  /*
  console.log("===");
  console.log("a.tags.length: ", a.tags.length)
  console.log("b.tags.length: ", b.tags.length)
  */
  if (a.tags.length < b.tags.length) {
    return -1;
  } else if (b.tags.length < a.tags.length) {
    return 1;
  }
  return 0;
});

console.log("A: ", solution[0].tags.length);
//console.log("A500: ", solution[500].tags.length);
console.log("A-1: ", solution[solution.length-1].tags.length);


let slides = solution.map(image => {
  if (image.id.length) {
    return image.id;
  } else {
  return [image.id];
  }
})



//console.log("slides: ", slides)


write("../../output/num_tags/" + file + "_out.txt", slides)
