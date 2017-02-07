'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 数组, 类数组, set与map 是自己实现iterator接口 可直接使用arr接口
var arr = [1, 2, 3, 4, 5, 6, 7];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log(value);
  }

  // 对象是不支持 interator接口 可以通过声明Symbol.iterator以下方式
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function a(start, end) {
  this.value = start;
  this.end = end;
}

a.prototype[Symbol.iterator] = function () {
  var context = this;
  return {
    next: function next() {
      if (context.value < context.end) {
        return {
          value: ++context.value,
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
};

var st = new a(0, 100);
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = st[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var s = _step2.value;

    console.log(s);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

console.log([].concat(_toConsumableArray(st)));

// yield
console.log('===============================================');
var generator = regeneratorRuntime.mark(function generator() {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return a = 1;

        case 2:
          return _context.delegateYield([2, 3, 1], 't0', 3);

        case 3:
          _context.next = 5;
          return { st: st };

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, generator, this);
});

var g = generator();
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = g[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var item = _step3.value;

    console.log(item);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}