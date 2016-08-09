'use strict';

/**
 * Created by niuyuanqiang on 16/8/9.
 */
var KEY_MAP = Symbol();

function User() {
  this.name = 'hello';
}
global[KEY_MAP] = new User();

module.exports = global[KEY_MAP];