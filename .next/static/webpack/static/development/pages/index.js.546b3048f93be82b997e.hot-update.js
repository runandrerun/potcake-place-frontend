webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! React */ "./node_modules/React/index.js");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");







var _jsxFileName = "/Users/owner/Development/FullStackDev/potcake-place-frontend/components/Navigation.js";


 // import 'antd/dist/antd.css';

var SubMenu = antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].SubMenu;
var MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].ItemGroup;

var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      current: 'mail'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (e) {
      console.log('click ', e);

      _this.setState({
        current: e.key
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      return React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"], {
        onClick: this.handleClick,
        selectedKeys: [this.state.current],
        mode: "horizontal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        key: "mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), "Navigation One"), React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        key: "app",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "appstore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), "Navigation Two"), React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
        title: React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "submenu-title-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          type: "setting",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }), "Navigation Three - Submenu"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuItemGroup, {
        title: "Item 1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        key: "setting:1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Option 1"), React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        key: "setting:2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Option 2")), React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuItemGroup, {
        title: "Item 2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        key: "setting:3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Option 3"), React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        key: "setting:4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Option 4"))), React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        key: "alipay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, React__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://ant.design",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Navigation Four - Link")));
    }
  }]);

  return Navigation;
}(React__WEBPACK_IMPORTED_MODULE_7__["Component"]);


;

/***/ })

})
//# sourceMappingURL=index.js.546b3048f93be82b997e.hot-update.js.map