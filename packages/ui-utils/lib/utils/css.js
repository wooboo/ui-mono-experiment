const cn = require('classnames');
module.exports = function css(s) {
    const fn = function(...c){
      return cn(...c.map(l=>s[l]||l));
    }
    for (const key in s) {
      if (s.hasOwnProperty(key)) {
        fn[key] = s[key];
      }
    }
    return fn; 
  }