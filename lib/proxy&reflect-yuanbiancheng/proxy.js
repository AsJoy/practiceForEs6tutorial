'use strict';

/**
 * Created by niuyuanqiang on 16/8/9.
 */

// 重载点运算符

var obj = new Proxy({}, {
  get: function get(target, key, receiver) {
    console.log(arguments);
    return Reflect.get(target, key, receiver);
  },
  set: function set(target, key, value, recevier) {
    console.log(arguments);
    return Reflect.set(target, key, value, recevier);
  }
});

obj.count = 1;
console.log('=======================================');
obj.count++;