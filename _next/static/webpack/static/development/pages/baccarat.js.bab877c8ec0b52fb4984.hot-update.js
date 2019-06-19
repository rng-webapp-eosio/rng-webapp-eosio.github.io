webpackHotUpdate("static/development/pages/baccarat.js",{

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "../node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_eos_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/eos-client */ "./libs/eos-client.js");
/* harmony import */ var _pk10__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pk10 */ "./redux/pk10.js");
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dice */ "./redux/dice.js");
/* harmony import */ var _baccarat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./baccarat */ "./redux/baccarat.js");


var _INITIAL_STATE, _combineReducers;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
}, _defineProperty(_INITIAL_STATE, _baccarat__WEBPACK_IMPORTED_MODULE_8__["NAME_SPACE"], _baccarat__WEBPACK_IMPORTED_MODULE_8__["INITIAL_STATE"]), _defineProperty(_INITIAL_STATE, _pk10__WEBPACK_IMPORTED_MODULE_6__["NAME_SPACE"], _pk10__WEBPACK_IMPORTED_MODULE_6__["INITIAL_STATE"]), _defineProperty(_INITIAL_STATE, _dice__WEBPACK_IMPORTED_MODULE_7__["NAME_SPACE"], _dice__WEBPACK_IMPORTED_MODULE_7__["INITIAL_STATE"]), _INITIAL_STATE);
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])((_combineReducers = {
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
}, _defineProperty(_combineReducers, _baccarat__WEBPACK_IMPORTED_MODULE_8__["NAME_SPACE"], _baccarat__WEBPACK_IMPORTED_MODULE_8__["reducer"]), _defineProperty(_combineReducers, _pk10__WEBPACK_IMPORTED_MODULE_6__["NAME_SPACE"], _pk10__WEBPACK_IMPORTED_MODULE_6__["reducer"]), _defineProperty(_combineReducers, _dice__WEBPACK_IMPORTED_MODULE_7__["NAME_SPACE"], _dice__WEBPACK_IMPORTED_MODULE_7__["reducer"]), _combineReducers));
var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, INITIAL_STATE);
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
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
  // TODO https://github.com/jarvisdotai/rng-webapp/issues/14
  myBalanceUpdateFromRemote: function () {
    var _myBalanceUpdateFromRemote = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var eosClient, myBalance;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance();
              _context.prev = 1;
              _context.next = 4;
              return eosClient.getMyBalance();

            case 4:
              myBalance = _context.sent;
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    function myBalanceUpdateFromRemote() {
      return _myBalanceUpdateFromRemote.apply(this, arguments);
    }

    return myBalanceUpdateFromRemote;
  }(),
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
}, _baccarat__WEBPACK_IMPORTED_MODULE_8__["actions"], _pk10__WEBPACK_IMPORTED_MODULE_6__["actions"], _dice__WEBPACK_IMPORTED_MODULE_7__["actions"]);
var selectors = _objectSpread({
  getMyBalance: function getMyBalance() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(store, 'myBalance');
  },
  account: function account() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(store, 'account');
  },
  modal: function modal() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(store, 'modal', {});
  },
  modalError: function modalError() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(store, 'modal.error', {});
  },
  modalMessage: function modalMessage() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(store, 'modal.message', {});
  },
  modalLoading: function modalLoading() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(store, 'modal.loading', {});
  }
}, _baccarat__WEBPACK_IMPORTED_MODULE_8__["selectors"], _pk10__WEBPACK_IMPORTED_MODULE_6__["selectors"], _dice__WEBPACK_IMPORTED_MODULE_7__["selectors"]);

/***/ })

})
//# sourceMappingURL=baccarat.js.bab877c8ec0b52fb4984.hot-update.js.map