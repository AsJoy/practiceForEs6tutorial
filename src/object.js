var a ='123123';
var obj = {
  [a]: a
};

var obj1 = {
  [a](){
    alert(a);
  }
}
// 获取对象
// 赋值函数加set
// 取值函数用get
var person = {
  sayName() {
    console.log(this.name);
  },
  get firstName() {
    return "Nicholas";
  },
  set getName(name) {
    this.name = '123';
  }
};

person.sayName.name   // "sayName"
person.firstName.name // "get firstName"

console.log(Object.is({}, {}));




