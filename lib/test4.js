'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

process.stdin.on('data', function (data) {
  var rs = resume(data.split("\n")[0]);
  console.log(rs);
});

function resume(str) {
  var arr = Array.from(str);
  var l = 0;
  var r = 0;
  var rs = [];
  for (var k = 0; k < arr.length - 1; k++) {
    //
    var left = getLeft(arr, k + 1);
    var right = getRight(arr, k + 1);
    var dis = right - left;
    if (dis > r - l) {
      l = left;
      r = right;
      rs = arr.slice(l, r);
    }
  }
  return rs.length;
}
function getLeft(arr, k) {
  var left = k;
  for (var i = k - 1; i > 0; i--) {
    var ar = arr.slice(i, k);
    var count0 = geti(ar, '0');
    var count1 = geti(ar, '1');
    if (count0 > count1) {
      left = i;
    }
  }
  return left;
}
function getRight(arr, k) {
  var right = k;
  for (var i = k + 1; i <= arr.length; i++) {
    var ar = arr.slice(k, i);
    // console.log(ar)
    var count0 = geti(ar, '0');
    var count1 = geti(ar, '1');
    if (count0 < count1) {
      right = i;
    }
  }
  return right;
}
function geti(arr, i) {
  return arr.filter(function (item) {
    return i === item;
  }).length;
}