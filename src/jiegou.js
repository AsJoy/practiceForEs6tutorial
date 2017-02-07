var {a: {c}, b} = {a: {c: 1}, b:2};


var [a, b , c] = [1, 2, 3];
var [a, b, ...c] = [1, 2, 3, 4];

function gn() {
  console.log(123);
}
// 惰性加载 当  x 取到值时 gn() 不会运行
var [x = gn()] = [123];
//  当赋值失败时 设置默认错误属性
var { message: msg = "Something went wrong" } = {};
console.log(msg);

let  { log, sin, cos } = Math;
console.log(sin(100));

var [a, ...b] = "hello";
[a,b]= [b,a];
var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
var {data, status, id} = jsonData;
gn.ajax = function (url, {async = true}) {
};

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}

console.log(key);

window.onerror = function(e) {
  alert(JSON.stringify(e))
}



