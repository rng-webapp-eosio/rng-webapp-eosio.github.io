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
function trackLoggedIn(username) {
  window.analytics.track('Logged In', {
    username: username
  });
}
function trackLoggedOut(username) {
  window.analytics.track('Logged Out', {
    username: username
  });
}
function identify(userId) {
  window.analytics.identify(userId);
}

/***/ })

})
//# sourceMappingURL=index.js.3ee8237a3c5f1e68dbad.hot-update.js.map