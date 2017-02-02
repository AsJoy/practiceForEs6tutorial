'use strict';

require('regenerator-runtime/runtime');

var _marked = [generator, foo].map(regeneratorRuntime.mark); /**
                                                              * Created by niuyuanqiang on 16/8/3.
                                                              */

function generator(x, y) {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return x;

        case 2:
          _context.next = 4;
          return y;

        case 4:
          return _context.abrupt('return', 'the end');

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
var ge = generator();
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());

var ge1 = regeneratorRuntime.mark(function ge1() {
  var i;
  return regeneratorRuntime.wrap(function ge1$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          i = 1;

        case 1:
          if (!(i < 100)) {
            _context2.next = 11;
            break;
          }

          _context2.t0 = console;
          _context2.next = 5;
          return i;

        case 5:
          _context2.t1 = _context2.sent;

          _context2.t0.log.call(_context2.t0, _context2.t1);

          console.log('hello ' + i);

        case 8:
          i++;
          _context2.next = 1;
          break;

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, ge1, this);
});

ge = ge1();
ge.next();
ge.next('a');
ge.next('b');
ge.next('c');
ge.next('d');

function foo(x) {
  var y, z;
  return regeneratorRuntime.wrap(function foo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return x + 1;

        case 2:
          _context3.t0 = _context3.sent;
          y = 2 * _context3.t0;
          _context3.next = 6;
          return y / 3;

        case 6:
          z = _context3.sent;
          return _context3.abrupt('return', x + y + z);

        case 8:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[1], this);
}

var a = foo(5);
a.next(); // Object{value:6, done:false}
a.next(); // Object{value:NaN, done:false}
a.next(); // Object{value:NaN, done:true}

var b = foo(5);
b.next(); // { value:6, done:false }
b.next(12); // { value:8, done:false }
b.next(13); // { value:42, done:true }