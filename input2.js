const fs = require('fs');
const readline = require('readline');


function parse_file(filename) {

  var rd = readline.createInterface({
      input: fs.createReadStream(filename),
      output: false,
      console: false
  });

  var n;
  var pics_h = [];
  var pics_v = [];
  var id = -1;

  return new Promise((resolve, reject) => {
    rd.on('line', function(line) {
      if (id === -1) {
        n = parseInt(line);
      } else {
        let arr = line.split(" ");
        let tags = arr.slice(2);
        console.log(arr);

        // hor or ver
        if (arr[0] == 'H') {
          // hor
          pics_h.push({id: id, tags: tags})
        } else {
          // ver
          pics_v.push({id: id, tags: tags})
        }
      }

      id += 1;
    })
    .on('close', () => {
      resolve({ pics_h: pics_h, pics_v: pics_v });
    });
  });

}

/*
// example
parse_file("a_example.txt")
.then(data => {
    let pics_h = data.pics_h;
    let pics_v = data.pics_v;
    console.log("pics_h: ", pics_h)
    console.log("pics_v: ", pics_v)
})
*/
