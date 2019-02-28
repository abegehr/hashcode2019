const read = require("../parser").read;
const write = require("../output").write_slides;



// change to A, B, C, D, E
const file = "A";

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

  var allPairs = pics_v
  allPairs.sort(function(a, b){
    if(a["tags"].length < b["tags"].length) return -1;
    if(a["tags"].length > b["tags"].length) return 1;
    return 0;
  })
  console.log(allPairs)
  return allPairs

}

  /*for (var i = 0; i < pics_v.length; i=i+2){
    if (pics_v.length - i >= 2){
      allPairs.push(combinePics(pics_v[i],pics_v[i+1]))
    }
  }*/


  /*var currentIndex = 0
  pics_v_copy = pics_v
  while(currentIndex < pics_v_copy.length){
    var checkForCommons = 0
    for (var i = ; i < pics_v_copy.length; i++){
      console.log("currentIndex: ", currentIndex)
      console.log("i: ",i)
      console.log("chekcfor: ",checkForCommons)
      if(pics_v_copy[i] === pics_v_copy[currentIndex]){
        continue
      }
      if(howManyTagsInCommon(pics_v_copy[currentIndex],pics_v_copy[i]) === checkForCommons){
        allPairs.push(combinePics(pics_v_copy[currentIndex],pics_v_copy[i]))
        currentIndex++
      }

    }
    checkForCommons++
  }*/



    /*if(pics_v.length/2 <= allPairs.length){
      break
    }
    if(pics_v.length-i < 2){
      checkForCommons++
      i=0
    }
    for (var j = 0; j >= pics_v.length-2; j=j++){
      if(howManyTagsInCommon(pics_v[i],pics_v[j]) == checkForCommons){
        allPairs.push(combinePics(pics_v[i],pics_v[j]))
      }
      if(pics_v.length-j < 2){
        break;
      }
    }*/



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



const howManyTagsInCommon = (pic1, pic2) => {
  /*var pic1isV = false
  var pic2isV = false

  if(contains(pics_v,pic1)){
    pic1isV = true
  }

  if(contains(pics_v,pic2)){
    pic2isV = true
  }*/
  var numberOfEqualTags = 0
  var tags1 = pic1["tags"]
  var tags2 = pic2["tags"]

  for(var i=0; i<tags1.length; i++){
    for(var j=0; j<tags2.length; j++){
      if (tags1[i] === tags2[j]){
        numberOfEqualTags++
      }
    }
  }

  return numberOfEqualTags

}


let allPairs = pairAllPicsV();
let solution = createUltimatePicArray(allPairs);

console.log("solution: ", solution);

let slides = solution.map(image => {
  if (image.id.length) {
    return image.id;
  } else {
  return [image.id];
  }
})





//console.log("solution: ", solution)

write("../output/hor_and_vert/" + file + "_out.txt", slides)
