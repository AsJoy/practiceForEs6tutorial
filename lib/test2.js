'use strict';

/**
 * Created by niuyuanqiang on 16/8/2.
 */

process.stdin.resume();
process.stdin.setEncoding('ascii');

process.stdin.on('data', function (data) {
  var rs = resume(data.split("\n")[0]);
  console.log(rs);
});

function resume(data) {
  var data = parseInt(data);
  for (var i = Math.floor(Math.pow(data, 0.5)); i > 0; i--) {
    if (i + i * i <= data) {
      return i;
    }
  }
}