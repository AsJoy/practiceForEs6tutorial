'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

process.stdin.on('data', function (data) {
  var length = sort(data.split("\n")[0]);
  console.log(length);
});

function sort(a) {
  var list = [];
  for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
      var str = a;
      str = str.slice(0, i) + str.slice(i + 1, j) + str.slice(j + 1, a.length);
      console.log(str);
      list.push(str);
    }
  }
  var result = unique(list);
  return result.length;
}

function unique(data) {
  return Array.from(new Set(data));
}