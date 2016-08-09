var s = "hello world!"
s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

var re = new RegExp(RegExp.escape(location.href), g);
console.log(re.test(location.href))