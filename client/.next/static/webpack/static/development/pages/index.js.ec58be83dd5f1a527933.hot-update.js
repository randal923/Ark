webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/MovieList/index.js":
/*!***************************************!*\
  !*** ./containers/MovieList/index.js ***!
  \***************************************/
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
/* harmony import */ var _components_Movies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Movies */ "./components/Movies/index.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Title */ "./components/Title/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./containers/MovieList/styles.js");





var _jsxFileName = "/mnt/c/Users/randa/Desktop/HD/Code/Ark/client/containers/MovieList/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
 // Components




var MOVIES = [{
  id: 1231495333,
  images: ['/movies/harry_potter.jpg'],
  title: "Harry Potter and the Philosopher's Stone",
  Price: 15.99,
  sale: 14.99
}, {
  id: 4234234222,
  images: ['/movies/io.jpg'],
  title: 'IO',
  Price: 15.99,
  sale: 14.99
}, {
  id: 1245645623,
  images: ['/movies/matrix.jpg'],
  title: 'The Matrix',
  Price: 15.99,
  sale: 14.99
}];

var MovieList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MovieList, _Component);

  function MovieList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MovieList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MovieList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MovieList, [{
    key: "render",
    value: function render() {
      return __jsx(_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Movies",
        type: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx(_components_Movies__WEBPACK_IMPORTED_MODULE_6__["default"], {
        movies: MOVIES,
        moviesPerLine: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    }
  }]);

  return MovieList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MovieList);

/***/ })

})
//# sourceMappingURL=index.js.ec58be83dd5f1a527933.hot-update.js.map