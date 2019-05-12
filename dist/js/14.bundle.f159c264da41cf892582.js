(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{61:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(94);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactMarkdown = __webpack_require__(461);\n\nvar _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Post = function (_React$Component) {\n  _inherits(Post, _React$Component);\n\n  function Post(props) {\n    _classCallCheck(this, Post);\n\n    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));\n\n    _this.state = {\n      data: null,\n      lang: 1,\n      langCode: 'en'\n    };\n    _this.getData();\n    return _this;\n  }\n\n  _createClass(Post, [{\n    key: 'getData',\n    value: function getData() {\n      var _this2 = this;\n\n      _axios2.default.get('http://localhost/directus_test/public/_/items/post_translation?single=1&fields=*.*&filter[language.code][eq]=' + this.props.match.params.lang + '&filter[post_id][eq]=' + this.getPostId()).then(function (res) {\n        console.log(res.data.data);\n        _this2.setState({\n          data: res.data.data\n        });\n      });\n    }\n  }, {\n    key: 'getPostId',\n    value: function getPostId() {\n      var id = this.props.match.params.postId;\n      return id.substr(0, id.indexOf('-'));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var d = this.state.data;\n      var post = _react2.default.createElement(\n        'p',\n        null,\n        'loading post data...'\n      );\n      if (d) {\n        post = _react2.default.createElement(\n          'div',\n          { className: 'card mb-1' },\n          _react2.default.createElement(\n            'h1',\n            null,\n            d.title\n          ),\n          _react2.default.createElement(\n            'p',\n            { 'class': 'gray' },\n            d.summary\n          ),\n          _react2.default.createElement(_reactMarkdown2.default, { source: d.content })\n        );\n      }\n      return _react2.default.createElement(\n        'div',\n        { className: 'page' },\n        post\n      );\n    }\n  }]);\n\n  return Post;\n}(_react2.default.Component);\n\nexports.default = Post;\n\n//# sourceURL=webpack:///./src/pages/Post.js?")}}]);