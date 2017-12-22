process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function hashMap(a, target) {
  var map = new Map();
  for (var i = 0; i < a.length; i++) {
    map.set(a[i], i);
  }
  for (var i = 0; i < a.length; i++) {
    var complement = target - a[i];
    if(map.has(complement) && map.get(complement) != i && i < map.get(complement)) {
      console.log((i+1) + ' ' + (map.get(complement) + 1));
    }
  }
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);
        hashMap(a, m);
    }
}