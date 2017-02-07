'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('=======================数组扩展======================');

console.log('from :');

var oB = {
	0: 'hello',
	1: 'world',
	length: 2
};

// 只要部署了Symbal.iterator  就可以调用 Array.from
// 包括了 document.querySelectorAll  arguments等
var oR = Array.from(oB);

console.log('[].slice.call = ' + [].slice.call(oB, 0));

console.log('oR = ' + oR + ' oB = ' + oB);

console.log('string is ' + Array.from('hello world'));

console.log('Set 对象转为数组: ');
var oSet = new Set([1, 2, 'a']);
console.log('oSet = ' + Array.from(oSet));

console.log('...扩展运算符:');

console.log('... \u4E5F\u53EF\u4EE5\u8F6C\u4E3A\u6570\u7EC4 oSet = ' + [].concat(_toConsumableArray(oSet)));

console.log('copyWithin:');

console.log('[1,2,3,4,5].copyWithin(0,3) = ' + [1, 2, 3, 4, 5].copyWithin(0, 3));

console.log('find & findIndex : 解决indexof NaN = NaN');

console.log('[1,2,3,4,5].find(n => n > 3) = ' + [1, 2, 3, 4, 5].find(function (n) {
	return n > 3;
}));

console.log('[1,2,3,NaN,5].find(n => Object.is(NaN, n)) = ' + [1, 2, 3, NaN, 5].find(function (n) {
	return Object.is(NaN, n);
}));
console.log('[1,2,3,NaN,5].findIndex(n => Object.is(NaN, n)) = ' + [1, 2, 3, NaN, 5].findIndex(function (n) {
	return Object.is(NaN, n);
}));
console.log('');
console.log('fill: ');
console.log('Array(10).fill(7) is ' + Array(10).fill(7));

console.log('entries() & keys & values()');
var aFoo = ['a', 'b'];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = aFoo.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var val = _step.value;

		console.log(val);
	}
	// values 方法不支持
	// for (let val of ["a", "b", "c"].values()) {
	// 	console.log(val)
	// }
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
	for (var _iterator2 = aFoo.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _step2$value = _slicedToArray(_step2.value, 2),
		    key = _step2$value[0],
		    value = _step2$value[1];

		console.log(key, value);
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

console.log('includes: 解决NaN问题');

console.log('[1, 2,NaN,4].includes(3) is ' + [1, 2, NaN, 4].includes(NaN));