"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var Entity = /*#__PURE__*/function () {
  function Entity() {
    (0, _classCallCheck2.default)(this, Entity);
    this.cache = new Map();
  }
  (0, _createClass2.default)(Entity, [{
    key: "get",
    value: function get(keys) {
      return this.cache.get(keys.join('%')) || null;
    }
  }, {
    key: "update",
    value: function update(keys, valueFn) {
      var path = keys.join('%');
      var prevValue = this.cache.get(path);
      var nextValue = valueFn(prevValue);
      if (nextValue === null) {
        this.cache.delete(path);
      } else {
        this.cache.set(path, nextValue);
      }
    }
  }]);
  return Entity;
}();
var _default = Entity;
exports.default = _default;