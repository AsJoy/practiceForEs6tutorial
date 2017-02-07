console.log('==========================对象扩展====================')

console.log('属性简介表达')

let iBar = 1;
let iFoo = 2;

let oPerson = {iBar, iFoo}

let oP = {
	name: '13',
	[iBar + 'hello'] () {
		console.log(1)
	},
	[iFoo + 'hello'] () {
		console.log(2)
	},
	[iBar + 'world']() {
		console.log(3)
	},
	get wheels() {
		console.log(this)
		return this.name
	},
	set wheels(val) {
		this.name = val;
	}
}

oP[iBar+'world']()
oP.wheels = 20;
console.log(oP.wheels)

console.log('Object.is: (基本与===行为一致 除了Object.is(NaN, NaN) 返回true 与 Object.is(+0, -0) 返回false )')

console.log(`Object.is(NaN,NaN) = ${Object.is(NaN,NaN)}` )
console.log(`Object.is(+0,-0) = ${Object.is(+0,-0)}` )

