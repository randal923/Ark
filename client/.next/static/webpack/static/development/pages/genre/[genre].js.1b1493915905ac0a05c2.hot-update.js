webpackHotUpdate("static/development/pages/genre/[genre].js",{

/***/ "./containers/Layout/index.js":
/*!************************************!*\
  !*** ./containers/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Head */ "./components/Head/index.js");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Body */ "./containers/Layout/Body/index.js");
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/styles */ "./global/styles.js");
var _jsxFileName = "/mnt/c/Users/randa/Desktop/HD/Code/Ark/client/containers/Layout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Styles



var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      url = _ref.url,
      image = _ref.image;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    description: description,
    url: url,
    ogImage: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_Body__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_global_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./global/styles.js":
/*!**************************!*\
  !*** ./global/styles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');\n\n    html {\n        --light-text-color: #fffcf3;\n        --medium-text-color: #8c909a;\n        --dark-text-color: #727377;\n\n        --blue: #00a5ff;\n        --dark-blue: #3c78a6;\n        --border-blue: #353a53;\n\n        --light-grey: #40444b;\n        --medium-grey: #36393f;\n        --dark-grey: #2f3136;\n        --darker-grey: #202225;\n\n        --success: #58d777;\n        --success-hover: #29323a;\n\n        --danger: #f45722;\n        --danger-hover: #fff;\n\n        --warning: #f0af03;\n        --warning-hover: #29323a;\n\n        --wrap-1 {\n            flex-basis: calc(100% - 50px);\n            max-width: calc(100% - 50px);\n        }\n\n        --wrap-2 { \n        flex-basis: calc(50% - 50px);\n        max-width: calc(50% - 50px);\n        }\n\n        --wrap-3 { \n            flex-basis: calc(32% - 50px);\n            max-width: calc(32% - 50px);\n        }\n\n        --wrap-4 { \n            flex-basis: calc(25% - 50px);\n            max-width: calc(25% - 50px);\n        }\n        \n        --wrap-5 { \n            flex-basis: calc(20% - 50px);\n            max-width: calc(20% - 50px);\n        }\n    }\n    *,\n    *::after,\n    *::before {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    html {\n        /* 1 rem = 10px. Browser default font-size is 16px / 10px = 62.5%\n        Percentage allows user to change default font-size in browser */\n        font-size: 62.5%;\n    }\n\n    body {\n        font-family: 'Roboto', sans-serif;\n        background: #202225;\n        font-size: 1.2rem;\n        color: #fffcf3;\n        -webkit-font-smoothing: antialiased !important;\n    }\n\n    ul {\n        list-style: none;\n    }\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject()));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "./node_modules/core-js/library/fn/object/freeze.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/freeze.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.freeze */ "./node_modules/core-js/library/modules/es6.object.freeze.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.freeze;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.freeze.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ })

})
//# sourceMappingURL=[genre].js.1b1493915905ac0a05c2.hot-update.js.map