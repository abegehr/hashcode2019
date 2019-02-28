const fs = require('fs');
const readline = require('readline');

const filename = "a_example.txt";

var rd = readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    console.log(line);
});
