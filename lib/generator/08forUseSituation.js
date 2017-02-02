'use strict';

// ajax 异步操作技术


function request(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/babel/test.json', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function (event) {
    qs.next(xhr.response);
  };
  xhr.send(null);
}

var main = regeneratorRuntime.mark(function main() {
  var rs;
  return regeneratorRuntime.wrap(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return request();

        case 2:
          rs = _context.sent;

          console.log(rs);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, main, this);
});

var qs = main();
qs.next();