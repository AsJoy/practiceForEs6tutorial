'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('======================decorator====================');
function addPro(name, value) {
	return function (target) {
		target[name] = value;
	};
}

var A = (_dec = addPro('hello', 'world'), _dec(_class = function A() {
	_classCallCheck(this, A);
}) || _class);


console.log(A.hello);

function readonly(target, name, descripter) {
	console.log(descripter.value);

	// descriptor对象原来的值如下
	// {
	//   value: specifiedFunction,
	//   enumerable: false,
	//   configurable: true,
	//   writable: true
	// };
	descripter.writable = false;
	console.log('set success');
}

var B = (_class2 = function () {
	function B() {
		_classCallCheck(this, B);
	}

	_createClass(B, [{
		key: 'say',
		value: function say() {
			console.log('hello world');
		}
	}]);

	return B;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'say', [readonly], Object.getOwnPropertyDescriptor(_class2.prototype, 'say'), _class2.prototype)), _class2);


var b = new B();

b.say();

console.log('不能直接用在函数上面 因为函数存在变量提生');