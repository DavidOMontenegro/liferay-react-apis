"use strict";

Liferay.Loader.define("crud-project@1.0.0/BlogPostings", ['module', 'exports', 'require', 'crud-project$react', '@crud-project$clayui/form', '@crud-project$clayui/button', '@crud-project$clayui/table', './site'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireWildcard(require("crud-project$react"));

    var _form = _interopRequireWildcard(require("@crud-project$clayui/form"));

    var _button = _interopRequireDefault(require("@crud-project$clayui/button"));

    var _table = _interopRequireDefault(require("@crud-project$clayui/table"));

    var _site = require("./site");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }

    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {
        return cache.get(obj);
      }var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }newObj["default"] = obj;if (cache) {
        cache.set(obj, newObj);
      }return newObj;
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }return arr2;
    }

    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];if (_i == null) return;var _arr = [];var _n = true;var _d = false;var _s, _e;try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function BlogPostings() {
      return (/*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '100%'
          }
        }, /*#__PURE__*/_react["default"].createElement("h1", null, "Blog Posts"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(BlogPosting, null)), /*#__PURE__*/_react["default"].createElement("br", {
          style: {
            clear: 'both'
          }
        }))
      );
    }

    function BlogPosting() {
      var _useState = (0, _react.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          site = _useState2[0],
          setSite = _useState2[1];

      var _useState3 = (0, _react.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          headline = _useState4[0],
          setHeadline = _useState4[1];

      var _useState5 = (0, _react.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          articleBody = _useState6[0],
          setArticleBody = _useState6[1];

      var _useState7 = (0, _react.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          blogId = _useState8[0],
          setBlogId = _useState8[1];

      var _useState9 = (0, _react.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          blogs = _useState10[0],
          setBlogs = _useState10[1];

      (0, _react.useEffect)(function () {
        (0, _site.getSite)().then(function (res) {
          setSite(res.items[0].id);
        });
      }, []);
      var get = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/".concat(site, "/blog-postings/")).then(function (res) {
          return res.json();
        }).then(function (data) {
          return setBlogs(data.items);
        });
        document.getElementById('blogButton').firstChild.innerHTML = 'Update Blogs';
        document.getElementById('blogTable').style.display = 'block';
      }, [site]);
      var seeBlog = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/blog-postings/".concat(blogId)).then(function (res) {
          return res.json();
        }).then(function (data) {
          document.getElementById('head').innerHTML = JSON.stringify(data.headline);
          document.getElementById('body').innerHTML = JSON.stringify(data.articleBody);
        });
      }, [blogId]);
      var changeH = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/blog-postings/".concat(blogId), {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'headline': headline
          })
        }).then(function () {
          return setHeadline('');
        });
      }, [blogId, headline]);
      var changeB = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/blog-postings/".concat(blogId), {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'articleBody': articleBody
          })
        }).then(function () {
          return setArticleBody('');
        });
      }, [blogId, articleBody]);
      var postBlog = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/".concat(site, "/blog-postings"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'headline': headline,
            'articleBody': articleBody
          })
        }).then(function () {
          setHeadline('');
          setArticleBody('');
        });
      }, [site, headline, articleBody]);
      var putBlog = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/blog-postings/".concat(blogId), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'headline': headline,
            'articleBody': articleBody
          })
        }).then(function () {
          setHeadline('');
          setArticleBody('');
        });
      }, [blogId, headline, articleBody]);
      var deleteBlog = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/blog-postings/".concat(blogId), {
          method: 'DELETE'
        }).then(function () {
          return setBlogId('');
        });
        document.getElementById('head').innerHTML = 'No Blog Selected';
        document.getElementById('body').innerHTML = 'No Blog Selected';
      }, [blogId]);
      return (/*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '49%',
            "float": 'left'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            marginBottom: "2em"
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          id: "blogButton"
        }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "secondary",
          onClick: function onClick() {
            return get();
          }
        }, "Show Blogs")), /*#__PURE__*/_react["default"].createElement("div", {
          id: "blogTable",
          style: {
            display: 'none'
          }
        }, /*#__PURE__*/_react["default"].createElement(_table["default"], null, /*#__PURE__*/_react["default"].createElement(_table["default"].Head, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Row, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "Blog ID"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "Blog Headline"))), /*#__PURE__*/_react["default"].createElement(_table["default"].Body, null, blogs.map(function (blog) {
          return (/*#__PURE__*/_react["default"].createElement(_table["default"].Row, {
              key: blog.id
            }, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              headingTitle: true
            }, blog.id), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, blog.headline))
          );
        }))))), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "blogId"
        }, "Blog ID"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "blogId",
          onChange: function onChange(e) {
            return setBlogId(e.target.value);
          },
          type: "text",
          value: blogId
        })), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "secondary",
          onClick: function onClick() {
            return seeBlog();
          }
        }, "See Blog"), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "headline",
          style: {
            marginTop: "3em"
          }
        }, "Headline"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "headline",
          onChange: function onChange(e) {
            return setHeadline(e.target.value);
          },
          type: "text",
          value: headline
        })), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: null,
          onClick: function onClick() {
            return changeH();
          }
        }, "Update Headline"), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "articleBody",
          style: {
            marginTop: "2em"
          }
        }, "Article Body"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "articleBody",
          component: "textarea",
          onChange: function onChange(e) {
            return setArticleBody(e.target.value);
          },
          type: "text",
          value: articleBody
        })), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: null,
          onClick: function onClick() {
            return changeB();
          }
        }, "Update Body"), /*#__PURE__*/_react["default"].createElement("br", {
          style: {
            marginBottom: '2em'
          }
        }), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "primary",
          onClick: function onClick() {
            return postBlog();
          }
        }, "Post New Blog"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "secondary",
          onClick: function onClick() {
            return putBlog();
          }
        }, "Replace Blog")), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '49%',
            "float": 'right'
          }
        }, /*#__PURE__*/_react["default"].createElement("h2", {
          style: {
            marginBottom: '1em'
          }
        }, "Headline"), /*#__PURE__*/_react["default"].createElement("p", {
          id: "head",
          style: {
            marginBottom: '3em'
          }
        }, "No Blog Selected"), /*#__PURE__*/_react["default"].createElement("h2", {
          style: {
            marginBottom: '1em'
          }
        }, "Article Body"), /*#__PURE__*/_react["default"].createElement("p", {
          id: "body"
        }, "No Blog Selected"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "primary",
          onClick: function onClick() {
            return deleteBlog();
          }
        }, "Delete Blog")))
      );
    }

    var _default = BlogPostings;
    exports["default"] = _default;
    //# sourceMappingURL=BlogPostings.js.map
  }
});
//# sourceMappingURL=BlogPostings.js.map