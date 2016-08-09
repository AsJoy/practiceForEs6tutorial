"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var a = 1;
var b = 2;
var c = 3;
var a = 1;
var b = 2;
var c = [3, 4];


function gn() {
  console.log(123);
}
// 惰性加载 当  x 取到值时 gn() 不会运行
var _ = 123;
var x = _ === undefined ? gn() : _;
//  当赋值失败时 设置默认错误属性

var _ref = {};
var _ref$message = _ref.message;
var msg = _ref$message === undefined ? "Something went wrong" : _ref$message;

console.log(msg);

var log = Math.log;
var sin = Math.sin;
var cos = Math.cos;

console.log(sin(100));

var _hello = "hello";

var _hello2 = _toArray(_hello);

var a = _hello2[0];

var b = _hello2.slice(1);

var _ref2 = [b, a];
a = _ref2[0];
b = _ref2[1];

var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
var data = jsonData.data;
var status = jsonData.status;
var id = jsonData.id;

gn.ajax = function (url, _ref3) {
  var _ref3$async = _ref3.async;
  var async = _ref3$async === undefined ? true : _ref3$async;
};

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2);

    var _key = _step$value[0];
    var value = _step$value[1];

    console.log(_key + " is " + value);
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

console.log(key);

window.onerror = function (e) {
  alert(JSON.stringify(e));
};