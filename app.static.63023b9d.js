(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blue = '#009EEB';
var colors = exports.colors = {
  base: blue,
  accent: '#592DEA',
  red: '#FF4949',
  blue: blue,

  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  // smoke3: '#c0ccda',
  // smoke2: '#d3dce6',
  smoke: '#e0e6ed',
  // snow3: '#e5e9f2',
  // snow2: '#eff2f7',
  snow: '#f9fafc',
  white: '#ffffff'
};

var mp = exports.mp = [32, 48, 64, 80];
var mx = exports.mx = mp.map(function (w) {
  return '@media screen and (min-width:' + w + 'em)';
});
var mm = exports.mm = mp.map(function (w) {
  return '@media screen and (max-width:' + w + 'em)';
});

var theme = {
  colors: colors,
  radius: 4,
  weights: [400, 700],
  font: 'Averta, Roboto, sans-serif',
  mono: 'SFMono-Regular, Courier New, monospace'
};

exports.default = theme;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['border-radius: 1rem;'], ['border-radius: 1rem;']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Divider = _rebass.Box.extend.attrs({
  bg: 'base',
  w: 128,
  py: 1,
  my: 4,
  mx: 'auto'
})(_templateObject);

exports.default = Divider;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(7);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _react2.default.createElement(_App2.default, null);

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  * { box-sizing: border-box; }\n  body {\n    margin: 0;\n    color: ', ';\n    line-height: 1.625;\n  }\n  a { text-decoration: none; }\n  @font-face {\n    font-family: Averta;\n    font-style: normal;\n    font-weight: normal;\n    src: url(https://hackclub.com/fonts/averta-regular.woff2) format(\'woff2\'), url(https://hackclub.com/fonts/averta-regular.woff) format(\'woff\');\n    unicode-range: U + 0000 - F8FE, U + F900-FFFF;\n  }\n  @font-face {\n    font-family: Averta;\n    font-style: normal;\n    font-weight: bold;\n    src: url(https://hackclub.com/fonts/averta-bold.woff2) format(\'woff2\'), url(https://hackclub.com/fonts/averta-bold.woff) format(\'woff\');\n    unicode-range: U + 0000 - F8FE, U + F900-FFFF;\n  }\n'], ['\n  * { box-sizing: border-box; }\n  body {\n    margin: 0;\n    color: ', ';\n    line-height: 1.625;\n  }\n  a { text-decoration: none; }\n  @font-face {\n    font-family: Averta;\n    font-style: normal;\n    font-weight: normal;\n    src: url(https://hackclub.com/fonts/averta-regular.woff2) format(\'woff2\'), url(https://hackclub.com/fonts/averta-regular.woff) format(\'woff\');\n    unicode-range: U + 0000 - F8FE, U + F900-FFFF;\n  }\n  @font-face {\n    font-family: Averta;\n    font-style: normal;\n    font-weight: bold;\n    src: url(https://hackclub.com/fonts/averta-bold.woff2) format(\'woff2\'), url(https://hackclub.com/fonts/averta-bold.woff) format(\'woff\');\n    unicode-range: U + 0000 - F8FE, U + F900-FFFF;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(9);

var _reactStaticRoutes = __webpack_require__(10);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _rebass = __webpack_require__(1);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _Header = __webpack_require__(16);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject, _theme2.default.colors.black);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _rebass.Provider,
        { theme: _theme2.default },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _About = __webpack_require__(12);

var _About2 = _interopRequireDefault(_About);

var _Work = __webpack_require__(13);

var _Work2 = _interopRequireDefault(_Work);

var _ = __webpack_require__(15);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _About2.default,
  t_1: _Work2.default,
  t_2: _2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_2" }, "/": { t: "t_0" }, "work": { t: "t_1" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 72rem;\n  text-align: center;\n  ', ' {\n    min-height: 80vh;\n    text-align: left;\n    > div { max-width: 50%; }\n  }\n'], ['\n  max-width: 72rem;\n  text-align: center;\n  ', ' {\n    min-height: 80vh;\n    text-align: left;\n    > div { max-width: 50%; }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  line-height: 1;\n'], ['\n  line-height: 1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-weight: 400;\n  line-height: 1.625;\n'], ['\n  font-family: ', ';\n  font-weight: 400;\n  line-height: 1.625;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  border-radius: 12px;\n  max-height: 40vh;\n  max-width: 50vw;\n  ', ' {\n    border-radius: 24px;\n    max-height: 64vh;\n  }\n'], ['\n  border-radius: 12px;\n  max-height: 40vh;\n  max-width: 50vw;\n  ', ' {\n    border-radius: 24px;\n    max-height: 64vh;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: intrinsic;\n'], ['\n  display: inline-block;\n  width: intrinsic;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  p {\n    max-width: 32rem;\n  }\n  ', ' {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n'], ['\n  p {\n    max-width: 32rem;\n  }\n  ', ' {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  p {\n    font-family: ', ';\n    line-height: 1.625;\n  }\n\n  strong {\n    font-weight: 600;\n    color: ', ';\n  }\n'], ['\n  p {\n    font-family: ', ';\n    line-height: 1.625;\n  }\n\n  strong {\n    font-weight: 600;\n    color: ', ';\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-weight: 600;\n  font-style: italic;\n  line-height: 1.375;\n  cite {\n    color: ', ';\n    display: block;\n    font-size: .875rem;\n    font-style: normal;\n    margin-top: .5rem;\n  }\n'], ['\n  font-family: ', ';\n  font-weight: 600;\n  font-style: italic;\n  line-height: 1.375;\n  cite {\n    color: ', ';\n    display: block;\n    font-size: .875rem;\n    font-style: normal;\n    margin-top: .5rem;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(1);

var _reactStatic = __webpack_require__(3);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _Divider = __webpack_require__(4);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Masthead = _rebass.Flex.extend.attrs({
  direction: ['column', 'row'],
  px: 3,
  mx: 'auto'
})(_templateObject, _theme.mx[0]);
var Name = _rebass.Heading.extend.attrs({ f: 6, mt: 0, mb: 3 })(_templateObject2);
var Bio = _rebass.Text.extend.attrs({ f: 3, my: 2 })(_templateObject3, _theme2.default.mono);

var PortraitBox = function PortraitBox(props) {
  return _react2.default.createElement(_rebass.Flex, _extends({
    column: true,
    justify: 'center',
    align: ['center', 'flex-end'],
    flex: '1 1 auto',
    p: [3, 4],
    pr: [null, 4]
  }, props));
};
var Portrait = _rebass.Image.extend(_templateObject4, _theme.mx[0]);

var Go = _rebass.ButtonOutline.extend.attrs({
  color: 'blue',
  mt: 3,
  f: 3,
  py: 3,
  px: 4
})(_templateObject5);

var NameBox = _rebass.Container.extend.attrs({
  py: 2,
  px: [2, 4]
})(_templateObject6, _theme.mx[0]);

var Article = _rebass.Container.extend.attrs({ maxWidth: 36 * 16 })(_templateObject7, _theme2.default.mono, _theme.colors.accent);

var Quote = _rebass.Text.extend.attrs({ color: 'accent', p: 3, f: 4 })(_templateObject8, _theme2.default.mono, _theme.colors.slate);

exports.default = function () {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      Masthead,
      null,
      _react2.default.createElement(
        PortraitBox,
        null,
        _react2.default.createElement(Portrait, { src: 'https://cdn.glitch.com/3ddbd40d-f89f-488c-a0eb-0dc4aa1ebc80%2Fstatic%2Fportrait.jpg?1500175195551' })
      ),
      _react2.default.createElement(
        NameBox,
        null,
        _react2.default.createElement(
          Name,
          null,
          'Hey, I\u2019m Lachlan.'
        ),
        _react2.default.createElement(
          Bio,
          null,
          'I\u2019m a high schooler interested in visual and industrial design with a penchant for typography.'
        ),
        _react2.default.createElement(
          Go,
          { is: _reactStatic.Link, to: '/work' },
          'View work'
        )
      )
    ),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(
      Article,
      null,
      _react2.default.createElement(
        Quote,
        null,
        'The only secret of magic is that I\'m willing to work harder on it than you think it\u2019s worth.',
        _react2.default.createElement(
          'cite',
          null,
          '\u2014Penn Jillette'
        )
      )
    ),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(
      Article,
      { my: [4, 5] },
      _react2.default.createElement(
        _rebass.Heading,
        null,
        'Artist Statement'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We, the always-connected, are drowning in information. Headlines, articles, messages, email, ads, videos saturate us with more information than we could consume in a lifetime. Meanwhile much of the information most critical for people to help shape our future remains inaccessible. Multiple modern crises stem from this dichotomy\u2014increased anxiety, sleep deprivation, and \u201Cfake news\u201D\u2014and it seems the only way to solve them is through more carefully selected, better presented information.'
      ),
      _react2.default.createElement(
        Quote,
        null,
        'Good design is in short supply.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Making something I merely find beautiful is not enough. With my 20/20 vision and high-resolution displays, I could easily forget the needs and abilities of the people who see and use my work. Part of my responsibility as a designer is to make products and services that respect all users, and thus to push the entire industry to do the same. Digital interfaces need to be clear and inclusive, colors need to meet international color contrast standards, and text sizes should dynamically adapt to users\u2019 abilities. Magnifying glasses and profound frustration are not part of good design.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'I design my products to embody these ideas.',
        ' ',
        _react2.default.createElement(
          'strong',
          null,
          'Fossil Funded'
        ),
        ' is built on a detailed map and database, but few would search for their Congressional district on the map or study a 5,000-cell table with energy left over for a phone call to their Representative\u2019s office. Information that is hidden will never have a meaningful impact. My app makes complex, inaccessible data not only readily available and easy to understand; it makes critical information actionable. ',
        _react2.default.createElement(
          'strong',
          null,
          'Blink'
        ),
        ' unlocks communication for those for whom the entire outside world is inaccessible, giving significantly disabled people a flexible way to communicate.'
      )
    )
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 24rem;\n  text-align: left;\n  img { flex-shrink: none; }\n'], ['\n  max-width: 24rem;\n  text-align: left;\n  img { flex-shrink: none; }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-family: ', ';\n  font-style: italic;\n  font-weight: 600;\n  line-height: 1.25;\n  text-transform: uppercase;\n'], ['\n  color: ', ';\n  font-family: ', ';\n  font-style: italic;\n  font-weight: 600;\n  line-height: 1.25;\n  text-transform: uppercase;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-transform: uppercase;\n'], ['\n  text-transform: uppercase;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  max-width: 32rem;\n'], ['\n  max-width: 32rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: grid;\n  /* grid-template-columns: repeat(3, 1fr); */\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  grid-auto-rows: minmax(16rem, auto);\n  grid-auto-flow: dense;\n  grid-gap: 1rem;\n  justify-content: center;\n'], ['\n  display: grid;\n  /* grid-template-columns: repeat(3, 1fr); */\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  grid-auto-rows: minmax(16rem, auto);\n  grid-auto-flow: dense;\n  grid-gap: 1rem;\n  justify-content: center;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  &[cols=\'2\'] {\n    grid-column: span 2;\n  }\n  &[cols=\'3\'] {\n    grid-column: span 3;\n  }\n  &[rows=\'2\'] {\n    grid-row: span 2;\n  }\n  &[rows=\'2\'] {\n    grid-row: span 2;\n  }\n'], ['\n  &[cols=\'2\'] {\n    grid-column: span 2;\n  }\n  &[cols=\'3\'] {\n    grid-column: span 3;\n  }\n  &[rows=\'2\'] {\n    grid-row: span 2;\n  }\n  &[rows=\'2\'] {\n    grid-row: span 2;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral([''], ['']),
    _templateObject8 = _taggedTemplateLiteral(['\n  line-height: 1.375;\n'], ['\n  line-height: 1.375;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(1);

var _reactStatic = __webpack_require__(3);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _data = __webpack_require__(14);

var _data2 = _interopRequireDefault(_data);

var _Divider = __webpack_require__(4);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _rebass.Flex.extend.attrs({
  align: 'center',
  justify: 'center',
  mx: 'auto',
  my: 4
})(_templateObject);

var Question = _rebass.Text.extend.attrs({ f: 3 })(_templateObject2, _theme.colors.accent, _theme2.default.mono);

var Title = _rebass.Heading.extend.attrs({
  color: 'slate',
  f: [4, 5],
  mt: 4
})(_templateObject3);

var Desc = _rebass.Text.extend.attrs({ f: 3, mt: 2, mb: 4, mx: 'auto' })(_templateObject4);

var Gallery = _rebass.Box.extend.attrs({ my: 3 })(_templateObject5);

var Item = _rebass.Box.extend(_templateObject6);
var ItemImage = _rebass.Image.extend.attrs({})(_templateObject7);
var Caption = _rebass.Text.extend.attrs({
  color: 'slate',
  mt: 1
})(_templateObject8);

exports.default = function () {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('style', { children: 'body{background-color:' + _theme.colors.snow + ';}' }),
    _react2.default.createElement(
      Header,
      { is: _reactStatic.Link, to: '/' },
      _react2.default.createElement(_rebass.Avatar, {
        size: 72,
        mr: 3,
        src: 'https://lachlanjc.me/static/portrait-square.jpg'
      }),
      _react2.default.createElement(
        _rebass.Box,
        null,
        _react2.default.createElement(
          Question,
          null,
          'What is good design in an overwhelmed world?'
        ),
        _react2.default.createElement(
          _rebass.Text,
          { color: 'grey' },
          'More about me \u2192'
        )
      )
    ),
    _react2.default.createElement(
      _rebass.Container,
      { style: { textAlign: 'center' } },
      _data2.default.map(function (cat, i) {
        return _react2.default.createElement(
          _rebass.Box,
          { is: 'section', my: 4 },
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(Title, { children: cat.name }),
          _react2.default.createElement(Desc, { children: cat.desc }),
          _react2.default.createElement(
            Gallery,
            null,
            cat.work.map(function (_ref, i) {
              var img = _ref.img,
                  caption = _ref.caption,
                  props = _objectWithoutProperties(_ref, ['img', 'caption']);

              return _react2.default.createElement(
                Item,
                _extends({ is: 'a', href: img, target: '_blank' }, props),
                _react2.default.createElement(ItemImage, { src: img }),
                _react2.default.createElement(Caption, { children: caption })
              );
            })
          )
        );
      })
    )
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = [{"name":"Master Studio","desc":"High school course with Maure Irwin-Furmanek.","work":[{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FIMG_2914.jpg?1513842352257","caption":"Social commentary silkscreen print on AI-based automation"},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FSoA7R2_02_2018_1200p.jpg.jpeg?1513841941743","caption":"“Divergent”—painting of Block Island beach with a bicycle tire","cols":2},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FIMG_0149.jpg?1513842134341","caption":"Encaustic piece based on Lake Zumbra"},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FMaster%20Studio%20-%202017-10-22%2020.21.06.png?1513842502166","caption":"Self-portrait"},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FEFF.png?1513842667982","caption":"Poster for the EFF"}]},{"name":"RISD Pre-College 2017","desc":"Over summer 2017, I lived in Providence, RI, studying industrial design at RISD’s Pre-College Program.","work":[{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FLight.jpg?1513838075630","caption":"Nature-inspired lighting design"},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FChair.jpg?1513838064448","caption":"Chair designed out of two sheets of cardboard with no fasteners","cols":2},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FZephyros.jpg?1513838065224","caption":"My final project, based on a TED Talk"},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FBoard.jpg?1513838075602","caption":"Tradeshow exhibit designed for the VanMoof electric bicycle","cols":2,"rows":2},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FPaper.Hot%20Wheels.2.png?1513842831302","caption":"Concept Hot Wheels car"}]},{"name":"Digital","desc":"I build apps and websites of all kinds, especially open source. I specialize in React, CSS, and Rails.","work":[{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FFossil%20Funded.jpg?1513838069960","caption":"Fossil Funded: Speak out against the fossil fuel industry funding Congress"},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2Fstart_4.png?1513840444876","caption":"Secondary page for Hack Club"},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2Fhome_2.png?1513840449525","caption":"Homepage for Hack Club","rows":2},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FNoodles.jpg?1513838060106","caption":"Noodles: Cook better with all your recipes in one place","cols":2,"rows":2},{"img":"https://cdn.glitch.com/b7e03a8d-7d29-4d6a-82e9-2563b1009d8c%2FBlink.jpeg?1513838065327","caption":"Blink: Easy, affordable, accurate communication for locked-in patients"}]}]

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['text-align: center;'], ['text-align: center;']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(1);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Base = _rebass.Container.extend.attrs({
  my: [4, 5],
  color: 'red'
})(_templateObject);

exports.default = function () {
  return _react2.default.createElement(
    Base,
    null,
    _react2.default.createElement(
      _rebass.Heading,
      null,
      '404!'
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-bottom: 1px solid ', ';\n  text-align: center;\n'], ['\n  border-bottom: 1px solid ', ';\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n'], ['\n  font-family: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-block;\n  &:hover { color: ', '; }\n'], ['\n  display: inline-block;\n  &:hover { color: ', '; }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _rebass = __webpack_require__(1);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _rebass.Box.extend.attrs({ bg: 'blue', p: [3, 4] })(_templateObject, _theme.colors.smoke);

var Title = _rebass.Heading.extend.attrs({ f: [4, 5], color: 'white' })(_templateObject2);

var Nav = _rebass.Group.extend.attrs({ mt: 3 })(_templateObject3, _theme2.default.mono);

var NavLink = _rebass.Link.extend.attrs({ px: 3, color: 'slate' })(_templateObject4, _theme.colors.blue);

exports.default = function () {
  return _react2.default.createElement(
    Header,
    null,
    _react2.default.createElement(
      Title,
      { is: _reactStatic.Link, to: '/' },
      'Lachlan Campbell'
    )
  );
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.63023b9d.js.map