webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/Header/styles.js":
/*!*************************************!*\
  !*** ./containers/Header/styles.js ***!
  \*************************************/
/*! exports provided: Container, LogoStyle, MobileLogoStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoStyle", function() { return LogoStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLogoStyle", function() { return MobileLogoStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _global_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/breakpoints */ "./global/breakpoints.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    opacity: 0;\n  }\n\n"]);

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
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])([":nth-child(3){animation:", " 0.2s linear;}"], fadeOut);
  }
});


/***/ })

})
//# sourceMappingURL=index.js.93186b02ab722a02491a.hot-update.js.map