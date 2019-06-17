webpackHotUpdate("static/development/pages/dice.js",{

/***/ "./libs/analytics-helper.js":
/*!**********************************!*\
  !*** ./libs/analytics-helper.js ***!
  \**********************************/
/*! exports provided: trackLoggedIn, identify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackLoggedIn", function() { return trackLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identify", function() { return identify; });
/**
 * https://segment.com/docs/sources/website/analytics.js/quickstart/
 */
function trackLoggedIn(username) {
  window.analytics.track('Logged In', {
    username: username
  });
}
function identify(username) {
  window.analytics.track('Logged In', {
    username: username
  });
}

/***/ })

})
//# sourceMappingURL=dice.js.35fb10a40493e5476b81.hot-update.js.map