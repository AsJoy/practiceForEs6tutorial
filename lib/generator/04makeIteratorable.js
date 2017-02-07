"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by niuyuanqiang on 16/8/3.
 */

// 方法一
var mkIterator = regeneratorRuntime.mark(function mkIterator(obj) {
  var keys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

  return regeneratorRuntime.wrap(function mkIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          keys = Object.keys(obj);
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;
          _iterator = keys[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 13;
            break;
          }

          item = _step.value;
          _context.next = 10;
          return [item, obj[item]];

        case 10:
          _iteratorNormalCompletion = true;
          _context.next = 6;
          break;

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 19:
          _context.prev = 19;
          _context.prev = 20;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 22:
          _context.prev = 22;

          if (!_didIteratorError) {
            _context.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context.finish(22);

        case 26:
          return _context.finish(19);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, mkIterator, this, [[4, 15, 19, 27], [20,, 22, 26]]);
});

var obj = { a: 1, b: 2 };
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = mkIterator(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _step2$value = _slicedToArray(_step2.value, 2),
        key = _step2$value[0],
        value = _step2$value[1];

    console.log(key, value);
  }

  // 方法二
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

var mkIt = regeneratorRuntime.mark(function mkIt() {
  var keys, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

  return regeneratorRuntime.wrap(function mkIt$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          keys = Object.keys(this);
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context2.prev = 4;
          _iterator3 = keys[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context2.next = 13;
            break;
          }

          item = _step3.value;
          _context2.next = 10;
          return [item, this[item]];

        case 10:
          _iteratorNormalCompletion3 = true;
          _context2.next = 6;
          break;

        case 13:
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](4);
          _didIteratorError3 = true;
          _iteratorError3 = _context2.t0;

        case 19:
          _context2.prev = 19;
          _context2.prev = 20;

          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }

        case 22:
          _context2.prev = 22;

          if (!_didIteratorError3) {
            _context2.next = 25;
            break;
          }

          throw _iteratorError3;

        case 25:
          return _context2.finish(22);

        case 26:
          return _context2.finish(19);

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  }, mkIt, this, [[4, 15, 19, 27], [20,, 22, 26]]);
});
obj[Symbol.iterator] = mkIt;
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = obj[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var _step4$value = _slicedToArray(_step4.value, 2),
        key = _step4$value[0],
        value = _step4$value[1];

    console.log(key, value);
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}