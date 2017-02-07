'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('regenerator-runtime/runtime');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var foo = Symbol('foo');
console.log(foo);

console.log('Symbol(\'obj\') === Symbol(\'obj\') = ' + (Symbol('obj') === Symbol('obj')));

console.log('单例模式');

var FUNC_NAME = Symbol('func');

function func() {}

if (global[FUNC_NAME]) {
	global[FUNC_NAME] = func;
}

module.exports = func;

console.log('全局symbol');

console.log('Symbol.for(\'foo\') = ' + Symbol.for('foo').toString());

console.log('Symbol.for(\'foo\') === Symbol.for(\'foo\') is ' + (Symbol.for('foo') === Symbol.for('foo')));

console.log('Symbol.iterator');

var oBar = {};
oBar[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
	return regeneratorRuntime.wrap(function _callee$(_context) {
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
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
});

console.log([].concat(_toConsumableArray(oBar)));

var A = function () {
	function A() {
		_classCallCheck(this, A);
	}

	_createClass(A, [{
		key: Symbol.iterator,
		value: regeneratorRuntime.mark(function value() {
			return regeneratorRuntime.wrap(function value$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return 1;

						case 2:
							_context2.next = 4;
							return 1;

						case 4:
							_context2.next = 6;
							return 1;

						case 6:
							_context2.next = 8;
							return 1;

						case 8:
							_context2.next = 10;
							return 1;

						case 10:
						case 'end':
							return _context2.stop();
					}
				}
			}, value, this);
		})
	}]);

	return A;
}();

var myA = new A();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = myA[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var val = _step.value;

		console.log(val);
	}
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