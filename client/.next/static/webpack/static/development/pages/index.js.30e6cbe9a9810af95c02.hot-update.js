webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Button/styles.js");
var _jsxFileName = "/mnt/c/Users/randa/Desktop/HD/Code/Ark/client/components/Button/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Button = function Button(_ref) {
  var type = _ref.type,
      route = _ref.route,
      onClick = _ref.onClick,
      label = _ref.label;

  if (route) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      type: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(next_router__WEBPACK_IMPORTED_MODULE_1___default.a, {
      to: route,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("button", {
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, label)));
  } else {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      type: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("button", {
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, label));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/styles.js":
/*!*************************************!*\
  !*** ./components/Button/styles.js ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__Container",
  componentId: "sc-7xyjqb-0"
})(["button{background:transparent;cursor:pointer;user-select:none;font-weight:500;font-size:1.3rem;border-radius:0.2rem;margin:0.5rem;padding:0.5rem;}", ""], function (props) {
  if (props.type === 'danger') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--danger);border:1px solid var(--danger);:hover,:focus{background:var(--danger);color:var(--danger-hover);}}"]);
  } else if (props.type === 'ark') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--blue);border:1px solid var(--blue);:hover{color:var(--light-text-color);background:var(--blue);}}"]);
  } else if (props.type === 'success') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--success);border:1px solid var(--success);:hover{color:var(--success-hover);background:var(--success);}}"]);
  } else if (props.type === 'warning') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--warning);border:1px solid var(--warning);:hover{color:var(--warning-hover);background:var(--warning);}}"]);
  }
});


/***/ }),

/***/ "./containers/Header/index.js":
/*!************************************!*\
  !*** ./containers/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./containers/Header/styles.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Logo */ "./components/Logo/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.js");





var _jsxFileName = "/mnt/c/Users/randa/Desktop/HD/Code/Ark/client/containers/Header/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "renderSimpleHeader",
    value: function renderSimpleHeader() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["LogoStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Ark")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["LoginStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Login"), "\xA0 or \xA0", __jsx("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Create Account"), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Country"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "ark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdCloudDownload"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), " Install Ark"))));
    }
  }, {
    key: "render",
    value: function render() {
      var simple = this.props.simple;
      return simple ? this.renderSimpleHeader() : this.renderHeader();
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.30e6cbe9a9810af95c02.hot-update.js.map