'use strict';

/**
 * Created by niuyuanqiang on 16/8/3.
 */

// 这时候的generator的yield 执行顺序是次要的
var wrapper = function wrapper(generatorFun) {
  return function () {
    var generatorObj = new generatorFun();
    generatorObj.next();
    return generatorObj;
  };
};

var generator = wrapper(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = console;
          _context.next = 3;
          return;

        case 3:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

generator().next('hello');