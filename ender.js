/*!
  * Ender: open module JavaScript framework
  * copyright Dustin Diaz & Jacob Thornton 2011 (@ded @fat)
  * https://github.com/ender-js/ender
  * License MIT
  * Built with: {{build_cmd}}
  */
!function (context) {

  function aug(o, o2) {
    for (var k in o2) {
      k != 'noConflict' && (o[k] = o2[k]);
    }
  }

  function _$(s, r) {
    this.elements = typeof s !== 'string' && !s.nodeType && typeof s.length !== 'undefined' ? s : $._select(s, r);
    this.length = this.elements.length;
    for (var i = 0; i < this.length; i++) {
      this[i] = this.elements[i];
    }
  }

  function $(s, r) {
    return new _$(s, r);
  }

  aug($, {
    ender: function (o, proto) {
      aug(proto ? _$.prototype : $, o);
    },
    _select: function () {
      return [];
    }
  });

  var old = context.$;
  $.noConflict = function () {
    context.$ = old;
    return this;
  };

  (typeof module !== 'undefined') && module.exports ?
    (module.exports = $) :
    (context.$ = $);

}(this);