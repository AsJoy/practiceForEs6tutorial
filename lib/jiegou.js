'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

console.log('-------------------------解构---------------------------------');

console.log('*********************************');
var bar = [1, 2, 3, 4];
var a = bar[0],
    b = bar[1],
    state = bar.slice(2);

// 数组解构的实质是解构特殊的对象

var copyA = bar[0],
    copyB = bar[1],
    copyState = _objectWithoutProperties(bar, [0, 1]);

console.log('a is ' + a + ', b is ' + b + ' , state is ' + state);
console.log('copyA is ' + copyA + ', copyB is ' + copyB + ' , copyState is ' + JSON.stringify(copyState));

var foo = { name: 'foo', patern: {
		sex: 'nan',
		age: 1
	} };

var fooName = foo.name,
    _foo$patern = foo.patern,
    sex = _foo$patern.sex,
    _foo$patern$size = _foo$patern.size,
    size = _foo$patern$size === undefined ? 'mid' : _foo$patern$size;


console.log('fooName is ' + fooName + ', name is undefined and patern is undefined, sex is ' + sex + ', size is ' + size);

console.log('*********************************');

console.log('-------------------------usage---------------------------------');

console.log('*************对象交换******************');

var _ref = [1, 2][(fooY, fooX)] = [fooX, fooY],
    _ref2 = _slicedToArray(_ref, 2),
    fooX = _ref2[0],
    fooY = _ref2[1];

console.log('[fooY, fooX] = [fooX, fooY] : fooX is ' + fooX + ', fooY is ' + fooY);

console.log('****************模块加载********************');

var _require = require("fs"),
    open = _require.open;

console.log('***************遍历map对象*****************');

var map = new Map();
map.set('name', 'hello');
map.set('nickName', 'world');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _step$value = _slicedToArray(_step.value, 2),
		    key = _step$value[0],
		    value = _step$value[1];

		console.log('key is ' + key + ', values is ' + value);
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _step2$value = _slicedToArray(_step2.value, 1),
		    key = _step2$value[0];

		console.log('key is ' + key);
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

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _step3$value = _slicedToArray(_step3.value, 2),
		    value = _step3$value[1];

		console.log('value is ' + value);
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

console.log('************函数参数的默认值***************');

function fnFoo(_ref3) {
	var _ref4 = _slicedToArray(_ref3, 2),
	    _ref4$ = _ref4[0],
	    a = _ref4$ === undefined ? 12 : _ref4$,
	    _ref4$2 = _ref4[1],
	    b = _ref4$2 === undefined ? 22 : _ref4$2;

	console.log('a is ' + a + ', b is ' + b);
}

fnFoo([a]);
console.log('************提取JSON数据******************');
var sinx = Math.sin,
    cosx = Math.cos;

console.log('type of sin is ' + (typeof sinx === 'undefined' ? 'undefined' : _typeof(sinx)) + ' typeof cos is ' + (typeof cosx === 'undefined' ? 'undefined' : _typeof(cosx)));

console.log('************函数定义*********************');
function testFoo(_ref5) {
	var _ref6 = _slicedToArray(_ref5, 2),
	    a = _ref6[0],
	    b = _ref6[1];

	console.log(a + ' + ' + b + ' = ' + (a + b));
}

testFoo([2, 4]);