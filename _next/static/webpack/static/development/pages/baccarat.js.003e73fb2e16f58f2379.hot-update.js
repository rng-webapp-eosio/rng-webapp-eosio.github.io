webpackHotUpdate("static/development/pages/baccarat.js",{

/***/ "./components/header-status.js":
/*!*************************************!*\
  !*** ./components/header-status.js ***!
  \*************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_eos_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/eos-client */ "./libs/eos-client.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common */ "./components/common/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _eos_amount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./eos-amount */ "./components/eos-amount.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux */ "./redux/index.js");
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../libs/styleguide/colors */ "./libs/styleguide/colors.js");


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












/** @type {EosClient} */

var eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance();
var styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 44
  },
  icon: {
    width: 30,
    height: 30,
    padding: 7
  },
  amount: {
    height: 36,
    lineHeight: '36px',
    fontSize: 16,
    paddingRight: 10,
    borderRadius: 4
  },
  twoBox: {
    flexGrow: 1,
    height: 44,
    margin: 0
  },
  status: {
    height: 36,
    background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2,
    borderRadius: 4
  },
  gridItem: {
    height: 18,
    display: 'flex',
    alignItems: 'center'
  },
  barWrap: {
    flexBasis: 'auto',
    flexGrow: 1,
    lineHeight: 9,
    height: 9,
    borderRadius: 5,
    border: '1px solid #333333',
    margin: '0px 5px 0px 5px'
  },
  barFill: {
    width: '67%',
    lineHeight: 9,
    height: 9,
    borderRadius: 5,
    backgroundImage: 'linear-gradient(to right, #0096ff, #42e8df)',
    color: 'transparent'
  },
  leftText: {
    marginLeft: 8,
    width: 20,
    fontSize: 10
  },
  rightText: {
    marginRight: 8,
    width: 25,
    fontSize: 10
  },
  textColor: {
    color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].clearBlue
  }
};
var HeaderStatus = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref) {
  var account = _ref.account,
      myBalance = _ref.myBalance;
  return {
    account: account,
    myBalance: myBalance
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderStatus, _React$Component);

  function HeaderStatus() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderStatus);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderStatus)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      onBalanceIntervalId: null,
      cpuUsage: 0,
      ramUsage: 0
    });

    _defineProperty(_assertThisInitialized(_this), "updateBalanceAndRam",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(account) {
        var myBalance, _ref3, cpu;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return eosClient.getMyBalance();

              case 2:
                myBalance = _context.sent;

                _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_10__["actions"].myBalanceUpdate(myBalance));

                _context.next = 6;
                return eosClient.getResources(account.name);

              case 6:
                _ref3 = _context.sent;
                cpu = _ref3.cpu;

                _this.setState({
                  cpuUsage: cpu.used / cpu.max
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "clearBalanceAndRam",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_10__["actions"].myBalanceUpdate(null));

              _this.setState({
                cpuUsage: 0
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(newProps) {
        var account, newAccount;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                account = _redux__WEBPACK_IMPORTED_MODULE_10__["selectors"].account(_this.props);
                newAccount = _redux__WEBPACK_IMPORTED_MODULE_10__["selectors"].account(newProps);

                if (account === null && newAccount !== null) {
                  _this.updateBalanceAndRam(newAccount);
                } else if (account !== null && newAccount === null) {
                  _this.clearBalanceAndRam();
                }

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "componentDidMount",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var _this$props$gameType, gameType, account, _ref7, ram;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this$props$gameType = _this.props.gameType, gameType = _this$props$gameType === void 0 ? 'dice' : _this$props$gameType;
              account = _redux__WEBPACK_IMPORTED_MODULE_10__["selectors"].account(_this.props);

              if (account) {
                _this.updateBalanceAndRam(account);
              }

              _context4.next = 5;
              return eosClient.getResources(_config__WEBPACK_IMPORTED_MODULE_8__["default"].contract[gameType]);

            case 5:
              _ref7 = _context4.sent;
              ram = _ref7.ram;

              if (ram.quota !== -1) {
                _this.setState({
                  ramUsage: ram.usage / ram.quota
                });
              }

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    return _this;
  }

  _createClass(HeaderStatus, [{
    key: "render",
    value: function render() {
      var myBalance = _redux__WEBPACK_IMPORTED_MODULE_10__["selectors"].getMyBalance(this.props) || '-1';
      myBalance = parseFloat(myBalance.replace('EOS', '').trim());
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/img/token-eos.svg",
        className: classes.icon
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        className: classes.twoBox,
        spacing: 8,
        alignItems: "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 4,
        style: {
          paddingRight: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_eos_amount__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: styles.amount,
        amount: myBalance
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 4,
        style: {
          paddingRight: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.status
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.gridItem
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.leftText
      }, "CPU"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.barWrap
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.barFill,
        style: {
          width: this.state.cpuUsage + '%'
        }
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.rightText
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: classes.textColor
      }, this.state.cpuUsage.toFixed(1)), "\xA0%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.gridItem
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.leftText
      }, "RAM"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.barWrap
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.barFill,
        style: {
          width: this.state.ramUsage + '%'
        }
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.rightText
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: classes.textColor
      }, this.state.ramUsage.toFixed(1)), "\xA0%")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 4
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_7__["Profile"], null))));
    }
  }]);

  return HeaderStatus;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class);
