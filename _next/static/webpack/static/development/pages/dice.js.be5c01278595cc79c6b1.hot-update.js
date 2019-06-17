webpackHotUpdate("static/development/pages/dice.js",{

/***/ "./components/common/profile.js":
/*!**************************************!*\
  !*** ./components/common/profile.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_message_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/message-modal */ "./components/common/message-modal.js");
/* harmony import */ var _common_loading_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/loading-modal */ "./components/common/loading-modal.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux */ "./redux/index.js");
/* harmony import */ var _libs_eos_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../libs/eos-client */ "./libs/eos-client.js");
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/styleguide/colors */ "./libs/styleguide/colors.js");
/* harmony import */ var _libs_i18n_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/i18n-util */ "./libs/i18n-util.js");
/* harmony import */ var _libs_analytics_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../libs/analytics-helper */ "./libs/analytics-helper.js");


var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var styles = {
  root: {
    height: 36,
    background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_10__["default"].darkGrey2,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '0px 9px 0px 9px'
  },
  accountText: {
    color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_10__["default"].orangeYellow,
    fontSize: 10
  },
  welcomeText: {
    fontSize: 10
  },
  logOutText: {
    cursor: 'pointer',
    fontSize: 10,
    color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_10__["default"].darkGrey5
  },
  logInText: {
    cursor: 'pointer',
    color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_10__["default"].orangeYellow,
    fontSize: 10,
    margin: 'auto'
  },
  secondLine: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};
var Profile = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref) {
  var account = _ref.account;
  return {
    account: account
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Profile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      modalOpen: false,
      loadingOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickLogOut",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var eosClient;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_8__["actions"].logOut({
                account: _redux__WEBPACK_IMPORTED_MODULE_8__["selectors"].account(_this.props),
                scatter: {
                  version: eosClient.scatter.getVersion()
                }
              }));

              js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('chain.account');
              eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_9__["default"].getInstance();

              if (eosClient.scatter) {
                eosClient.scatter.logout();
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleClickLogIn",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var eosClient;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                loadingOpen: true
              });

              eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_9__["default"].getInstance();
              _context2.prev = 2;
              _context2.next = 5;
              return eosClient.init();

            case 5:
              if (!eosClient.account) {
                _context2.next = 11;
                break;
              }

              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_8__["actions"].updateAccount(eosClient.account));

              _this.setState({
                loadingOpen: false
              });

              _libs_analytics_helper__WEBPACK_IMPORTED_MODULE_12__["default"].trackLoggedIn({
                account: eosClient.account,
                scatter: {
                  version: eosClient.scatter.getVersion()
                }
              });
              _libs_analytics_helper__WEBPACK_IMPORTED_MODULE_12__["default"].identify(eosClient.account.name);
              return _context2.abrupt("return");

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);
              console.error(_context2.t0);

            case 16:
              _this.setState({
                loadingOpen: false
              });

              _this.setState({
                modalOpen: true
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 13]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleModalClose", function () {
      _this.setState({
        modalOpen: false
      });
    });

    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var account = _redux__WEBPACK_IMPORTED_MODULE_8__["selectors"].account(this.props);

      if (account) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.root
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.accountText
        }, account.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.secondLine
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.welcomeText
        }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_11__["default"])('welcome_back')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          className: classes.logOutText,
          onClick: this.handleClickLogOut
        }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_11__["default"])('log_out'))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: classes.root
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          className: classes.logInText,
          onClick: this.handleClickLogIn
        }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_11__["default"])('please_log_in')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_message_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
          open: this.state.modalOpen,
          onClose: this.handleModalClose
        }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_11__["default"])('no_scatter')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_loading_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
          open: this.state.loadingOpen
        }));
      }
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class);
Profile.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(Profile));

/***/ })

})
//# sourceMappingURL=dice.js.be5c01278595cc79c6b1.hot-update.js.map