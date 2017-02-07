'use strict';

var _wheels, _wheels2, _oP, _mutatorMap;

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