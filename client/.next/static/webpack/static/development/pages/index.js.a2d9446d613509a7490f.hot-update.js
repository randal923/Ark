webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _global_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/breakpoints */ "./global/breakpoints.js");


var fadeOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:100%;}to{opacity:0%;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "w2b10l-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:2.6rem 10rem 3.5rem;background:linear-gradient(#181f2d,#212225);@media (max-width:", "){grid-template-columns:1fr;grid-template-rows:3.5rem 1fr;}"], _global_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakPoints"].mobile);
var LogoStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__LogoStyle",
  componentId: "w2b10l-1"
})(["display:flex;align-items:center;h1{font-size:5rem;}> img{height:80px;width:80px;}@media (max-width:", "){display:none;}"], _global_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakPoints"].mobile);
var MobileLogoStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__MobileLogoStyle",
  componentId: "w2b10l-2"
})(["display:none;@media (max-width:", "){display:flex;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.92);img{height:30px;width:30px;}svg{margin-right:10px;margin-left:10px;", "}}"], _global_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakPoints"].mobile, function (props) {
  if (props.show) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([":nth-child(3){animation:", " 0.5s linear;animation-fill-mode:forwards;}"], fadeOut);
  }
});
var MenuBurger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__MenuBurger",
  componentId: "w2b10l-3"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:25px;height:25px;cursor:pointer;transition:all 0.4s ease-in-out;margin-left:10px;"]);
var Burger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Burger",
  componentId: "w2b10l-4"
})(["width:15px;height:1px;background:transparent;transition:all 0.4s ease-in-out;::before,::after{content:'';position:absolute;width:15px;height:1px;background:white;transition:all 0.4s ease-in-out;}::before{transform:translateY(-3px);}::after{transform:translateY(3px);}", ""], function (props) {
  if (props.show) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:transparent;::before{transform:rotate(45deg);}::after{transform:rotate(-45deg);}"]);
  }
});


/***/ })

})
//# sourceMappingURL=index.js.a2d9446d613509a7490f.hot-update.js.map