webpackHotUpdate("static/development/pages/dice/m.js",{

/***/ "./libs/analytics-helper.js":
/*!**********************************!*\
  !*** ./libs/analytics-helper.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * https://segment.com/docs/sources/website/analytics.js/quickstart/
 */
function trackLoggedIn() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  window.analytics.track('Logged In', props);
}

function trackLoggedOut() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  window.analytics.track('Logged Out', props);
}

function identify(userId) {
  window.analytics.identify(userId);
}

function trackPage(url) {}

/* harmony default export */ __webpack_exports__["default"] = ({
  trackLoggedIn: trackLoggedIn,
  trackLoggedOut: trackLoggedOut,
  identify: identify
});

/***/ })

})
//# sourceMappingURL=m.js.d24c88fec85098b42e94.hot-update.js.map