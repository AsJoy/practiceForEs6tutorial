class A {
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
  static getA() {
    console.log(123);
  }
}
// new A()
A.getA();
console.log(A.hasOwnProperty('getA'));