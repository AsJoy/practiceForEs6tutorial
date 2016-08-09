'use strict';

var _marked = [generator].map(regeneratorRuntime.mark);

/**
 * Created by niuyuanqiang on 16/8/4.
 */

function generator() {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return 1;

        case 3:
          _context.next = 5;
          return 2;

        case 5:
          _context.next = 7;
          return 3;

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](0);

          // 捕获异常
          console.log(_context.t0);

        case 12:
          throw new Error('some error');

        case 15:
          return _context.abrupt('return', 'down');

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 9]]);
}

var ge = generator();
ge.next();
ge.next();
// 跑出异常 停止执行
// ge.throw('the end');

console.log(ge.next());

//外部捕获不会跑出异常
try {
  console.log(ge.next());
} catch (e) {
  console.log(e);
}
console.log(ge.next());