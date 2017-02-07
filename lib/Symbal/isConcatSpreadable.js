"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by niuyuanqiang on 16/8/9.
 */
var A = function (_Array) {
  _inherits(A, _Array);

  function A() {
    _classCallCheck(this, A);

    var _this = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this));

    _this[Symbol.isConcatSpreadable] = true;
    return _this;
  }

  return A;
}(Array);

var a = new A();
a.push(1);
a.push(1);
a.push(1);

var B = function (_Array2) {
  _inherits(B, _Array2);

  function B() {
    _classCallCheck(this, B);

    var _this2 = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this));

    _this2[Symbol.isConcatSpreadable] = false;
    return _this2;
  }

  return B;
}(Array);

var b = new B();
b.push(2);
b.push(2);
b.push(2);

console.log([3].concat(a).concat(b).length);