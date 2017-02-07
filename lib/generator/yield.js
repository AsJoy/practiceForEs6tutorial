'use strict';

var _marked = [generator].map(regeneratorRuntime.mark);

/**
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