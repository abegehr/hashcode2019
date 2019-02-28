const fs = require('fs');
const readline = require('readline');

const filename = "a_example.txt";

var rd = readline.createInterface({
    input: fs.createReadStream(filename),
    output: false,
    console: false
});

var n;
var pics_h = [];
var pics_v = [];
var id = -1;

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
  console.log("pics_h: ", pics_h)
  console.log("pics_v: ", pics_v)
});
