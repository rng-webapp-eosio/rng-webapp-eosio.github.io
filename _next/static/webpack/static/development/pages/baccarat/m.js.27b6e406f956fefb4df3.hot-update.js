webpackHotUpdate("static/development/pages/baccarat/m.js",{

/***/ "./pages/baccarat/m.js":
/*!*****************************!*\
  !*** ./pages/baccarat/m.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/head */ "./components/head.js");
/* harmony import */ var _components_base_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/base-container */ "./components/base-container.js");
/* harmony import */ var _components_header_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header-status */ "./components/header-status.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/common */ "./components/common/index.js");
/* harmony import */ var _libs_contract_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/contract-observer */ "./libs/contract-observer.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux */ "./redux/index.js");
/* harmony import */ var _components_baccarat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/baccarat */ "./components/baccarat/index.js");
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../libs/api */ "./libs/api.js");


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














var Baccarat = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref) {
  var baccarat = _ref.baccarat,
      account = _ref.account,
      modal = _ref.modal;
  return {
    baccarat: baccarat,
    account: account,
    modal: modal
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Baccarat, _React$Component);

  function Baccarat() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Baccarat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Baccarat)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "contractObserver", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      eosClient: null
    });

    _defineProperty(_assertThisInitialized(_this), "updateCountdown", function () {
      var gameConfig = _redux__WEBPACK_IMPORTED_MODULE_11__["selectors"].getBaccaratGameConfig(_this.props);

      var timeEnd = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(gameConfig, 'time_end');

      if (timeEnd) {
        timeEnd = moment__WEBPACK_IMPORTED_MODULE_4___default()(timeEnd).utcOffset(0, true); // set the endTime to UTC+0

        var diff = timeEnd.diff(moment__WEBPACK_IMPORTED_MODULE_4___default()());
        var countdown = moment__WEBPACK_IMPORTED_MODULE_4___default.a.utc(Math.max(0, diff)).format('mm:ss');

        _this.setState({
          countdown: countdown
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "replaceHistory",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var historyFromRemote;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_libs_api__WEBPACK_IMPORTED_MODULE_13__["getBaccaratGameHistory"])();

            case 2:
              historyFromRemote = _context.sent;

              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_11__["actions"].baccaratReplaceHistory(historyFromRemote));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  _createClass(Baccarat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.replaceHistory();
      var contractObserver = _libs_contract_observer__WEBPACK_IMPORTED_MODULE_10__["default"].getInstance();
      contractObserver.onAccount(function (error, account) {
        if (error) {
          // eslint-disable-next-line
          return console.error(error);
        }

        if (account && lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEqual(account, _redux__WEBPACK_IMPORTED_MODULE_11__["selectors"].account(_this2.props)) === false) {
          _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_11__["actions"].updateAccount(account));
        }
      });
      contractObserver.onBaccarat(function (error, result) {
        if (error) {
          // eslint-disable-next-line
          return console.error(error);
        }

        var gameGlobal = result.gameGlobal,
            gameResult = result.gameResult,
            currentBets = result.currentBets; // console.log('[onBaccarat]', 'result = ', result, this.props.baccarat);

        if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(gameResult) === false) {
          if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEqual(gameResult, _redux__WEBPACK_IMPORTED_MODULE_11__["selectors"].getBaccaratGameResult(_this2.props)) === false) {
            _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_11__["actions"].baccaratFinishGame(gameResult));
          }
        } else {
          var gameConfigFromState = _redux__WEBPACK_IMPORTED_MODULE_11__["selectors"].getBaccaratGameConfig(_this2.props) || {};

          var gameConfigFromRpc = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(gameGlobal, 'game_config');

          if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEqual(gameConfigFromRpc, gameConfigFromState) === false) {
            if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isNumber(gameConfigFromRpc.round_id) && lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isNumber(gameConfigFromState.round_id) && gameConfigFromRpc.round_id !== gameConfigFromState.round_id) {
              _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_11__["actions"].baccaratReplaceHistory([]));
            }

            _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_11__["actions"].baccaratNewGame(gameGlobal));

            _redux__WEBPACK_IMPORTED_MODULE_11__["actions"].myBalanceUpdateFromRemote().then(function (action) {
              return _this2.props.dispatch(action);
            });
          }
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEqual(currentBets, _redux__WEBPACK_IMPORTED_MODULE_11__["selectors"].getBaccaratCurrentBets(_this2.props)) === false) {
          _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_11__["actions"].baccaratUpdateCurrentBets(currentBets));
        }
      }, 2 * 1000);
      setInterval(this.updateCountdown, 500);
    }
  }, {
    key: "render",
    value: function render() {
      var _selectors$modal = _redux__WEBPACK_IMPORTED_MODULE_11__["selectors"].modal(this.props),
          error = _selectors$modal.error,
          loading = _selectors$modal.loading;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_9__["Loader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Baccarat"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_9__["AppNavBar"], {
        gameType: "baccarat",
        betsHref: "/baccarat/bets"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header_status__WEBPACK_IMPORTED_MODULE_8__["default"], {
        gameType: "baccarat"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_baccarat__WEBPACK_IMPORTED_MODULE_12__["History"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_baccarat__WEBPACK_IMPORTED_MODULE_12__["GameHead"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_baccarat__WEBPACK_IMPORTED_MODULE_12__["GameTable"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_baccarat__WEBPACK_IMPORTED_MODULE_12__["GameResultModal"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_9__["ErrorModal"], {
        open: error.open,
        error: error.content
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_9__["LoadingModal"], {
        open: loading.open,
        text: loading.content
      }));
    }
  }]);

  return Baccarat;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class);
Baccarat.propTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Baccarat);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/baccarat/m")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=m.js.27b6e406f956fefb4df3.hot-update.js.map