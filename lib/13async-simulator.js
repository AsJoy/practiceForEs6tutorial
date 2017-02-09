'use strict';

require('regenerator-runtime/runtime');

var fs = require('fs');

console.log('使用generator模拟async：');

function byAsync(gen3) {
	return new Promise(function (resolve, reject) {
		var oGen = gen3();
		console.log('to generator');
		function nextStep(next) {
			if (next.done) {
				return resolve(next.value);
			}
			Promise.resolve(next.value).then(function (data) {
				nextStep(oGen.next(data));
			}).catch(function (e) {
				console.log('occur error');
				reject(e);
			});
		}
		nextStep(oGen.next());
	});
}

var readFile1 = function readFile1(fileName) {
	return new Promise(function (res, rej) {
		fs.readFile(fileName, function (err, data) {
			if (err) rej(err);
			res(data);
		});
	});
};

byAsync(regeneratorRuntime.mark(function _callee() {
	var data, data1;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return readFile1('../package.json');

				case 2:
					data = _context.sent;
					_context.next = 5;
					return readFile1('../.babelrc');

				case 5:
					data1 = _context.sent;

					console.log(data + '', data1 + '');

				case 7:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
})).catch(function (e) {
	console.log(e);
});