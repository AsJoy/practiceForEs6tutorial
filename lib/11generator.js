'use strict';

var _console;

require('regenerator-runtime/runtime');

var _thunkify = require('thunkify');

var _thunkify2 = _interopRequireDefault(_thunkify);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = [mkGt, dataConsumer, gen1, foo, bar, inner, outer1, outer2, gen2, iterTree, gen3, F, iniPage, iterateSteps].map(regeneratorRuntime.mark);

console.log('=================================generator==========================');

function mkGt(x) {
  var y;
  return regeneratorRuntime.wrap(function mkGt$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return x + 1;

        case 2:
          _context.t0 = _context.sent;
          y = 2 * _context.t0;
          return _context.abrupt('return', 2);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var oMkGt = mkGt(1);

console.log(oMkGt.next());
console.log(oMkGt.next());
console.log(oMkGt.next());

function dataConsumer() {
  return regeneratorRuntime.wrap(function dataConsumer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Started');
          _context2.t0 = console;
          _context2.next = 4;
          return 1;

        case 4:
          _context2.t1 = _context2.sent;
          _context2.t2 = '1. ' + _context2.t1;

          _context2.t0.log.call(_context2.t0, _context2.t2);

          _context2.t3 = console;
          _context2.next = 10;
          return 2;

        case 10:
          _context2.t4 = _context2.sent;
          _context2.t5 = '2. ' + _context2.t4;

          _context2.t3.log.call(_context2.t3, _context2.t5);

          return _context2.abrupt('return', 'result');

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

var genObj = dataConsumer();
console.log(genObj.next());
// Started
console.log(genObj.next('a'));
// 1. a
console.log(genObj.next('b'));
// 2. b


var g = regeneratorRuntime.mark(function g() {
  return regeneratorRuntime.wrap(function g$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return;

        case 3:
          _context3.next = 8;
          break;

        case 5:
          _context3.prev = 5;
          _context3.t0 = _context3['catch'](0);

          console.log('内部捕获', _context3.t0);

        case 8:
        case 'end':
          return _context3.stop();
      }
    }
  }, g, this, [[0, 5]]);
});

var i = g();
i.next();
i.throw('a');
try {
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
// 上面代码中，遍历


var gen = regeneratorRuntime.mark(function gen() {
  return regeneratorRuntime.wrap(function gen$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return console.log('a');

        case 3:
          _context4.next = 7;
          break;

        case 5:
          _context4.prev = 5;
          _context4.t0 = _context4['catch'](0);

        case 7:
          _context4.next = 9;
          return console.log('b');

        case 9:
          _context4.next = 11;
          return console.log('c');

        case 11:
        case 'end':
          return _context4.stop();
      }
    }
  }, gen, this, [[0, 5]]);
});

var g = gen();
g.next(); // a
g.throw(); // b
g.next(); // c


function gen1() {
  return regeneratorRuntime.wrap(function gen1$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return 1;

        case 2:
          _context5.next = 4;
          return 2;

        case 4:
          _context5.next = 6;
          return 3;

        case 6:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[2], this);
}

var g = gen1();

g.next(); // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }


console.log('yield *: 只要具有iterator接口 就可以被遍历');
function foo(argument) {
  return regeneratorRuntime.wrap(function foo$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return 1;

        case 2:
          _context6.next = 4;
          return 1;

        case 4:
          _context6.next = 6;
          return 1;

        case 6:
          _context6.next = 8;
          return 1;

        case 8:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[3], this);
}
function bar() {
  return regeneratorRuntime.wrap(function bar$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return 'x';

        case 2:
          return _context7.delegateYield(foo(), 't0', 3);

        case 3:
          _context7.next = 5;
          return 'y';

        case 5:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[4], this);
}

(_console = console).log.apply(_console, _toConsumableArray(bar()));

function inner() {
  return regeneratorRuntime.wrap(function inner$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return 'hello!';

        case 2:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[5], this);
}

function outer1() {
  return regeneratorRuntime.wrap(function outer1$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return 'open';

        case 2:
          _context9.next = 4;
          return inner();

        case 4:
          _context9.next = 6;
          return 'close';

        case 6:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked[6], this);
}

var gen = outer1();
gen.next().value; // "open"
gen.next().value; // 返回一个遍历器对象
gen.next().value; // "close"

function outer2() {
  return regeneratorRuntime.wrap(function outer2$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return 'open';

        case 2:
          return _context10.delegateYield(inner(), 't0', 3);

        case 3:
          _context10.next = 5;
          return 'close';

        case 5:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked[7], this);
}

var gen = outer2();
gen.next().value; // "open"
gen.next().value; // "hello!"
gen.next().value; // "close"


var delegatedIterator = regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return 'Hello!';

        case 2:
          _context11.next = 4;
          return 'Bye!';

        case 4:
        case 'end':
          return _context11.stop();
      }
    }
  }, _callee, this);
})();

