'use strict';

/**
 * Created by niuyuanqiang on 16/8/4.
 */

// 设置组件状态
var updateUI = regeneratorRuntime.mark(function updateUI(text) {
  return regeneratorRuntime.wrap(function updateUI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          showLoad(text);
          _context.next = 3;
          return 'init';

        case 3:
          hide();

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, updateUI, this);
});

var Loading = null;
function showLoad(text) {
  Loading = document.createElement('div');
  document.body.appendChild(Loading);
  Loading.appendChild(document.createTextNode(text));
  Loading.style.cssText = 'background: #f60; color: #fff; line-height: 30px; transition: opacity 1s, display 1s 1s';
}
function hide() {
  // Loading.style.opacity='0';
  document.body.removeChild(Loading);
}

var animation = updateUI('loading...');
animation.next();
setTimeout(function () {
  animation.next();
}, 1000);