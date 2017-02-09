'use strict';

require('regenerator-runtime/runtime');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

console.log('async 返回promise对象');

var fs = require('fs');

var readFile = function readFile(fileName) {
	return new Promise(function (res, rej) {
		fs.readFile(fileName, function (err, data) {
			if (err) rej(err);
			res(data);
		});
	});
};

var asyncReadFile = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var f1, f2;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return readFile('../package.json');

					case 2:
						f1 = _context.sent;
						_context.next = 5;
						return readFile('../package.json');

					case 5:
						f2 = _context.sent;

						console.log(f1.toString());
						console.log(f2.toString());

					case 8:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function asyncReadFile() {
		return _ref.apply(this, arguments);
	};
}();

var result = asyncReadFile();

function timeout(ms) {
	return new Promise(function (resolve) {
		setTimeout(resolve, ms);
	});
}

var asyncPrint1 = function () {
	var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(value, ms) {
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return timeout(ms);

					case 2:
						console.log(value);

					case 3:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function asyncPrint1(_x, _x2) {
		return _ref2.apply(this, arguments);
	};
}();

asyncPrint1('hello world', 50);

console.log('async的错误处理机制');

var f = function () {
	var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						throw new Error('出错了');

					case 1:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	}));

	return function f() {
		return _ref3.apply(this, arguments);
	};
}();

f().then(function (v) {
	return console.log(v);
}, function (e) {
	return console.log(e);
});

console.log('使用注意点：：：：：：');

console.log('await 可能被reject 所以保险起见加try catch');

var fAsync = function () {
	var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.prev = 0;
						_context4.next = 3;
						return timeout(200);

					case 3:
						_context4.next = 8;
						break;

					case 5:
						_context4.prev = 5;
						_context4.t0 = _context4['catch'](0);

						console.log(_context4.t0);

					case 8:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this, [[0, 5]]);
	}));

	return function fAsync() {
		return _ref4.apply(this, arguments);
	};
}();

console.log('处理非同步操作时 await 后使用Promise.all()');

var pro = Promise.all([timeout(200), timeout(100)]);
var fAsync1 = function () {
	var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
		return regeneratorRuntime.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.prev = 0;
						_context5.next = 3;
						return pro;

					case 3:
						_context5.next = 8;
						break;

					case 5:
						_context5.prev = 5;
						_context5.t0 = _context5['catch'](0);

						console.log(_context5.t0);

					case 8:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, this, [[0, 5]]);
	}));

	return function fAsync1() {
		return _ref5.apply(this, arguments);
	};
}();