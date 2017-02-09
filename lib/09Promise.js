'use strict';

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('=============异步如理之Promise=================');

console.log('setTimeout');

var timer = function timer(duration) {
	return new Promise(function (resolve, reject) {
		console.log(duration);
		setTimeout(resolve, duration);
	});
};

timer(1000).then(function () {
	return timer(2000);
}).then(function () {
	throw new Error('call stack accur');
}).catch(function (e) {
	console.log(e.message);
});

var Image = function (_EventEmitter) {
	_inherits(Image, _EventEmitter);

	function Image() {
		var _ref;

		_classCallCheck(this, Image);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args)));

		setTimeout(function () {
			_this.emit('load', 123);
		}, 4000);
		return _this;
	}

	return Image;
}(_events2.default);

var loadImag = function loadImag() {
	return new Promise(function (resolve, reject) {
		var image = new Image();
		image.on('load', resolve);
	});
};

loadImag().then(function (data) {
	console.log('success' + data);
}).catch(function (e) {
	console.log(e.message);
});

try {
	var h = y + z;
} catch (e) {
	console.log(e.message);
}

console.log('resolve && reject:');

var oPro = Promise.resolve('hello');
oPro.then(function (data) {
	console.log('hello 作为resolve参数' + data);
}).catch(function (e) {
	console.log(e.message);
});

oPro = Promise.resolve({
	then: function then(res, rej) {
		// res('worold 1')
		console.log(132123123);
		rej('if error');
	}
});

oPro.then(function (data) {
	console.log('当传入对象有then方法时 执行then', data);
}).catch(function (e) {
	console.log(e);
});

var aPros = [1, 1, 1, 1, 1, 1].map(function (value, index) {
	return loadImag();
});

console.log('all： 所有执行成功之后执行Promise');
Promise.all(aPros).then(function (data) {
	console.log(data);
}).catch(function (e) {
	console.log(e);
}).then(function () {
	console.log('catch之后仍会执行');
});

console.log('race: 第一个成功的对象');
Promise.race(aPros).then(function (data) {
	console.log('race返回参数' + data);
}).catch(function (e) {
	console.log(e);
});

console.log("race's usage: ");
console.log('1. 设置timeout');

var fetch = function fetch(url) {
	return new Promise(function (res, rej) {
		setTimeout(res, 5000);
	});
};
var aPro1s = [fetch('url'), new Promise(function (res, rej) {
	setTimeout(rej, 4000);
})];

Promise.race(aPro1s).then(function (data) {
	console.log('fetch: ' + data);
}).catch(function (e) {
	console.log('fetch error :' + e);
});