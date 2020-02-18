webpackHotUpdate("static/development/pages/movie/[movie].js",{

/***/ "./components/SubMenu/index.js":
/*!*************************************!*\
  !*** ./components/SubMenu/index.js ***!
  \*************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Input */ "./components/Input/index.js");
/* harmony import */ var _components_Genre__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Genre */ "./components/Genre/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./components/SubMenu/styles.js");





var _jsxFileName = "/mnt/c/Users/randa/Desktop/HD/Code/Ark/client/components/SubMenu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

 // Components


 // Icons

 // Style



var SubMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubMenu, _Component);

  function SubMenu() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubMenu);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubMenu).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubMenu, [{
    key: "renderMobileSubMenu",
    value: function renderMobileSubMenu() {
      return __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["MobileSubMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Documentaries")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Animations")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "TV Shows")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Short Films")));
    }
  }, {
    key: "renderSubMenu",
    value: function renderSubMenu() {
      var _this = this;

      return __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdReorder"], {
        size: 25,
        onClick: function onClick() {
          return _this.setState({
            openMobileMainMenu: !_this.state.openMobileMainMenu
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["DropDown"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Movies")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["DropDownContent"], {
        className: "dropdown-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(_components_Genre__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Documentaries")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Animations")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "TV Shows")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Short Films"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["Search"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        placeholder: "Search...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSearch"], {
        size: 25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, this.renderSubMenu(), this.renderMobileSubMenu());
    }
  }]);

  return SubMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SubMenu);

/***/ }),

/***/ "./components/SubMenu/styles.js":
/*!**************************************!*\
  !*** ./components/SubMenu/styles.js ***!
  \**************************************/
/*! exports provided: Container, Search, Menu, DropDown, DropDownContent, MobileSubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownContent", function() { return DropDownContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSubMenu", function() { return MobileSubMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1wi7dc9-0"
})(["background:linear-gradient(#393939,#424242);min-width:100%;border-radius:1rem;border-style:groove;border-width:1px;border-color:#171717;height:3.5rem;font-family:Arial;padding:0 1rem 0 1rem;display:grid;align-items:center;grid-template-columns:1fr 15fr 1fr;align-items:center;justify-items:center;img{display:none;}> svg{color:var(--blue);}@media (max-width:37.5em){grid-template-columns:1fr 1fr;align-self:center;border-radius:0;border-width:0;svg{justify-self:start;}}"]);
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Menu",
  componentId: "sc-1wi7dc9-1"
})(["a{font-size:1.6rem;color:rgba(255,255,255,0.7);text-decoration:none;:not(:last-child){margin-right:1.5rem;}:hover{color:white;}}@media (max-width:37.5em){display:none;}"]);
var Search = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__Search",
  componentId: "sc-1wi7dc9-2"
})(["display:flex;align-items:center;position:relative;input{background:#2e2e2e;border:1px solid #232323;border-radius:1.5rem;width:20rem;height:2.5rem;color:white;padding:0 0 0 10px;}button{position:absolute;top:0rem;right:1rem;background:transparent;border:0;}@media (max-width:37.5em){justify-self:end;}"]);
var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__DropDown",
  componentId: "sc-1wi7dc9-3"
})(["position:relative;display:inline-block;:hover .dropdown-content{display:block;}"]);
var DropDownContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__DropDownContent",
  componentId: "sc-1wi7dc9-4"
})(["display:none;position:absolute;background-color:var(--background);min-width:12rem;box-shadow:0px 0.8rem 1.6rem 0px rgba(0,0,0,0.2);padding:1.2rem 1.6rem;z-index:1;> div{display:flex;flex-direction:column;margin:0.5rem;}"]);
var MobileSubMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__MobileSubMenu",
  componentId: "sc-1wi7dc9-5"
})(["display:none;@media (max-width:37.5em){display:block;display:flex;flex-direction:column;a{font-size:1.5rem;color:var(--light-text-color);width:100%;background:linear-gradient(#393939,#424242);text-decoration:none;border-bottom:1px;:hover,:focus{color:white;background:var(--blue);}}}"]);


/***/ })

})
//# sourceMappingURL=[movie].js.2e2ffd9858b7b7252205.hot-update.js.map