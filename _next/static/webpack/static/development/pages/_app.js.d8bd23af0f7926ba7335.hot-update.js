webpackHotUpdate("static/development/pages/_app.js",{

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
function trackPage(url) {
  window.analytics.page(url);
}

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

/* harmony default export */ __webpack_exports__["default"] = ({
  trackPage: trackPage,
  trackLoggedIn: trackLoggedIn,
  trackLoggedOut: trackLoggedOut,
  identify: identify
});

/***/ })

})
//# sourceMappingURL=_app.js.d8bd23af0f7926ba7335.hot-update.js.map