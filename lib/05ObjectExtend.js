'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _wheels, _wheels2, _oP, _mutatorMap, _console;

require('regenerator-runtime/runtime');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = [entries].map(regeneratorRuntime.mark);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('==========================对象扩展====================');

console.log('属性简介表达');

var iBar = 1;
var iFoo = 2;

var oPerson = { iBar: iBar, iFoo: iFoo };

var oP = (_oP = {
	name: '13'
}, _defineProperty(_oP, iBar + 'hello', function () {
	console.log(1);
}), _defineProperty(_oP, iFoo + 'hello', function () {
	console.log(2);
}), _defineProperty(_oP, iBar + 'world', function () {
	console.log(3);
}), _wheels = 'wheels', _mutatorMap = {}, _mutatorMap[_wheels] = _mutatorMap[_wheels] || {}, _mutatorMap[_wheels].get = function () {
	console.log(this);
	return this.name;
}, _wheels2 = 'wheels', _mutatorMap[_wheels2] = _mutatorMap[_wheels2] || {}, _mutatorMap[_wheels2].set = function (val) {
	this.name = val;
}, _defineEnumerableProperties(_oP, _mutatorMap), _oP);

oP[iBar + 'world']();
oP.wheels = 20;
console.log(oP.wheels);

console.log('Object.is: (基本与===行为一致 除了Object.is(NaN, NaN) 返回true 与 Object.is(+0, -0) 返回false )');

console.log('Object.is(NaN,NaN) = ' + Object.is(NaN, NaN));
console.log('Object.is(+0,-0) = ' + Object.is(+0, -0));

console.log('Object.assign()会讲扩展后的对象赋给第一个参数');
var oBar = { a: 1 };
var oRs = Object.assign({}, oBar, { b: 2 }, { c: 4 });
console.log(oRs, oBar);
console.log(Object.assign([1, 2, 3], [4]));
console.log('assign用途：');

console.log('为对象添加属性');

var Point = function Point(x) {
	_classCallCheck(this, Point);

	Object.assign(this, { x: x });
};

console.log('对对象添加方法');

function fFoo(argument) {
	// body...
}
Object.assign(fFoo.prototype, {
	hello: function hello() {}
});

console.log('克隆对象');
function clone(argument) {
	return Object.assign({}, argument);
}

console.log('指定默认值');
function fFoo1(option) {
	var Default = {
		size: 18
	};

	option = Object.assign({}, Default, option);
}

console.log('keys values entries: ');

var obj = {
	name: 1,
	age: 2
};

console.log('Object.keys(obj) = ' + Object.keys(obj));
console.log('Object.values(obj) = ' + Object.values(obj));
console.log('Object.entries(obj) = ' + Object.entries(obj)[0]);

console.log('使用entries将Object转为Map');
var oMap = new Map(Object.entries(obj));
console.log(oMap.entries());

console.log('entries垫片');

function entries(obj) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

	return regeneratorRuntime.wrap(function entries$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = Object.keys(obj)[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 12;
						break;
					}

					key = _step.value;
					_context.next = 9;
					return [key, obj[key]];

				case 9:
					_iteratorNormalCompletion = true;
					_context.next = 5;
					break;

				case 12:
					_context.next = 18;
					break;

				case 14:
					_context.prev = 14;
					_context.t0 = _context['catch'](3);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 18:
					_context.prev = 18;
					_context.prev = 19;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 21:
					_context.prev = 21;

					if (!_didIteratorError) {
						_context.next = 24;
						break;
					}

					throw _iteratorError;

				case 24:
					return _context.finish(21);

				case 25:
					return _context.finish(18);

				case 26:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

(_console = console).log.apply(_console, _toConsumableArray(entries(obj)));

console.log('扩展运算符...：');

var name = obj.name,
    age = _objectWithoutProperties(obj, ['name']);

console.log(name, age);

console.log('扩展运算符做属性覆盖');

var objC = _extends({}, obj, {
	name: 2,
	sex: 'man'
});

console.log(objC);