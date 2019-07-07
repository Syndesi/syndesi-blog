(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{456:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcTooltip = __webpack_require__(462);\n\nvar _rcTooltip2 = _interopRequireDefault(_rcTooltip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Error = function (_React$Component) {\n  _inherits(Error, _React$Component);\n\n  function Error(props) {\n    _classCallCheck(this, Error);\n\n    var _this = _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this, props));\n\n    _this.state = {\n      details: ''\n    };\n    return _this;\n  }\n\n  _createClass(Error, [{\n    key: 'update',\n    value: function update() {\n      var p = this.props;\n      console.log('I am updating myself...');\n      if (p.reload && typeof p.reload == 'function') {\n        p.reload();\n      }\n      console.log('internal reload complete');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var p = this.props;\n      var actions = [];\n      var actionsRow = null;\n      if (p.additionalInformation) {\n        var tooltip = _react2.default.createElement(\n          'p',\n          null,\n          p.additionalInformation\n        );\n        actions.push(_react2.default.createElement(\n          _rcTooltip2.default,\n          { placement: 'bottom', overlay: tooltip },\n          _react2.default.createElement(\n            'span',\n            { 'class': 'btn-round btn-transparent icon' },\n            'help_outline'\n          )\n        ));\n      }\n      if (p.reload) {\n        actions.push(_react2.default.createElement(\n          'span',\n          { 'class': 'btn-round btn-transparent icon', onClick: function onClick() {\n              _this2.update();\n            } },\n          'refresh'\n        ));\n      }\n      if (actions.length > 0) {\n        actionsRow = _react2.default.createElement(\n          'ul',\n          { 'class': 'error-actions py-1 unselectable bg-level-1' },\n          actions\n        );\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { 'class': 'error' },\n        _react2.default.createElement(\n          'h3',\n          { 'class': 'error-code pt-1' },\n          p.code\n        ),\n        _react2.default.createElement(\n          'p',\n          { 'class': 'error-description pb-1' },\n          p.description\n        ),\n        actionsRow\n      );\n    }\n  }]);\n\n  return Error;\n}(_react2.default.Component);\n\nexports.default = Error;\n\n\nError.defaultProps = {\n  code: '500',\n  description: 'unknown error',\n  additionalInformation: null,\n  reload: null\n};\n\n//# sourceURL=webpack:///./src/components/Error.js?")},911:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(42);\n\nvar _Error = __webpack_require__(456);\n\nvar _Error2 = _interopRequireDefault(_Error);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar E4xx = (0, _reactRouter.withRouter)(_class = function (_React$Component) {\n  _inherits(E4xx, _React$Component);\n\n  function E4xx() {\n    _classCallCheck(this, E4xx);\n\n    return _possibleConstructorReturn(this, (E4xx.__proto__ || Object.getPrototypeOf(E4xx)).apply(this, arguments));\n  }\n\n  _createClass(E4xx, [{\n    key: 'render',\n    value: function render() {\n      var code = this.props.match.params.httpCode;\n      var description = 'Bad Request';\n      if (code in this.props.descriptions) {\n        description = this.props.descriptions[code];\n      }\n      return _react2.default.createElement(\n        'div',\n        { 'class': 'page' },\n        _react2.default.createElement(\n          'div',\n          { 'class': 'tile' },\n          _react2.default.createElement(_Error2.default, { code: code, description: description })\n        )\n      );\n    }\n  }]);\n\n  return E4xx;\n}(_react2.default.Component)) || _class;\n\nexports.default = E4xx;\n\n\nE4xx.defaultProps = {\n  descriptions: {\n    400: 'Bad Request',\n    401: 'Unauthorized',\n    402: 'Payment Required',\n    403: 'Forbidden',\n    404: 'Not Found',\n    405: 'Method Not Allowed',\n    406: 'Not Acceptable',\n    407: 'Proxy Authentication Required',\n    408: 'Request Timeout',\n    409: 'Conflict',\n    410: 'Gone',\n    411: 'Length Required',\n    412: 'Precondition Failed',\n    413: 'Request Entity Too Large',\n    414: 'URI Too Long',\n    415: 'Unsupported Media Type',\n    416: 'Requested range not satisfiable',\n    417: 'Expectation Failed',\n    420: 'Policy Not Fulfilled',\n    421: 'Misdirected Request',\n    422: 'Unprocessable Entity',\n    423: 'Locked',\n    424: 'Failed Dependency',\n    426: 'Upgrade Required',\n    428: 'Precondition Required',\n    429: 'Too Many Requests',\n    431: 'Request Header Fields Too Large',\n    451: 'Unavailable For Legal Reasons',\n    418: 'I’m a teapot',\n    425: 'Unordered Collection',\n    444: 'No Response',\n    449: 'The request should be retried after doing the appropriate action',\n    499: 'Client Closed Request'\n  }\n};\n\n//# sourceURL=webpack:///./src/pages/Error/E4xx.js?")}}]);