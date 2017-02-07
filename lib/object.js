'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = '123123';
var obj = _defineProperty({}, a, a);

var obj1 = _defineProperty({}, a, function () {
  alert(a);
});
// 获取对象
// 赋值函数加set
// 取值函数用get
var person = {
  sayName: function sayName() {
    console.log(this.name);
  },

  get firstName() {
    return "Nicholas";
  },
  set getName(name) {
    this.name = '123';
  }
};

person.sayName.name; // "sayName"
person.firstName.name; // "get firstName"

console.log(Object.is({}, {}));