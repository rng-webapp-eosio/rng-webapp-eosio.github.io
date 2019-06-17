webpackHotUpdate("static/development/pages/dice.js",{

/***/ "./pages/dice/m.js":
/*!*************************!*\
  !*** ./pages/dice/m.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v4 */ "../node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_dice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dice */ "./components/dice/index.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common */ "./components/common/index.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/head */ "./components/head.js");
/* harmony import */ var _components_base_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/base-container */ "./components/base-container.js");
/* harmony import */ var _components_header_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/header-status */ "./components/header-status.js");
/* harmony import */ var _libs_contract_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../libs/contract-observer */ "./libs/contract-observer.js");
/* harmony import */ var _libs_i18n_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../libs/i18n-util */ "./libs/i18n-util.js");
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../libs/styleguide/colors */ "./libs/styleguide/colors.js");
/* harmony import */ var _libs_eos_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../libs/eos-client */ "./libs/eos-client.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux */ "./redux/index.js");


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
  betButton: {
    height: 48,
    fontSize: 18,
    textAlign: 'center',
    color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].darkGrey
  }
};
/** @type {EosClient} */

var eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_15__["default"].getInstance();
var Dice = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref) {
  var dice = _ref.dice,
      account = _ref.account,
      myBalance = _ref.myBalance;
  return {
    dice: dice,
    account: account,
    myBalance: myBalance
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dice, _React$Component);

  function Dice() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dice)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      gameResultModal: false,
      betreceipt: {},
      loadingModal: false
    });

    _defineProperty(_assertThisInitialized(_this), "startBet",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var resolve, reject, promise, rollUnder, betAmount, betClientId, quantity, trx, intervalId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                loadingModal: true
              });

              resolve = null;
              reject = null;
              promise = new Promise(function (_resolve, _reject) {
                resolve = _resolve;
                reject = _reject;
              });
              rollUnder = _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].getRollUnder(_this.props);
              betAmount = _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].getBetAmount(_this.props);
              betClientId = uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()();
              quantity = "".concat(parseFloat(betAmount).toFixed(4), " EOS");
              _context2.prev = 8;
              _context2.next = 11;
              return eosClient.diceBet(quantity, rollUnder, betClientId);

            case 11:
              trx = _context2.sent;

              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_16__["actions"].rollDice(betClientId)); // eslint-disable-next-line


              console.log("Transaction ID: ".concat(trx.transaction_id));

              _this.setState({
                loadingModal: false
              });

              _context2.next = 21;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](8);

              _this.setState({
                loadingModal: false
              });

              reject(_context2.t0);

            case 21:
              intervalId = setInterval(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var betreceiptsFromChain, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, betreceipt;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return eosClient.diceLatestBetreceipts();

                      case 2:
                        betreceiptsFromChain = _context.sent;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 6;
                        _iterator = betreceiptsFromChain[Symbol.iterator]();

                      case 8:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                          _context.next = 19;
                          break;
                        }

                        betreceipt = _step.value;

                        if (!(betreceipt.betMemo === betClientId)) {
                          _context.next = 16;
                          break;
                        }

                        _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_16__["actions"].rollFinished(betreceipt));

                        _this.setState({
                          gameResultModal: true,
                          betreceipt: betreceipt
                        });

                        clearInterval(intervalId);
                        resolve(betreceipt);
                        return _context.abrupt("break", 19);

                      case 16:
                        _iteratorNormalCompletion = true;
                        _context.next = 8;
                        break;

                      case 19:
                        _context.next = 25;
                        break;

                      case 21:
                        _context.prev = 21;
                        _context.t0 = _context["catch"](6);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                      case 25:
                        _context.prev = 25;
                        _context.prev = 26;

                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                          _iterator.return();
                        }

                      case 28:
                        _context.prev = 28;

                        if (!_didIteratorError) {
                          _context.next = 31;
                          break;
                        }

                        throw _iteratorError;

                      case 31:
                        return _context.finish(28);

                      case 32:
                        return _context.finish(25);

                      case 33:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[6, 21, 25, 33], [26,, 28, 32]]);
              })), 300);
              return _context2.abrupt("return", promise);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[8, 17]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "startAutoBet",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var betreceipt, autoBet;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this.startBet();

            case 2:
              betreceipt = _context3.sent;
              autoBet = _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].diceAutoBet(_this.props);

              if (!autoBet) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return", _this.startAutoBet());

            case 8:
              return _context3.abrupt("return", betreceipt);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleBetButton",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var betreceipt, myBalance;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _this.startBet();

            case 3:
              betreceipt = _context4.sent;
              console.log('[onBetResult]', betreceipt);
              _context4.next = 7;
              return eosClient.getMyBalance();

            case 7:
              myBalance = _context4.sent;

              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_16__["actions"].updateMyBalance(myBalance));

              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleModalClose", function (name) {
      return function () {
        _this.setState(_defineProperty({}, name, false));
      };
    });

    return _this;
  }

  _createClass(Dice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var contractObserver = _libs_contract_observer__WEBPACK_IMPORTED_MODULE_12__["default"].getInstance();
      contractObserver.onAccount(function (error, account) {
        if (error) {
          // eslint-disable-next-line
          return console.error(error);
        }

        if (account && lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEqual(account, _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].account(_this2.props)) === false) {
          _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_16__["actions"].updateAccount(account));
        }
      });
      contractObserver.onDice(function (error, result) {
        if (error) {
          // eslint-disable-next-line
          return console.error(error);
        }

        var gameGlobal = result.gameGlobal;

        if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEqual(_redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].getDiceGameGlobal(_this2.props), gameGlobal) === false) {
          _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_16__["actions"].diceUpdateGameGlobal(gameGlobal));
        }
      }, 60 * 1000);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var newAutoBet = _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].diceAutoBet(newProps);
      var autoBet = _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].diceAutoBet(this.props);

      var _ref6 = _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].getBetStatus(this.props) || {},
          isRolling = _ref6.isRolling;

      if (newAutoBet && !autoBet && !isRolling) {
        this.startAutoBet();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var rollUnder = _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].getRollUnder(this.props);
      var betStatus = _redux__WEBPACK_IMPORTED_MODULE_16__["selectors"].getBetStatus(this.props);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_8__["Loader"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Dice"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_8__["AppNavBar"], {
        gameType: "dice",
        betsHref: "/dice/bets"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header_status__WEBPACK_IMPORTED_MODULE_11__["default"], {
        gameType: "dice"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_dice__WEBPACK_IMPORTED_MODULE_7__["OddsInfo"], {
        currentBetNumber: rollUnder
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_dice__WEBPACK_IMPORTED_MODULE_7__["DiceInfo"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_8__["ActionButton"], {
        style: styles.betButton,
        onClick: this.handleBetButton
      }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_13__["default"])('start_betting'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_dice__WEBPACK_IMPORTED_MODULE_7__["DiceRollingModal"], {
        open: betStatus.isRolling
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_dice__WEBPACK_IMPORTED_MODULE_7__["GameResultModal"], {
        open: this.state.gameResultModal,
        betreceipt: this.state.betreceipt,
        onClick: this.handleModalClose('gameResultModal')
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_10__["default"], {
        background: false
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_dice__WEBPACK_IMPORTED_MODULE_7__["Bottom"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_8__["LoadingModal"], {
        open: this.state.loadingModal,
        onClose: this.handleModalClose('loadingModal')
      }));
    }
  }]);

  return Dice;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class);
Dice.propTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Dice));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dice/m")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=dice.js.02deb809c9f980569ca1.hot-update.js.map