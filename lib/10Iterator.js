'use strict';

var _console, _console2;

require('regenerator-runtime/runtime');

var _marked = [setName].map(regeneratorRuntime.mark);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

console.log('==============================iterator=================');
console.log('usage：');

console.log('解构');
var oSet = new Set([1, 2, 3, 4]);

var _oSet = _toArray(oSet),
    bar = _oSet[0],
    foo = _oSet.slice(1);

console.log(bar, foo);

console.log('扩展运算符：');

(_console = console).log.apply(_console, _toConsumableArray(oSet));

console.log('yield *:');
function setName(argument) {
	return regeneratorRuntime.wrap(function setName$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 'username';

				case 2:
					_context.next = 4;
					return 'passworld';

				case 4:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

(_console2 = console).log.apply(_console2, _toConsumableArray(setName()));