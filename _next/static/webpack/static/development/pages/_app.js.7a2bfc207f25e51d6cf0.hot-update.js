webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_with_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/with-redux-store */ "./libs/with-redux-store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-jss/lib/JssProvider */ "../node_modules/react-jss/lib/JssProvider.js");
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../libs/styleguide/colors */ "./libs/styleguide/colors.js");
/* harmony import */ var _libs_get_page_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/get-page-context */ "./libs/get-page-context.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// https://github.com/zeit/next.js/blob/master/examples/with-redux/pages/_app.js
// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
// https://github.com/zeit/next.js/tree/canary/examples/with-segment-analytics








 // Track client-side page views with Segment

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', function (url) {
  console.log('routerChangeComplete', url);
  console.log(window.analytics);
});

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this));
    _this.pageContext = Object(_libs_get_page_context__WEBPACK_IMPORTED_MODULE_9__["default"])();
    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      // eslint-disable-next-line no-undef
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_7___default.a, {
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
        store: reduxStore
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, _extends({}, pageProps, {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["521286143", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_8__["default"].darkGrey2]]]) + " " + (pageProps.className != null && pageProps.className || "")
      }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "521286143",
        css: "body{width:auto;background-color:".concat(_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_8__["default"].darkGrey2, ";font-family:Roboto,Helvetica,Arial,sans-serif;margin:0px;overflow-x:hidden;overflow-y:scroll;color:#ffffff;-webkit-scrollbar-color:transparent;-moz-scrollbar-color:transparent;-ms-scrollbar-color:transparent;scrollbar-color:transparent;-webkit-scrollbar-width:auto;-moz-scrollbar-width:auto;-ms-scrollbar-width:auto;scrollbar-width:auto;}::-webkit-scrollbar{width:15px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ20vRGV2ZWxvcGVyL3Rva2FtYWstbGFicy9ybmctd2ViYXBwL3NyYy9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEMkIsQUFHd0IsQUFXQSxXQVZtQyxBQVd2Qix1QkFDekIsdUJBWG1ELDhDQUN0QyxXQUNPLGtCQUNBLGtCQUNKLGNBQ2MsaUlBQ1AscUdBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9nZ20vRGV2ZWxvcGVyL3Rva2FtYWstbGFicy9ybmctd2ViYXBwL3NyYy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9ibG9iL21hc3Rlci9leGFtcGxlcy93aXRoLXJlZHV4L3BhZ2VzL19hcHAuanNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL25leHRqcy9wYWdlcy9fYXBwLmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtc2VnbWVudC1hbmFseXRpY3NcblxuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tICcuLi9saWJzL3dpdGgtcmVkdXgtc3RvcmUnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBKc3NQcm92aWRlciBmcm9tICdyZWFjdC1qc3MvbGliL0pzc1Byb3ZpZGVyJztcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9saWJzL3N0eWxlZ3VpZGUvY29sb3JzJztcbmltcG9ydCBnZXRQYWdlQ29udGV4dCBmcm9tICcuLi9saWJzL2dldC1wYWdlLWNvbnRleHQnO1xuXG4vLyBUcmFjayBjbGllbnQtc2lkZSBwYWdlIHZpZXdzIHdpdGggU2VnbWVudFxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHVybCA9PiB7XG4gIGNvbnNvbGUubG9nKCdyb3V0ZXJDaGFuZ2VDb21wbGV0ZScsIHVybCk7XG4gIGNvbnNvbGUubG9nKHdpbmRvdy5hbmFseXRpY3MpO1xufSk7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VDb250ZXh0ID0gZ2V0UGFnZUNvbnRleHQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMgJiYganNzU3R5bGVzLnBhcmVudE5vZGUpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuXG4gICAgICAgIDxKc3NQcm92aWRlclxuICAgICAgICAgIHJlZ2lzdHJ5PXt0aGlzLnBhZ2VDb250ZXh0LnNoZWV0c1JlZ2lzdHJ5fVxuICAgICAgICAgIGdlbmVyYXRlQ2xhc3NOYW1lPXt0aGlzLnBhZ2VDb250ZXh0LmdlbmVyYXRlQ2xhc3NOYW1lfVxuICAgICAgICA+XG4gICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXJcbiAgICAgICAgICAgIHRoZW1lPXt0aGlzLnBhZ2VDb250ZXh0LnRoZW1lfVxuICAgICAgICAgICAgc2hlZXRzTWFuYWdlcj17dGhpcy5wYWdlQ29udGV4dC5zaGVldHNNYW5hZ2VyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L0pzc1Byb3ZpZGVyPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5kYXJrR3JleTJ9O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBzY3JvbGxiYXItY29sb3I6IHRyYW5zcGFyZW50OyAvKiBGb3IgZmlyZWZveCovXG4gICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IGF1dG87IC8qIEZvciBmaXJlZm94Ki9cbiAgICAgICAgICB9XG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICB3aWR0aDogMTVweDsgIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoTXlBcHApOyJdfQ== */\n/*@ sourceURL=/Users/ggm/Developer/tokamak-labs/rng-webapp/src/pages/_app.js */"),
        dynamic: [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_8__["default"].darkGrey2]
      }));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_with_redux_store__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.7a2bfc207f25e51d6cf0.hot-update.js.map