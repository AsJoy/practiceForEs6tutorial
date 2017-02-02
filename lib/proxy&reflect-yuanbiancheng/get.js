/**
 * Created by niuyuanqiang on 16/8/9.
 */

let person = {
  username: 'hello',
  password: 'world'
}

let proxy = new Proxy(function (target, {}) {
  get: function () {
    
  }
})