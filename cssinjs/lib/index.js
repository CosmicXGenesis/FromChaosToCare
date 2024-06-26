"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Keyframes", {
  enumerable: true,
  get: function get() {
    return _Keyframes.default;
  }
});
Object.defineProperty(exports, "StyleProvider", {
  enumerable: true,
  get: function get() {
    return _StyleContext.StyleProvider;
  }
});
Object.defineProperty(exports, "Theme", {
  enumerable: true,
  get: function get() {
    return _theme.Theme;
  }
});
Object.defineProperty(exports, "createCache", {
  enumerable: true,
  get: function get() {
    return _StyleContext.createCache;
  }
});
Object.defineProperty(exports, "createTheme", {
  enumerable: true,
  get: function get() {
    return _theme.createTheme;
  }
});
Object.defineProperty(exports, "extractStyle", {
  enumerable: true,
  get: function get() {
    return _useStyleRegister.extractStyle;
  }
});
Object.defineProperty(exports, "useCacheToken", {
  enumerable: true,
  get: function get() {
    return _useCacheToken.default;
  }
});
Object.defineProperty(exports, "useStyleRegister", {
  enumerable: true,
  get: function get() {
    return _useStyleRegister.default;
  }
});
var _useStyleRegister = _interopRequireWildcard(require("./hooks/useStyleRegister"));
var _useCacheToken = _interopRequireDefault(require("./hooks/useCacheToken"));
var _StyleContext = require("./StyleContext");
var _Keyframes = _interopRequireDefault(require("./Keyframes"));
var _theme = require("./theme");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }