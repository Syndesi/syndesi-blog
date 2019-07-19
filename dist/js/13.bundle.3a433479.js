(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{451:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcTooltip = __webpack_require__(457);\n\nvar _rcTooltip2 = _interopRequireDefault(_rcTooltip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Error = function (_React$Component) {\n  _inherits(Error, _React$Component);\n\n  function Error(props) {\n    _classCallCheck(this, Error);\n\n    var _this = _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this, props));\n\n    _this.state = {\n      details: ''\n    };\n    return _this;\n  }\n\n  _createClass(Error, [{\n    key: 'update',\n    value: function update() {\n      var p = this.props;\n      console.log('I am updating myself...');\n      if (p.reload && typeof p.reload == 'function') {\n        p.reload();\n      }\n      console.log('internal reload complete');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var p = this.props;\n      var actions = [];\n      var actionsRow = null;\n      if (p.additionalInformation) {\n        var tooltip = _react2.default.createElement(\n          'p',\n          null,\n          p.additionalInformation\n        );\n        actions.push(_react2.default.createElement(\n          _rcTooltip2.default,\n          { placement: 'bottom', overlay: tooltip },\n          _react2.default.createElement(\n            'span',\n            { className: 'btn-round btn-transparent icon' },\n            'help_outline'\n          )\n        ));\n      }\n      if (p.reload) {\n        actions.push(_react2.default.createElement(\n          'span',\n          { className: 'btn-round btn-transparent icon', onClick: function onClick() {\n              _this2.update();\n            } },\n          'refresh'\n        ));\n      }\n      if (actions.length > 0) {\n        actionsRow = _react2.default.createElement(\n          'ul',\n          { className: 'error-actions py-1 unselectable bg-level-1' },\n          actions\n        );\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'error' },\n        _react2.default.createElement(\n          'h3',\n          { className: 'error-code pt-1' },\n          p.code\n        ),\n        _react2.default.createElement(\n          'p',\n          { className: 'error-description pb-1' },\n          p.description\n        ),\n        actionsRow\n      );\n    }\n  }]);\n\n  return Error;\n}(_react2.default.Component);\n\nexports.default = Error;\n\n\nError.defaultProps = {\n  code: '500',\n  description: 'unknown error',\n  additionalInformation: null,\n  reload: null\n};\n\n//# sourceURL=webpack:///./src/components/Error.js?")},915:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(39);\n\nvar _Error = __webpack_require__(451);\n\nvar _Error2 = _interopRequireDefault(_Error);\n\nvar _propTypes = __webpack_require__(2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar E5xx = (0, _reactRouter.withRouter)(_class = function (_React$Component) {\n  _inherits(E5xx, _React$Component);\n\n  function E5xx() {\n    _classCallCheck(this, E5xx);\n\n    return _possibleConstructorReturn(this, (E5xx.__proto__ || Object.getPrototypeOf(E5xx)).apply(this, arguments));\n  }\n\n  _createClass(E5xx, [{\n    key: 'render',\n    value: function render() {\n      var code = this.props.match.params.httpCode;\n      var description = 'Internal Server Error';\n      if (code in this.props.descriptions) {\n        description = this.props.descriptions[code];\n      }\n      return _react2.default.createElement(\n        'div',\n        { className: 'page' },\n        _react2.default.createElement(\n          'div',\n          { className: 'tile' },\n          _react2.default.createElement(_Error2.default, { code: code, description: description })\n        )\n      );\n    }\n  }]);\n\n  return E5xx;\n}(_react2.default.Component)) || _class;\n\nexports.default = E5xx;\n\n\nE5xx.defaultProps = {\n  descriptions: {\n    500: 'Internal Server Error',\n    501: 'Not Implemented',\n    502: 'Bad Gateway',\n    503: 'Service Unavailable',\n    504: 'Gateway Timeout',\n    505: 'HTTP Version not supported',\n    506: 'Variant Also Negotiates',\n    507: 'Insufficient Storage',\n    508: 'Loop Detected',\n    509: 'Bandwidth Limit Exceeded',\n    510: 'Not Extended',\n    511: 'Network Authentication Required'\n  }\n};\n\nE5xx.propTypes = {\n  descriptions: _propTypes2.default.object\n};\n\n//# sourceURL=webpack:///./src/pages/Error/E5xx.js?")}}]);