(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{61:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _MarkdownTile = __webpack_require__(284);\n\nvar _MarkdownTile2 = _interopRequireDefault(_MarkdownTile);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Credits = function (_React$Component) {\n  _inherits(Credits, _React$Component);\n\n  function Credits(props) {\n    _classCallCheck(this, Credits);\n\n    return _possibleConstructorReturn(this, (Credits.__proto__ || Object.getPrototypeOf(Credits)).call(this, props));\n  }\n\n  _createClass(Credits, [{\n    key: \'render\',\n    value: function render() {\n      var markdown = "# Credits\\n\\nDisclaimer: This page will be changed in the future.\\n\\nLuca Strahlendorff - A very good friend and helped with the development & testing of this website. And even though he had seen countless bugs, he still couldn\'t hack the server ;)";\n      return _react2.default.createElement(\n        \'div\',\n        { \'class\': \'page\' },\n        _react2.default.createElement(_MarkdownTile2.default, { markdown: markdown })\n      );\n    }\n  }]);\n\n  return Credits;\n}(_react2.default.Component);\n\nexports.default = Credits;\n\n//# sourceURL=webpack:///./src/pages/Credits.js?')}}]);