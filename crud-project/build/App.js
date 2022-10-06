"use strict";

Liferay.Loader.define("crud-project@1.0.0/App", ['module', 'exports', 'require', 'crud-project$react', './BlogPostings', './Documents', './KnowledgeBase'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireDefault(require("crud-project$react"));

    var _BlogPostings = _interopRequireDefault(require("./BlogPostings"));

    var _Documents = _interopRequireDefault(require("./Documents"));

    var _KnowledgeBase = _interopRequireDefault(require("./KnowledgeBase"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function App() {
      return (/*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            margin: "0px 1.5rem 6em 1.5rem"
          }
        }, /*#__PURE__*/_react["default"].createElement(_BlogPostings["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            margin: "6em 1.5rem"
          }
        }, /*#__PURE__*/_react["default"].createElement(_Documents["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            margin: "6em 1.5rem 3em 1.5rem"
          }
        }, /*#__PURE__*/_react["default"].createElement(_KnowledgeBase["default"], null)))
      );
    }

    var _default = App;
    exports["default"] = _default;
    //# sourceMappingURL=App.js.map
  }
});
//# sourceMappingURL=App.js.map