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

/***/ })

})
//# sourceMappingURL=index.js.dcbae85ef2c4f338a2d0.hot-update.js.map