HeaderStatus.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  gameType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['dice', 'baccarat', 'pk10'])
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(HeaderStatus));

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: store, initializeStore, actions, selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return selectors; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "../node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pk10__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pk10 */ "./redux/pk10.js");
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dice */ "./redux/dice.js");
/* harmony import */ var _baccarat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./baccarat */ "./redux/baccarat.js");
var _INITIAL_STATE, _combineReducers;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // my balance

var ACTION_UPDATE_MY_BALANCE = 'ACTION_UPDATE_MY_BALANCE';
var ACTION_UPDATE_ACCOUNT = 'ACTION_UPDATE_ACCOUNT';
var ACTION_UPDATE_MESSAGE_MODAL = 'ACTION_UPDATE_MESSAGE_MODAL';
var ACTION_UPDATE_LOADING_MODAL = 'ACTION_UPDATE_LOADING_MODAL';
var ACTION_UPDATE_ERROR_MODAL = 'ACTION_UPDATE_ERROR_MODAL';
var INITIAL_STATE = (_INITIAL_STATE = {
  myBalance: null,
  account: null,
  modal: {
    error: {
      open: false,
      content: null
    },
    message: {
      open: false,
      content: null
    },
    loading: {
      open: false,
      content: null
    }
  }
}, _defineProperty(_INITIAL_STATE, _baccarat__WEBPACK_IMPORTED_MODULE_6__["NAME_SPACE"], _baccarat__WEBPACK_IMPORTED_MODULE_6__["INITIAL_STATE"]), _defineProperty(_INITIAL_STATE, _pk10__WEBPACK_IMPORTED_MODULE_4__["NAME_SPACE"], _pk10__WEBPACK_IMPORTED_MODULE_4__["INITIAL_STATE"]), _defineProperty(_INITIAL_STATE, _dice__WEBPACK_IMPORTED_MODULE_5__["NAME_SPACE"], _dice__WEBPACK_IMPORTED_MODULE_5__["INITIAL_STATE"]), _INITIAL_STATE);
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])((_combineReducers = {
  myBalance: function myBalance() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE.myBalance;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case ACTION_UPDATE_MY_BALANCE:
        {
          var myBalance = action.payload.myBalance;
          return myBalance;
        }

      default:
        return state;
    }
  },
  account: function account() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE.account;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var type = action.type,
        payload = action.payload;

    switch (type) {
      case ACTION_UPDATE_ACCOUNT:
        {
          var account = payload.account;
          return account;
        }

      default:
        return state;
    }
  },
  modal: function modal() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE.modal;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var type = action.type,
        payload = action.payload;

    switch (type) {
      case ACTION_UPDATE_ERROR_MODAL:
        {
          var open = payload.open,
              content = payload.content;

          var error = state.error,
              rest = _objectWithoutProperties(state, ["error"]);

          return _objectSpread({}, rest, {
            error: {
              open: open,
              content: content
            }
          });
        }

      case ACTION_UPDATE_MESSAGE_MODAL:
        {
          var _open = payload.open,
              _content = payload.content;

          var message = state.message,
              _rest = _objectWithoutProperties(state, ["message"]);

          return _objectSpread({}, _rest, {
            message: {
              open: _open,
              content: _content
            }
          });
        }

      case ACTION_UPDATE_LOADING_MODAL:
        {
          var _open2 = payload.open,
              _content2 = payload.content;

          var loading = state.loading,
              _rest2 = _objectWithoutProperties(state, ["loading"]);

          return _objectSpread({}, _rest2, {
            loading: {
              open: _open2,
              content: _content2
            }
          });
        }

      default:
        return state;
    }
  }
}, _defineProperty(_combineReducers, _baccarat__WEBPACK_IMPORTED_MODULE_6__["NAME_SPACE"], _baccarat__WEBPACK_IMPORTED_MODULE_6__["reducer"]), _defineProperty(_combineReducers, _pk10__WEBPACK_IMPORTED_MODULE_4__["NAME_SPACE"], _pk10__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _defineProperty(_combineReducers, _dice__WEBPACK_IMPORTED_MODULE_5__["NAME_SPACE"], _dice__WEBPACK_IMPORTED_MODULE_5__["reducer"]), _combineReducers));
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, INITIAL_STATE);
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
}
var actions = _objectSpread({
  myBalanceUpdate: function myBalanceUpdate(myBalance) {
    return {
      type: ACTION_UPDATE_MY_BALANCE,
      payload: {
        myBalance: myBalance
      }
    };
  },
  updateAccount: function updateAccount(account) {
    return {
      type: ACTION_UPDATE_ACCOUNT,
      payload: {
        account: account
      }
    };
  },
  logOut: function logOut() {
    return {
      type: ACTION_UPDATE_ACCOUNT,
      payload: {
        account: null
      }
    };
  },
  modal: {
    showError: function showError(content) {
      return {
        type: ACTION_UPDATE_ERROR_MODAL,
        payload: {
          open: true,
          content: content
        }
      };
    },
    showMessage: function showMessage(content) {
      return {
        type: ACTION_UPDATE_MESSAGE_MODAL,
        payload: {
          open: true,
          content: content
        }
      };
    },
    showLoading: function showLoading(content) {
      return {
        type: ACTION_UPDATE_LOADING_MODAL,
        payload: {
          open: true,
          content: content
        }
      };
    },
    closeError: function closeError() {
      return {
        type: ACTION_UPDATE_ERROR_MODAL,
        payload: {
          open: false
        }
      };
    },
    closeMessage: function closeMessage() {
      return {
        type: ACTION_UPDATE_MESSAGE_MODAL,
        payload: {
          open: false
        }
      };
    },
    closeLoading: function closeLoading() {
      return {
        type: ACTION_UPDATE_LOADING_MODAL,
        payload: {
          open: false
        }
      };
    }
  }
}, _baccarat__WEBPACK_IMPORTED_MODULE_6__["actions"], _pk10__WEBPACK_IMPORTED_MODULE_4__["actions"], _dice__WEBPACK_IMPORTED_MODULE_5__["actions"]);
var selectors = _objectSpread({
  getMyBalance: function getMyBalance() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(store, 'myBalance');
  },
  account: function account() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(store, 'account');
  },
  modal: function modal() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(store, 'modal', {});
  },
  modalError: function modalError() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(store, 'modal.error', {});
  },
  modalMessage: function modalMessage() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(store, 'modal.message', {});
  },
  modalLoading: function modalLoading() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(store, 'modal.loading', {});
  }
}, _baccarat__WEBPACK_IMPORTED_MODULE_6__["selectors"], _pk10__WEBPACK_IMPORTED_MODULE_4__["selectors"], _dice__WEBPACK_IMPORTED_MODULE_5__["selectors"]);

/***/ })

})
//# sourceMappingURL=baccarat.js.003e73fb2e16f58f2379.hot-update.js.map