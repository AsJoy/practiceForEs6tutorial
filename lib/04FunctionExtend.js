'use strict';

var _console, _console2, _console3;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('==========================函数扩展====================');
console.log('解构设置默认值');

function fFn(_ref) {
	var bar = _ref.bar,
	    _ref$foo = _ref.foo,
	    fa = _ref$foo === undefined ? 'hello' : _ref$foo;

	console.log(bar, fa);
}
fFn({ bar: 1323 });

console.log('非尾部的参数设置了默认值不能被省略');
function f() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var y = arguments[1];

	return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined])
// f(, 1) // 报错

console.log('设置了默认值与rest参数的参数不占用length的长度');

console.log('********应用**********');

console.log('设置参数不能为空');

function throwIfMiss() {
	throw new Error('缺少参数');
}

function ffoo1() {
	var shouldProvided = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : throwIfMiss();

	console.log(shouldProvided);
}

try {
	ffoo1();
} catch (e) {
	console.warn('error: ' + e.message + ' ');
}

console.log('rest 参数 用于获取多余的函数 是一个数组');
function fFoo2() {
	for (var _len = arguments.length, aObj = Array(_len), _key = 0; _key < _len; _key++) {
		aObj[_key] = arguments[_key];
	}

	console.log(aObj);
}

fFoo2(1, 2, 3, 5);

console.log('扩展运算符：... 将具有iterator接口的对象转为逗号分隔的参数序列');

(_console = console).log.apply(_console, [1, 2, 3]);

console.log('部署了interator接口的对象都可以使用... 运算符');

var oMap = new Map();
oMap.set('1', 'qe');
oMap.set('3', 'qe');

(_console2 = console).log.apply(_console2, _toConsumableArray(oMap));

var oSet = new Set();
oSet.add('hello');
oSet.add('world');
(_console3 = console).log.apply(_console3, _toConsumableArray(oSet));
function fFun4(a, b, c) {
	console.log(a, b, c);
	console.log([].concat(Array.prototype.slice.call(arguments)));
}

fFun4.apply(undefined, [1, 2, 3]);

console.log('箭头函数：');
console.log('箭头函数没有自己的this，它的this指向他当前所在的context，所以箭头函数本身不能够作为构造函数');
var fFoo3 = function fFoo3(argument) {
	console.log(argument);
};

fFoo3('arraw function');

console.log('::绑定this:');
console.log('返回原函数所以支持链式操作');

var personFun = {
	say: function say() {
		console.log(this.name);
	},
	age: function age() {
		console.log(this.age);
	}
};

var oPer = {
	name: 'Bar',
	age: 123
};

personFun.age.call(oPer);

console.log('name:');
var fFoo5 = function fFoo5() {};
var fFoo6 = fFoo5;
console.log('fFoo5.name is' + fFoo6.name + (' fFoo6.name is ' + fFoo6.name));

console.log('es6提供尾调用优化');

console.log('尾调用定义：');

// 下列函数是一个尾调用
console.log('参考：http://es6.ruanyifeng.com/#docs/function#尾调用优化');
function fnFinalCall(argument) {
	console.log('尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。');
	function fn1(argument) {}
	return fn();
}

console.log('尾递归改造递归');
// 非尾递归 非常耗内存
function sumAll(index) {
	if (index === 1) return 1;
	return index + sumAll(index - 1);
}

console.log('非尾递归' + sumAll(1000));

// 尾递归
function sumAllFinalCall(index, sum) {
	if (index === 1) return sum + 1;
	return sumAllFinalCall(index - 1, sum + index);
}
console.log('尾递归调用' + sumAllFinalCall(1000, 0));

console.log('蹦床函数（trampoline）改造递归为循环减少call stack 兼容es6以下: ');

function trampoline(fn) {
	while (fn && fn instanceof Function) {
		fn = fn();
	}
	return fn;
}
function sumAllFinalCall1(index, sum) {
	if (index === 1) return sum + 1;
	return sumAllFinalCall1.bind(null, index - 1, sum + index);
}

console.log(trampoline(sumAllFinalCall1(1000, 0)));