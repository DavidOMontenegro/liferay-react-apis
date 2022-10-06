"use strict";

Liferay.Loader.define("crud-project@1.0.0/KnowledgeBase", ['module', 'exports', 'require', 'crud-project$react', '@crud-project$clayui/form', '@crud-project$clayui/button', '@crud-project$clayui/table', '@crud-project$clayui/drop-down', './site'], function (module, exports, require) {
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

    var _dropDown = _interopRequireDefault(require("@crud-project$clayui/drop-down"));

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

    function KnowledgeBase() {
      return (/*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '100%'
          }
        }, /*#__PURE__*/_react["default"].createElement("h1", null, "Knowledge Base"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(CRUDArticle, null)))
      );
    }

    function CRUDArticle() {
      var _useState = (0, _react.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          site = _useState2[0],
          setSite = _useState2[1];

      var _useState3 = (0, _react.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          title = _useState4[0],
          setTitle = _useState4[1];

      var _useState5 = (0, _react.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          content = _useState6[0],
          setContent = _useState6[1];

      var _useState7 = (0, _react.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          articles = _useState8[0],
          setArticles = _useState8[1];

      var _useState9 = (0, _react.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          folders = _useState10[0],
          setFolders = _useState10[1];

      var _useState11 = (0, _react.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          articleId = _useState12[0],
          setArticleId = _useState12[1];

      var _useState13 = (0, _react.useState)([]),
          _useState14 = _slicedToArray(_useState13, 2),
          childArticles = _useState14[0],
          setChildren = _useState14[1];

      var _useState15 = (0, _react.useState)(''),
          _useState16 = _slicedToArray(_useState15, 2),
          name = _useState16[0],
          setName = _useState16[1];

      var _useState17 = (0, _react.useState)(''),
          _useState18 = _slicedToArray(_useState17, 2),
          folderId = _useState18[0],
          setFolderId = _useState18[1];

      var _useState19 = (0, _react.useState)([]),
          _useState20 = _slicedToArray(_useState19, 2),
          folderArticles = _useState20[0],
          setFolderArticles = _useState20[1];

      var _useState21 = (0, _react.useState)([]),
          _useState22 = _slicedToArray(_useState21, 2),
          folderFolders = _useState22[0],
          setFolderFolders = _useState22[1];

      (0, _react.useEffect)(function () {
        (0, _site.getSite)().then(function (res) {
          setSite(res.items[0].id);
        });
      }, []);
      var get = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/".concat(site, "/knowledge-base-folders/")).then(function (res) {
          return res.json();
        }).then(function (data) {
          return setFolders(data.items);
        });
        Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/".concat(site, "/knowledge-base-articles/")).then(function (res) {
          return res.json();
        }).then(function (data) {
          return setArticles(data.items);
        });
        document.getElementById('articleButton').firstChild.innerHTML = 'Update Knowledge Base';
        document.getElementById('articleTable').style.display = 'block';
      }, [site]);
      var seeArticle = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-articles/".concat(articleId)).then(function (res) {
          return res.json();
        }).then(function (data) {
          document.getElementById('at').innerHTML = JSON.stringify(data.title);
          document.getElementById('ab').innerHTML = JSON.stringify(data.articleBody);
        });
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-articles/".concat(articleId, "/knowledge-base-articles/")).then(function (res) {
          return res.json();
        }).then(function (data) {
          return setChildren(data.items);
        });
      }, [articleId]);
      var seeFolder = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-folders/".concat(folderId, "/knowledge-base-folders/")).then(function (res) {
          return res.json();
        }).then(function (data) {
          return setFolderFolders(data.items);
        });
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-folders/".concat(folderId, "/knowledge-base-articles/")).then(function (res) {
          return res.json();
        }).then(function (data) {
          return setFolderArticles(data.items);
        });
      }, [folderId]);
      var changeT = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-articles/".concat(articleId), {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title
          })
        }).then(function () {
          return setHeadline('');
        });
      }, [articleId, title]);
      var changeB = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-articles/".concat(articleId), {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'articleBody': content
          })
        }).then(function () {
          return setContent('');
        });
      }, [articleId, content]);
      var postArticle = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/".concat(site, "/knowledge-base-articles"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title,
            'articleBody': content
          })
        }).then(function () {
          setTitle('');
          setContent('');
        });
      }, [site, title, content]);
      var postInFolder = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-folders/".concat(folderId, "/knowledge-base-articles/"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title,
            'articleBody': content
          })
        }).then(function () {
          setTitle('');
          setContent('');
        });
      }, [folderId, title, content]);
      var postInArticle = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-articles/".concat(articleId, "/knowledge-base-articles/"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title,
            'articleBody': content
          })
        }).then(function () {
          setTitle('');
          setContent('');
        });
      }, [articleId, title, content]);
      var putArticle = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-articles/".concat(articleId), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title,
            'articleBody': content
          })
        }).then(function () {
          setTitle('');
          setContent('');
        });
      }, [articleId, title, content]);
      var deleteArticle = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-articles/".concat(articleId), {
          method: 'DELETE'
        }).then(function () {
          return setArticleId('');
        });
        document.getElementById('at').innerHTML = 'No Article Selected';
        document.getElementById('ab').innerHTML = 'No Article Selected';
      }, [articleId]);
      var changeN = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-folders/".concat(folderId), {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name
          })
        }).then(function () {
          return setContent('');
        });
      }, [folderId, name]);
      var postFolder = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/".concat(site, "/knowledge-base-folders"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name
          })
        }).then(function () {
          setName('');
        });
      }, [site, name]);
      var postFolderFolder = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-folders/".concat(folderId, "/knowledge-base-folders/"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name
          })
        }).then(function () {
          setName('');
        });
      }, [folderId, name]);
      var deleteFolder = (0, _react.useCallback)(function () {
        Liferay.Util.fetch("/o/headless-delivery/v1.0/knowledge-base-folders/".concat(folderId), {
          method: 'DELETE'
        }).then(function () {
          return setFolderId('');
        }).then(function () {
          return setFolderArticles([]);
        }).then(function () {
          return setFolderFolders([]);
        });
      }, [folderId]);
      return (/*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '100%',
            marginBottom: "2em"
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '49%',
            "float": 'left',
            marginBottom: "3em"
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            marginBottom: "2em"
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          id: "articleButton"
        }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "secondary",
          onClick: function onClick() {
            return get();
          }
        }, "Show Knowledge Base")), /*#__PURE__*/_react["default"].createElement("div", {
          id: "articleTable",
          style: {
            display: 'none'
          }
        }, /*#__PURE__*/_react["default"].createElement(_table["default"], null, /*#__PURE__*/_react["default"].createElement(_table["default"].Head, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Row, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "ID"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "Title"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "Type"))), /*#__PURE__*/_react["default"].createElement(_table["default"].Body, null, folders.map(function (folder) {
          return (/*#__PURE__*/_react["default"].createElement(_table["default"].Row, {
              key: folder.id
            }, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              headingTitle: true
            }, folder.id), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, folder.name), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, "Folder"))
          );
        }), articles.map(function (article) {
          return (/*#__PURE__*/_react["default"].createElement(_table["default"].Row, {
              key: article.id
            }, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              headingTitle: true
            }, article.id), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, article.title), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, "Article"))
          );
        }))))), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "articleId"
        }, "Article ID"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "articleId",
          onChange: function onChange(e) {
            return setArticleId(e.target.value);
          },
          type: "text",
          value: articleId
        })), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "secondary",
          onClick: function onClick() {
            return seeArticle();
          }
        }, "See Article"), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "title",
          style: {
            marginTop: "3em"
          }
        }, "Title"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "title",
          onChange: function onChange(e) {
            return setTitle(e.target.value);
          },
          type: "text",
          value: title
        })), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: null,
          onClick: function onClick() {
            return changeT();
          }
        }, "Update Title"), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "content",
          style: {
            marginTop: "2em"
          }
        }, "Article Body"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "content",
          component: "textarea",
          onChange: function onChange(e) {
            return setContent(e.target.value);
          },
          type: "text",
          value: content
        })), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: null,
          onClick: function onClick() {
            return changeB();
          }
        }, "Update Body"), /*#__PURE__*/_react["default"].createElement("br", {
          style: {
            marginBottom: '2em'
          }
        }), /*#__PURE__*/_react["default"].createElement("div", {
          id: "buttons"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            "float": 'left'
          }
        }, /*#__PURE__*/_react["default"].createElement(_dropDown["default"], {
          trigger: /*#__PURE__*/_react["default"].createElement(_button["default"], {
            displayType: "primary"
          }, "Post Article"),
          menuElementAttrs: {
            className: 'my-custom-dropdown-menu',
            containerProps: {
              className: 'dropdown-menu-react-portal-div',
              id: 'dropdownMenuReactPortalDiv'
            }
          },
          closeOnClick: true
        }, /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Help, null, 'Where to post article'), /*#__PURE__*/_react["default"].createElement(_dropDown["default"].ItemList, null, /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Group, {
          header: "Choose"
        }, /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Item, {
          onClick: function onClick() {
            return postArticle();
          },
          key: 'option1'
        }, "Post in Site"), /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Item, {
          onClick: function onClick() {
            return postInFolder();
          },
          key: 'option2'
        }, "Post in Chosen Folder"), /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Item, {
          onClick: function onClick() {
            return postInArticle();
          },
          key: 'option3'
        }, "Post in Chosen Article"))))), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            "float": 'left'
          }
        }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "secondary",
          onClick: function onClick() {
            return putArticle();
          }
        }, "Replace Article")))), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '49%',
            "float": 'right'
          }
        }, /*#__PURE__*/_react["default"].createElement("h2", {
          style: {
            marginBottom: '1em'
          }
        }, "Title"), /*#__PURE__*/_react["default"].createElement("p", {
          id: "at",
          style: {
            marginBottom: '3em'
          }
        }, "No Article Selected"), /*#__PURE__*/_react["default"].createElement("h2", {
          style: {
            marginBottom: '1em'
          }
        }, "Article Body"), /*#__PURE__*/_react["default"].createElement("p", {
          id: "ab"
        }, "No Article Selected"), /*#__PURE__*/_react["default"].createElement(_table["default"], null, /*#__PURE__*/_react["default"].createElement(_table["default"].Head, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Row, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "Article ID"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "Title"))), /*#__PURE__*/_react["default"].createElement(_table["default"].Body, null, childArticles.map(function (article) {
          return (/*#__PURE__*/_react["default"].createElement(_table["default"].Row, {
              key: article.id
            }, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              headingTitle: true
            }, article.id), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, article.title))
          );
        }))), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "primary",
          onClick: function onClick() {
            return deleteArticle();
          }
        }, "Delete Article"))), /*#__PURE__*/_react["default"].createElement("hr", {
          style: {
            clear: 'both',
            margin: '1em'
          }
        }), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '100%'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '49%',
            "float": 'left'
          }
        }, /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "folderId"
        }, "Folder ID"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "folderId",
          onChange: function onChange(e) {
            return setFolderId(e.target.value);
          },
          type: "text",
          value: folderId
        })), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "secondary",
          onClick: function onClick() {
            return seeFolder();
          }
        }, "See Folder"), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "name",
          style: {
            marginTop: "3em"
          }
        }, "Folder Name"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "name",
          onChange: function onChange(e) {
            return setName(e.target.value);
          },
          type: "text",
          value: name
        })), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: null,
          onClick: function onClick() {
            return changeN();
          }
        }, "Change Folder Name"), /*#__PURE__*/_react["default"].createElement("br", {
          style: {
            margin: '1em'
          }
        }), /*#__PURE__*/_react["default"].createElement(_dropDown["default"], {
          trigger: /*#__PURE__*/_react["default"].createElement(_button["default"], {
            displayType: "primary"
          }, "Create Folder"),
          menuElementAttrs: {
            className: 'my-custom-dropdown-menu',
            containerProps: {
              className: 'dropdown-menu-react-portal-div',
              id: 'dropdownMenuReactPortalDiv'
            }
          },
          closeOnClick: true
        }, /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Help, null, 'Where to create folder'), /*#__PURE__*/_react["default"].createElement(_dropDown["default"].ItemList, null, /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Group, {
          header: "Choose"
        }, /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Item, {
          onClick: function onClick() {
            return postFolder();
          },
          key: 'option1'
        }, "Create in Site"), /*#__PURE__*/_react["default"].createElement(_dropDown["default"].Item, {
          onClick: function onClick() {
            return postFolderFolder();
          },
          key: 'option2'
        }, "Create in Chosen Folder"))))), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '49%',
            "float": 'right'
          }
        }, /*#__PURE__*/_react["default"].createElement(_table["default"], null, /*#__PURE__*/_react["default"].createElement(_table["default"].Head, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Row, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "ID"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "Title"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true
        }, "Type"))), /*#__PURE__*/_react["default"].createElement(_table["default"].Body, null, folderFolders.map(function (folder) {
          return (/*#__PURE__*/_react["default"].createElement(_table["default"].Row, {
              key: folder.id
            }, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              headingTitle: true
            }, folder.id), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, folder.name), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, 'Folder'))
          );
        }), folderArticles.map(function (article) {
          return (/*#__PURE__*/_react["default"].createElement(_table["default"].Row, {
              key: article.id
            }, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              headingTitle: true
            }, article.id), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, article.title), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, null, 'Article'))
          );
        }))), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "primary",
          onClick: function onClick() {
            return deleteFolder();
          }
        }, "Delete Folder"))))
      );
    }

    var _default = KnowledgeBase;
    exports["default"] = _default;
    //# sourceMappingURL=KnowledgeBase.js.map
  }
});
//# sourceMappingURL=KnowledgeBase.js.map