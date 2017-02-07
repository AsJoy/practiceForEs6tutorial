"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by niuyuanqiang on 16/8/3.
 */

var generator = regeneratorRuntime.mark(function generator() {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 1;

        case 4:
          _context.next = 6;
          return 1;

        case 6:
          _context.next = 8;
          return 1;

        case 8:
          _context.next = 10;
          return 1;

        case 10:
          _context.next = 12;
          return 1;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, generator, this);
});
console.log([].concat(_toConsumableArray(generator())));

// for...of循环、扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。这意味着，它们可以将Generator函数返回的Iterator对象，作为参数。