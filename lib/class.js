'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var A = function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, null, [{
    key: 'getA',

    //  需要引入babel-plugin-transform-class-properties
    // propTypes = {
    //   prop: 1
    // }
    // constructor() {
    //   this.state = {a: 1, 2:2, b:3};
    //   var {...c, b} = this.state;
    //   var {...d, a} = this.state;
    //   console.log(c, b, d, c === this.state);
    // }
    value: function getA() {
      console.log(123);
    }
  }]);

  return A;
}();
// new A()


A.getA();
console.log(A.hasOwnProperty('getA'));