var delegatingIterator = regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return 'Greetings!';

        case 2:
          return _context12.delegateYield(delegatedIterator, 't0', 3);

        case 3:
          _context12.next = 5;
          return 'Ok, bye.';

        case 5:
        case 'end':
          return _context12.stop();
      }
    }
  }, _callee2, this);
})();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = delegatingIterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log(value);
  }
  // "Greetings!
  // "Hello!"
  // "Bye!"
  // "Ok, bye.

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

function gen2() {
  return regeneratorRuntime.wrap(function gen2$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          return _context13.delegateYield(["a", "b", "c"], 't0', 1);

        case 1:
        case 'end':
          return _context13.stop();
      }
    }
  }, _marked[8], this);
}

gen2().next(); // { value:"a", done:false }


console.log('generator 可以很好的处理深层遍历');

function iterTree(tree) {
  var _i;

  return regeneratorRuntime.wrap(function iterTree$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          if (!Array.isArray(tree)) {
            _context14.next = 9;
            break;
          }

          _i = 0;

        case 2:
          if (!(_i < tree.length)) {
            _context14.next = 7;
            break;
          }

          return _context14.delegateYield(iterTree(tree[_i]), 't0', 4);

        case 4:
          _i++;
          _context14.next = 2;
          break;

        case 7:
          _context14.next = 11;
          break;

        case 9:
          _context14.next = 11;
          return tree;

        case 11:
        case 'end':
          return _context14.stop();
      }
    }
  }, _marked[9], this);
}

var tree = ['a', ['b', 'c'], ['d', 'e']];

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = iterTree(tree)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var x = _step2.value;

    console.log(x);
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

console.log('异常处理：');
function gen3(x) {
  var y;
  return regeneratorRuntime.wrap(function gen3$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return x + 2;

        case 3:
          y = _context15.sent;
          _context15.next = 9;
          break;

        case 6:
          _context15.prev = 6;
          _context15.t0 = _context15['catch'](0);

          console.log(_context15.t0);

        case 9:
          return _context15.abrupt('return', y);

        case 10:
        case 'end':
          return _context15.stop();
      }
    }
  }, _marked[10], this, [[0, 6]]);
}

var g = gen3(1);
g.next();
g.throw('出错了');

console.log('generator内部不存在this， 可以通过call 方法');

function F() {
  return regeneratorRuntime.wrap(function F$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          this.a = 1;
          _context16.next = 3;
          return this.b = 2;

        case 3:
          _context16.next = 5;
          return this.c = 3;

        case 5:
        case 'end':
          return _context16.stop();
      }
    }
  }, _marked[11], this);
}
var obj = {};
var f = F.call(obj);

f.next(); // Object {value: 2, done: false}
f.next(); // Object {value: 3, done: false}
f.next(); // Object {value: undefined, done: true}

obj.a; // 1	
obj.b; // 2
obj.c; // 3


console.log('usage:');

console.log('异步操作同步化');

function iniPage(argument) {
  var rs;
  return regeneratorRuntime.wrap(function iniPage$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return request('123');

        case 2:
          rs = _context17.sent;

          console.log(rs);

        case 4:
        case 'end':
          return _context17.stop();
      }
    }
  }, _marked[12], this);
}

function request(url) {
  setTimeout(function () {
    startRequest.next(url);
  }, 2000);
}

var startRequest = iniPage();
startRequest.next();

console.log('同步操作整合');
var steps = [request(1), request(1), request(1)];

function iterateSteps(steps) {
  var i, step;
  return regeneratorRuntime.wrap(function iterateSteps$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < steps.length)) {
            _context18.next = 8;
            break;
          }

          step = steps[i];
          _context18.next = 5;
          return step();

        case 5:
          i++;
          _context18.next = 1;
          break;

        case 8:
        case 'end':
          return _context18.stop();
      }
    }
  }, _marked[13], this);
}

console.log('部署iterator接口');

var fs = require('fs');

var read = (0, _thunkify2.default)(fs.readFile);
read('..\\package.json')(function (err, str) {
  console.log(str.toString());
});

console.log('co 大法');

var readFiles = function readFiles(path) {
  return new Promise(function (res, rej) {
    fs.readFile(path, function (err, data) {
      if (err) rej(err);
      res(data);
    });
  });
};

(0, _co2.default)(regeneratorRuntime.mark(function _callee3() {
  return regeneratorRuntime.wrap(function _callee3$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.t0 = console;
          _context19.next = 3;
          return readFiles('../.babelrc');

        case 3:
          _context19.t1 = _context19.sent;
          _context19.t2 = '' + _context19.t1;

          _context19.t0.log.call(_context19.t0, _context19.t2);

          return _context19.abrupt('return', 'co 大法好');

        case 7:
        case 'end':
          return _context19.stop();
      }
    }
  }, _callee3, this);
})).then(function (msg) {
  console.log(msg);
});