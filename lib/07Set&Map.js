'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('===========================Set 与map======================');
var hello = 'hello',
    world = 'world',
    json = 'json';

var oSet = new Set();
oSet.add(hello);
oSet.add(world);
oSet.add(json);
console.log('size ' + oSet.size);
console.log(oSet.has(world));
oSet.delete(hello);
console.log([].concat(_toConsumableArray(oSet)));

console.log('遍历：');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = oSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

console.log('获取下标 / 其实他的key值与value值相等');
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = oSet.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _step2$value = _slicedToArray(_step2.value, 2),
		    key = _step2$value[0],
		    _val = _step2$value[1];

		console.log(key, _val);
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

oSet.forEach(function (val, key) {
	console.log(val, key);
});

console.log('用法 数组去重');
console.log([].concat(_toConsumableArray(new Set([1, 2, 3, 4, 5, 1, 2, 3, 4]))));

console.log('或者');
console.log(Array.from(new Set([1, 2, 3, 4, 5, 1, 2])));

console.log('WeakSet：（weakSet不会对add的对象产生引用 ， 不能被遍历， 可以用来做一些逻辑上的判断）');

var weaks = new WeakSet();

var A = function () {
	function A() {
		_classCallCheck(this, A);

		weaks.add(this);
	}

	_createClass(A, [{
		key: 'foo',
		value: function foo() {
			if (!weaks.has(this)) {
				throw new Error('只能A类调用');
			}
		}
	}]);

	return A;
}();

var myA = new A();

myA.foo();

try {
	A.prototype.foo();
} catch (e) {
	console.log(e.message);
}

console.log('Map： 和Set基本一致');

var map = new Map();
map = new Map([[1, true], ['hi', 'world']]);
map.set('foo', true);
map.set('bar', false);

console.log(map.has(1));
map.delete(1);
console.log(map.has(1));
map.size; // 2

console.log([].concat(_toConsumableArray(map)));
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = map.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var key = _step3.value;

		console.log(key);
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