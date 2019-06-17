webpackHotUpdate("static/development/pages/index.js",{

/***/ "./libs/analytics-helper.js":
/*!**********************************!*\
  !*** ./libs/analytics-helper.js ***!
  \**********************************/
/*! exports provided: trackLoggedIn, trackLoggedOut, identify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackLoggedIn", function() { return trackLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackLoggedOut", function() { return trackLoggedOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identify", function() { return identify; });
/**
 * https://segment.com/docs/sources/website/analytics.js/quickstart/
 */
function trackLoggedIn(account) {
  window.analytics.track('Logged In', {
    account: account
  });
}
function trackLoggedOut(account) {
  window.analytics.track('Logged Out', {
    account: account
  });
}
function identify(userId) {
  window.analytics.identify(userId);
}

/***/ })

})
//# sourceMappingURL=index.js.5e3e76e939dea4852f57.hot-update.js.map