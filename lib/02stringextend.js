'use strict';

console.log('========================字符串扩展============================');
console.log('unicode 编码扩展：');
var s = "𠮷"; //unicode 码 \u20BB7
console.log('s.codePointAt(0) is ' + s.codePointAt(0) + ' ' + (String.fromCodePoint(s.codePointAt(0)) === s));

console.log('*********************字符串遍历******************************');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = 'hello'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var code = _step.value;

		console.log('the code is ' + code);
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

console.log('********************imp method******************************');

s = 'hello world!';
console.log('\n\ts.startsWith(\'hello\') is ' + s.startsWith('hello') + ' \n\ts.repeat(3) is ' + s.repeat(3) + '\n\ts.endsWith(\'!\') is ' + s.endsWith('!') + ' \n\ts.includes(\'hello\') is ' + s.includes('hello') + ' \n');