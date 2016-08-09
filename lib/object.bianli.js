'use strict';

var _obts;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var obts = (_obts = {
  name: 123
}, _defineProperty(_obts, new Symbol(), 'hello'), _defineProperty(_obts, 'age', '123'), _defineProperty(_obts, 'sex', 'nv'), _obts);

console.log(obts);