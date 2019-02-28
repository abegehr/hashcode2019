const read = require("../parser").read;
const write = require("../output").write_slides;



// change to A, B, C, D, E
const file = "E";

// read data
var data = read(file);
pics_h = data.horizontal;
pics_v = data.vertical;


// helpers

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

 function combine_pics(pics) {
   let slides = []
   for (i = 0; i < pics.length-1; i++) {
     if (i % 2 == 0) {
       slides.push([pics[i].id, pics[i+1].id]);
     }
   }
   return slides;
 }


// combine vertical pics
pics_v = shuffle(pics_v);
let slides_v = combine_pics(pics_v);

//console.log("slides_v: ", slides_v);



let slides = pics_h.map(img => {
  return [img.id];
});

slides = slides.concat(slides_v);

slides = shuffle(slides);


//console.log("slides: ", slides)


write("../../output/all_random/" + file + "_out.txt", slides)
