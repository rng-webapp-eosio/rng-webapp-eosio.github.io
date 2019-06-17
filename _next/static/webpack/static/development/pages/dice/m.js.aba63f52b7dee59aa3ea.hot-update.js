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

function trackPage(url) {
  window.analytics.page(url);
}

function trackLoggedOut() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  window.analytics.track('Logged Out', props);
}

function identify(userId) {
  window.analytics.identify(userId);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  trackLoggedIn: trackLoggedIn,
  trackLoggedOut: trackLoggedOut,
  identify: identify
});

/***/ })

})
//# sourceMappingURL=m.js.aba63f52b7dee59aa3ea.hot-update.js.map