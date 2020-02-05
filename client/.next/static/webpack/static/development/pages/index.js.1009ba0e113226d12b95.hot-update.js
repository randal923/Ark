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
      label = _ref.label,
      icon = _ref.icon;

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
    }, icon, "\xA0", label));
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
})(["> button{cursor:pointer;user-select:none;font-weight:500;font-size:1.3rem;border-radius:0.2rem;margin:0.5rem;padding:0.5rem;}", ""], function (props) {
  if (props.type === 'danger') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--danger);border:1px solid var(--danger);:hover,:focus{background:var(--danger);color:var(--danger-hover);}}"]);
  } else if (props.type === 'ark') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:white;background:linear-gradient(#50a1e1,#3c78a6);border:none;:hover{color:var(--light-text-color);background:var(--blue);}}"]);
  } else if (props.type === 'success') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--success);border:1px solid var(--success);:hover{color:var(--success-hover);background:var(--success);}}"]);
  } else if (props.type === 'warning') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--warning);border:1px solid var(--warning);:hover{color:var(--warning-hover);background:var(--warning);}}"]);
  }
});


/***/ }),

/***/ "./components/Login/index.js":
/*!***********************************!*\
  !*** ./components/Login/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Login/styles.js");
var _jsxFileName = "/mnt/c/Users/randa/Desktop/HD/Code/Ark/client/components/Login/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Login = function Login() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Login"), "\xA0 or \xA0", __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Create Account"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Country"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "ark",
    label: "Install Ark",
    icon: __jsx(MdCloudDownload, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=index.js.1009ba0e113226d12b95.hot-update.js.map