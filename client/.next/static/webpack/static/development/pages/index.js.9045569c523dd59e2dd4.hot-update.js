webpackHotUpdate("static/development/pages/index.js",{

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
})(["button{cursor:pointer;user-select:none;font-weight:500;font-size:1.3rem;border-radius:0.2rem;margin:0.5rem;padding:0.5rem;}", ""], function (props) {
  if (props.type === 'danger') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--danger);border:1px solid var(--danger);:hover,:focus{background:var(--danger);color:var(--danger-hover);}}"]);
  } else if (props.type === 'ark') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:white;background:var(--blue) border:1px solid var(--blue);:hover{color:var(--light-text-color);background:var(--blue);}}"]);
  } else if (props.type === 'success') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--success);border:1px solid var(--success);:hover{color:var(--success-hover);background:var(--success);}}"]);
  } else if (props.type === 'warning') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["button{color:var(--warning);border:1px solid var(--warning);:hover{color:var(--warning-hover);background:var(--warning);}}"]);
  }
});


/***/ })

})
//# sourceMappingURL=index.js.9045569c523dd59e2dd4.hot-update.js.map