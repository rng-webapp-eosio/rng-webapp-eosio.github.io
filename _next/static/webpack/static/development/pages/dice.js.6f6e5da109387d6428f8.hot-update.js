webpackHotUpdate("static/development/pages/dice.js",{

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

/***/ })

})
//# sourceMappingURL=dice.js.6f6e5da109387d6428f8.hot-update.js.map