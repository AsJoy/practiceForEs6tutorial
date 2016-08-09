{
  let body = 123;
}
//console.log(body);
function fnTest() {
 this.name = 134; 
}
fnTest.prototype.sayName = () => {
  alert(123);
}

var fn = new fnTest();
console.log(fn);
for (let key in fn) {
  // console.log(fn[key]);
  console.log(key);
}
// console.log(key);