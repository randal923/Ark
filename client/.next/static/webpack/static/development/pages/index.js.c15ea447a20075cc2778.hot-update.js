webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _jesstelford_react_portal_universal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jesstelford/react-portal-universal */ "./node_modules/@jesstelford/react-portal-universal/index.js");
/* harmony import */ var _jesstelford_react_portal_universal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_jesstelford_react_portal_universal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./containers/Header/styles.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Logo */ "./components/Logo/index.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Login */ "./components/Login/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_SubMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/SubMenu */ "./components/SubMenu/index.js");
/* harmony import */ var _components_MobileModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/MobileModal */ "./components/MobileModal/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");







var _jsxFileName = "/mnt/c/Users/randa/Desktop/HD/Code/Ark/client/containers/Header/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 // Components





 // Icons




var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showMobileModal: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "handleMobileModal",
    value: function handleMobileModal() {
      this.setState({
        showMobileModal: !this.state.showMobileModal
      });
    }
  }, {
    key: "renderMobileHeader",
    value: function renderMobileHeader() {
      var _this2 = this;

      return __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["MobileLogoStyle"], {
        show: this.state.showMobileModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["MenuBurger"], {
        onClick: function onClick() {
          return _this2.handleMobileModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["Burger"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_16__["AiOutlineShopping"], {
        size: 25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this3 = this;

      return __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(_components_Login__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_9__["LogoStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Ark"), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), __jsx(_components_SubMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), this.renderMobileHeader(), this.state.showMobileModal && __jsx(_jesstelford_react_portal_universal__WEBPACK_IMPORTED_MODULE_8__["UniversalPortal"], {
        selector: "#mobileModal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_components_MobileModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        handleMobileModal: function handleMobileModal() {
          return _this3.handleMobileModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderHeader();
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./containers/Header/styles.js":
/*!*************************************!*\
  !*** ./containers/Header/styles.js ***!
  \*************************************/
/*! exports provided: Container, LogoStyle, MobileLogoStyle, MenuBurger, Burger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoStyle", function() { return LogoStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLogoStyle", function() { return MobileLogoStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBurger", function() { return MenuBurger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Burger", function() { return Burger; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _global_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/breakpoints */ "./global/breakpoints.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tfrom {\n\t\topacity: 100%;\n\t}\n\n  to {\n\topacity: 0%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var fadeOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "w2b10l-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:2.6rem 10rem 3.5rem;background:linear-gradient(#181f2d,#212225);@media (max-width:", "){grid-template-columns:1fr;grid-template-rows:3.5rem 1fr;}"], _global_breakpoints__WEBPACK_IMPORTED_MODULE_2__["breakPoints"].mobile);
var LogoStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__LogoStyle",
  componentId: "w2b10l-1"
})(["display:flex;align-items:center;h1{font-size:5rem;}> img{height:80px;width:80px;}@media (max-width:", "){display:none;}"], _global_breakpoints__WEBPACK_IMPORTED_MODULE_2__["breakPoints"].mobile);
var MobileLogoStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__MobileLogoStyle",
  componentId: "w2b10l-2"
})(["display:none;@media (max-width:", "){display:flex;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.92);img{height:30px;width:30px;}svg{margin-right:10px;margin-left:10px;", "}}"], _global_breakpoints__WEBPACK_IMPORTED_MODULE_2__["breakPoints"].mobile, function (props) {
  if (props.show) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])([":nth-child(3){animation:", " 0.2s linear;animation-fill-mode:forwards;}"], fadeOut);
  }
});
var MenuBurger = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__MenuBurger",
  componentId: "w2b10l-3"
})([""]);
var Burger = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__Burger",
  componentId: "w2b10l-4"
})([""]);


/***/ })

})
//# sourceMappingURL=index.js.c15ea447a20075cc2778.hot-update.js.map