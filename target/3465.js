(self["webpackChunkopenems_ui"] = self["webpackChunkopenems_ui"] || []).push([[3465],{

/***/ 23465:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-bdecfebf.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startStatusTap": () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 45133);
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 5392);



const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__.c)(contentEl, resolve)).then(() => {
          (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => contentEl.scrollToTop(300));
        });
      }
    });
  });
};




/***/ })

}]);
//# sourceMappingURL=3465.js.map