"use strict";

/**
 * Created by niuyuanqiang on 16/8/4.
 */

var generator = regeneratorRuntime.mark(function generator(a, b) {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(this); // undefined
          this.b = b;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, generator, this);
});

var ge = generator();

// this
try {
  ge.next(); // 报错
} catch (e) {
  console.log(e);
}

// bind this 的方法 可以通过call函数
var gt = regeneratorRuntime.mark(function gt() {
  return regeneratorRuntime.wrap(function gt$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          this.a = 0;

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, gt, this);
});

var g = gt.call(gt.prototype);
g.next();
console.log(g.a);