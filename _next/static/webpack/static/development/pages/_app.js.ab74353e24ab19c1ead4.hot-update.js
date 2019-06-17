webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
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
  console.log(global.analytics);
  console.log(window.analytics);
  window.analytics.page(url);
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
        css: "body{width:auto;background-color:".concat(_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_8__["default"].darkGrey2, ";font-family:Roboto,Helvetica,Arial,sans-serif;margin:0px;overflow-x:hidden;overflow-y:scroll;color:#ffffff;-webkit-scrollbar-color:transparent;-moz-scrollbar-color:transparent;-ms-scrollbar-color:transparent;scrollbar-color:transparent;-webkit-scrollbar-width:auto;-moz-scrollbar-width:auto;-ms-scrollbar-width:auto;scrollbar-width:auto;}::-webkit-scrollbar{width:15px;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ20vRGV2ZWxvcGVyL3Rva2FtYWstbGFicy9ybmctd2ViYXBwL3NyYy9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEMkIsQUFHd0IsQUFXQSxXQVZtQyxBQVd2Qix1QkFDekIsdUJBWG1ELDhDQUN0QyxXQUNPLGtCQUNBLGtCQUNKLGNBQ2MsaUlBQ1AscUdBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9nZ20vRGV2ZWxvcGVyL3Rva2FtYWstbGFicy9ybmctd2ViYXBwL3NyYy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9ibG9iL21hc3Rlci9leGFtcGxlcy93aXRoLXJlZHV4L3BhZ2VzL19hcHAuanNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL25leHRqcy9wYWdlcy9fYXBwLmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtc2VnbWVudC1hbmFseXRpY3NcblxuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tICcuLi9saWJzL3dpdGgtcmVkdXgtc3RvcmUnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBKc3NQcm92aWRlciBmcm9tICdyZWFjdC1qc3MvbGliL0pzc1Byb3ZpZGVyJztcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9saWJzL3N0eWxlZ3VpZGUvY29sb3JzJztcbmltcG9ydCBnZXRQYWdlQ29udGV4dCBmcm9tICcuLi9saWJzL2dldC1wYWdlLWNvbnRleHQnO1xuXG4vLyBUcmFjayBjbGllbnQtc2lkZSBwYWdlIHZpZXdzIHdpdGggU2VnbWVudFxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHVybCA9PiB7XG4gIGNvbnNvbGUubG9nKCdyb3V0ZXJDaGFuZ2VDb21wbGV0ZScsIHVybCk7XG4gIGNvbnNvbGUubG9nKGdsb2JhbC5hbmFseXRpY3MpO1xuICBjb25zb2xlLmxvZyh3aW5kb3cuYW5hbHl0aWNzKTtcbiAgd2luZG93LmFuYWx5dGljcy5wYWdlKHVybCk7XG59KTtcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZUNvbnRleHQgPSBnZXRQYWdlQ29udGV4dCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG5cbiAgICAgICAgPEpzc1Byb3ZpZGVyXG4gICAgICAgICAgcmVnaXN0cnk9e3RoaXMucGFnZUNvbnRleHQuc2hlZXRzUmVnaXN0cnl9XG4gICAgICAgICAgZ2VuZXJhdGVDbGFzc05hbWU9e3RoaXMucGFnZUNvbnRleHQuZ2VuZXJhdGVDbGFzc05hbWV9XG4gICAgICAgID5cbiAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlclxuICAgICAgICAgICAgdGhlbWU9e3RoaXMucGFnZUNvbnRleHQudGhlbWV9XG4gICAgICAgICAgICBzaGVldHNNYW5hZ2VyPXt0aGlzLnBhZ2VDb250ZXh0LnNoZWV0c01hbmFnZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvSnNzUHJvdmlkZXI+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmRhcmtHcmV5Mn07XG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIEZvciBmaXJlZm94Ki9cbiAgICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogYXV0bzsgLyogRm9yIGZpcmVmb3gqL1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4OyAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShNeUFwcCk7Il19 */\n/*@ sourceURL=/Users/ggm/Developer/tokamak-labs/rng-webapp/src/pages/_app.js */"),
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
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.ab74353e24ab19c1ead4.hot-update.js.map