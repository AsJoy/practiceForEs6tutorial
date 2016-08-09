'use strict';

/**
 * Created by niuyuanqiang on 16/8/9.
 */
var KEY_MAP = Symbol();

function User() {
  this.name = 'hello';
}

console.log(123);

if (!global[KEY_MAP]) {
  global[KEY_MAP] = new User();
}

module.exports = global[KEY_MAP];