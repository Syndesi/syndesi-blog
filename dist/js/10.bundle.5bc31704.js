(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{446:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _path2 = __webpack_require__(186);\n\nvar _path3 = _interopRequireDefault(_path2);\n\nvar _importInspector = __webpack_require__(187);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(126);\n\nvar _reactRouter = __webpack_require__(39);\n\nvar _reactLoadable = __webpack_require__(188);\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _mobxReact = __webpack_require__(124);\n\nvar _Header = __webpack_require__(711);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Footer = __webpack_require__(713);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _Loader = __webpack_require__(184);\n\nvar _Loader2 = _interopRequireDefault(_Loader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return (0, _importInspector.report)(Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(7)]).then(__webpack_require__.t.bind(null, 821, 7)), {\n      currentModuleFileName: 'C:/xampp/htdocs/syndesi/syndesi-blog/src/pages/PublicRoute.tsx',\n      importedModulePath: './Index',\n      serverSideRequirePath: _path3.default.join(__dirname, './Index')\n    });\n  },\n  loading: _Loader2.default\n});\n\nvar Post = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return (0, _importInspector.report)(Promise.all(/* import() */[__webpack_require__.e(5), __webpack_require__.e(17)]).then(__webpack_require__.t.bind(null, 826, 7)), {\n      currentModuleFileName: 'C:/xampp/htdocs/syndesi/syndesi-blog/src/pages/PublicRoute.tsx',\n      importedModulePath: './Post',\n      serverSideRequirePath: _path3.default.join(__dirname, './Post')\n    });\n  },\n  loading: _Loader2.default\n});\n\nvar Story = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return (0, _importInspector.report)(Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.t.bind(null, 906, 7)), {\n      currentModuleFileName: 'C:/xampp/htdocs/syndesi/syndesi-blog/src/pages/PublicRoute.tsx',\n      importedModulePath: './Story',\n      serverSideRequirePath: _path3.default.join(__dirname, './Story')\n    });\n  },\n  loading: _Loader2.default\n});\n\nvar Credits = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return (0, _importInspector.report)(Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(8)]).then(__webpack_require__.t.bind(null, 911, 7)), {\n      currentModuleFileName: 'C:/xampp/htdocs/syndesi/syndesi-blog/src/pages/PublicRoute.tsx',\n      importedModulePath: './Credits',\n      serverSideRequirePath: _path3.default.join(__dirname, './Credits')\n    });\n  },\n  loading: _Loader2.default\n});\n\nvar PublicRoute = (_dec = (0, _mobxReact.inject)('store'), (0, _reactRouter.withRouter)(_class = _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(PublicRoute, _React$Component);\n\n  function PublicRoute() {\n    _classCallCheck(this, PublicRoute);\n\n    return _possibleConstructorReturn(this, (PublicRoute.__proto__ || Object.getPrototypeOf(PublicRoute)).apply(this, arguments));\n  }\n\n  _createClass(PublicRoute, [{\n    key: 'render',\n    value: function render() {\n      var url = this.props.match.url;\n      return _react2.default.createElement(\n        _react.Suspense,\n        { fallback: _Loader2.default },\n        _react2.default.createElement(_reactRouterDom.Route, { component: _Header2.default }),\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: url, component: Index }),\n          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: url + '/credits', component: Credits }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: url + '/post/:postId', component: Post }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: url + '/story/:storyId', component: Story })\n        ),\n        _react2.default.createElement(_reactRouterDom.Route, { component: _Footer2.default })\n      );\n    }\n  }]);\n\n  return PublicRoute;\n}(_react2.default.Component)) || _class) || _class) || _class);\nexports.default = PublicRoute;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/pages/PublicRoute.tsx?")},468:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _i18next = __webpack_require__(125);\n\nvar _i18next2 = _interopRequireDefault(_i18next);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Icon = function (_React$Component) {\n  _inherits(Icon, _React$Component);\n\n  function Icon() {\n    _classCallCheck(this, Icon);\n\n    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));\n  }\n\n  _createClass(Icon, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          icon = _props.icon,\n          i18nText = _props.i18nText,\n          family = _props.family,\n          r = _objectWithoutProperties(_props, ['icon', 'i18nText', 'family']);\n\n      var containerClass = ['icon-container', 'icon-' + family].join(' ');\n      return _react2.default.createElement(\n        'span',\n        _extends({ 'class': containerClass }, r),\n        _react2.default.createElement(\n          'span',\n          { 'class': 'icon unselectable', 'aria-hidden': 'true' },\n          icon\n        ),\n        _react2.default.createElement(\n          'span',\n          { 'class': 'text' },\n          _i18next2.default.t(i18nText)\n        )\n      );\n    }\n  }]);\n\n  return Icon;\n}(_react2.default.Component);\n\nexports.default = Icon;\n\n\nIcon.defaultProps = {\n  icon: '',\n  i18nText: '',\n  family: 'default'\n};\n\n//# sourceURL=webpack:///./src/components/Icon.tsx?")},711:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _dec2, _class;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(126);\n\nvar _mobxReact = __webpack_require__(124);\n\nvar _jsCookie = __webpack_require__(93);\n\nvar _jsCookie2 = _interopRequireDefault(_jsCookie);\n\nvar _reactI18next = __webpack_require__(185);\n\nvar _header = __webpack_require__(712);\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _Icon = __webpack_require__(468);\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = (_dec = (0, _reactI18next.withTranslation)('header'), _dec2 = (0, _mobxReact.inject)('store'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'changeLang',\n    value: function changeLang(lang) {\n      this.props.store.setLanguage(lang);\n    }\n  }, {\n    key: 'renderLinks',\n    value: function renderLinks() {\n      var _this2 = this;\n\n      var links = [];\n      _header2.default.links.forEach(function (link, i) {\n        switch (link.id) {\n          case 'blog':\n            links.push(_react2.default.createElement(\n              'li',\n              { 'class': 'site-link', key: i },\n              _react2.default.createElement(\n                _reactRouterDom.NavLink,\n                { 'class': 'active', to: '/' + _this2.props.store.lang + '/' },\n                _react2.default.createElement(\n                  'p',\n                  null,\n                  _react2.default.createElement(\n                    _reactI18next.Trans,\n                    { i18nKey: link.title },\n                    link.title\n                  )\n                )\n              )\n            ));\n            break;\n          default:\n            links.push(_react2.default.createElement(\n              'li',\n              { 'class': 'site-link', key: i },\n              _react2.default.createElement(\n                _reactRouterDom.NavLink,\n                { to: link.url },\n                _react2.default.createElement(\n                  'p',\n                  null,\n                  _react2.default.createElement(\n                    _reactI18next.Trans,\n                    { i18nKey: link.title },\n                    link.title\n                  )\n                )\n              )\n            ));\n            break;\n        }\n      });\n      return links;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var s = this.props.store;\n      return _react2.default.createElement(\n        'div',\n        { 'class': 'header page' },\n        _react2.default.createElement(\n          'div',\n          { 'class': 'layout-equal-spaced stretch' },\n          _react2.default.createElement(\n            'ul',\n            { 'class': 'site-details' },\n            _react2.default.createElement(\n              'li',\n              { 'class': 'site-logo' },\n              _react2.default.createElement(\n                'a',\n                { href: '/' },\n                _react2.default.createElement(\n                  'h3',\n                  { 'class': 'icon' },\n                  _react2.default.createElement(_Icon2.default, { icon: 'syndesi_big', i18nText: 'header:iconLogo' })\n                ),\n                _react2.default.createElement(\n                  'h3',\n                  { 'class': 'title' },\n                  _react2.default.createElement(\n                    _reactI18next.Trans,\n                    { i18nKey: 'title' },\n                    \"Syndesi\"\n                  )\n                )\n              )\n            ),\n            this.renderLinks()\n          ),\n          _react2.default.createElement(\n            'ul',\n            { 'class': 'site-options' },\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#', onClick: function onClick(e) {\n                    _this3.props.store.setLanguage('en');e.preventDefault();\n                  } },\n                'EN'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#', onClick: function onClick(e) {\n                    _this3.props.store.setLanguage('de');e.preventDefault();\n                  } },\n                'DE'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#', onClick: function onClick(e) {\n                    _this3.props.store.setLanguage('ar');e.preventDefault();\n                  } },\n                'AR'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#', onClick: function onClick(e) {\n                    _this3.props.store.setLanguage('ko');e.preventDefault();\n                  } },\n                'KO'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                _react2.default.createElement(_Icon2.default, { icon: 'search', i18nText: 'header:iconSearch' })\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                _react2.default.createElement(_Icon2.default, { icon: 'menu', i18nText: 'header:iconMenu' })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react2.default.Component)) || _class) || _class) || _class);\nexports.default = Header;\n\n\nHeader.defaultProps = {};\n\n//# sourceURL=webpack:///./src/components/Header.tsx?")},712:function(module){eval('module.exports = JSON.parse("{\\"links\\":[{\\"id\\":\\"blog\\",\\"title\\":\\"header:links.blog\\"},{\\"title\\":\\"header:links.apps\\",\\"url\\":\\"/apps/\\"}]}");\n\n//# sourceURL=webpack:///./src/assets/header.json?')},713:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Footer = function (_React$Component) {\n  _inherits(Footer, _React$Component);\n\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));\n  }\n\n  _createClass(Footer, [{\n    key: "render",\n    value: function render() {\n      return _react2.default.createElement(\n        "div",\n        { "class": "footer page" },\n        _react2.default.createElement(\n          "div",\n          { "class": "layout-equal-spaced stretch hero" },\n          _react2.default.createElement(\n            "p",\n            { "class": "neo-eon unselectable" },\n            _react2.default.createElement(\n              "span",\n              { "class": "n" },\n              "N"\n            ),\n            _react2.default.createElement(\n              "span",\n              { "class": "eo" },\n              "EO"\n            )\n          ),\n          _react2.default.createElement(\n            "div",\n            { "class": "social-media-links" },\n            _react2.default.createElement(\n              "ul",\n              { "class": "flat" },\n              _react2.default.createElement(\n                "li",\n                null,\n                _react2.default.createElement(\n                  "a",\n                  { "class": "github", href: "https://github.com/Syndesi", target: "_blank" },\n                  _react2.default.createElement(\n                    "p",\n                    { "class": "icon" },\n                    "github"\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                "li",\n                null,\n                _react2.default.createElement(\n                  "a",\n                  { "class": "xing", href: "https://www.xing.com/profile/Soeren_Klein7/", target: "_blank" },\n                  _react2.default.createElement(\n                    "p",\n                    { "class": "icon" },\n                    "xing"\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                "li",\n                null,\n                _react2.default.createElement(\n                  "a",\n                  { "class": "youtube", href: "https://www.youtube.com/channel/UCeq9pswz0tzUJNi2Gy6o-NA", target: "_blank" },\n                  _react2.default.createElement(\n                    "p",\n                    { "class": "icon" },\n                    "youtube"\n                  )\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          "div",\n          { "class": "layout-equal-spaced stretch legal-links" },\n          _react2.default.createElement(\n            "ul",\n            { "class": "flat pb-1" },\n            _react2.default.createElement(\n              "li",\n              null,\n              _react2.default.createElement(\n                "a",\n                { href: "#", target: "_blank" },\n                _react2.default.createElement(\n                  "p",\n                  null,\n                  "Contact"\n                )\n              )\n            ),\n            _react2.default.createElement(\n              "li",\n              null,\n              _react2.default.createElement(\n                "a",\n                { href: "#", target: "_blank" },\n                _react2.default.createElement(\n                  "p",\n                  null,\n                  "Impressum"\n                )\n              )\n            ),\n            _react2.default.createElement(\n              "li",\n              null,\n              _react2.default.createElement(\n                "a",\n                { href: "#", target: "_blank" },\n                _react2.default.createElement(\n                  "p",\n                  null,\n                  "Data Privacy"\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            "p",\n            { "class": "pb-1" },\n            _react2.default.createElement(\n              "span",\n              { "class": "icon" },\n              "copyright"\n            ),\n            " by S\\xF6ren Klein, 2019"\n          )\n        )\n      );\n    }\n  }]);\n\n  return Footer;\n}(_react2.default.Component);\n\nexports.default = Footer;\n\n//# sourceURL=webpack:///./src/components/Footer.tsx?')}}]);