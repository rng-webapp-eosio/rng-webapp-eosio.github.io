webpackHotUpdate("static/development/pages/baccarat.js",{

/***/ "./components/baccarat/game-table.js":
/*!*******************************************!*\
  !*** ./components/baccarat/game-table.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-container */ "./components/base-container.js");
/* harmony import */ var _game_counter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-counter */ "./components/baccarat/game-counter.js");
/* harmony import */ var _libs_eos_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../libs/eos-client */ "./libs/eos-client.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux */ "./redux/index.js");
/* harmony import */ var _libs_format_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/format-helper */ "./libs/format-helper.js");
/* harmony import */ var _libs_error_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../libs/error-parser */ "./libs/error-parser.js");
/* harmony import */ var _token_selector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-selector */ "./components/baccarat/token-selector.js");
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../libs/styleguide/colors */ "./libs/styleguide/colors.js");
/* harmony import */ var _libs_i18n_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../libs/i18n-util */ "./libs/i18n-util.js");


var _dec, _class, _class2, _temp, _dec2, _class3;

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

var eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_9__["default"].getInstance();
var PlayerArea = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref) {
  var baccarat = _ref.baccarat,
      modal = _ref.modal;
  return {
    baccarat: baccarat,
    modal: modal
  };
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PlayerArea, _React$Component);

  function PlayerArea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PlayerArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PlayerArea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentBets: []
    });

    _defineProperty(_assertThisInitialized(_this), "handlerOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var areaId, selectedToken, betItem, quantity, result, rngError;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_10__["actions"].modal.showLoading('betting...'));

              areaId = _this.props.areaId;
              selectedToken = _redux__WEBPACK_IMPORTED_MODULE_10__["selectors"].baccaratSelectedToken(_this.props);

              if (!(selectedToken === null)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              betItem = PlayerArea.AREA_ID[areaId].betItem;
              _context.prev = 6;
              quantity = "".concat(PlayerArea.WAGER_TYPES[selectedToken].toFixed(4), " EOS");
              _context.next = 10;
              return eosClient.baccaratBet(quantity, 'baccarat', betItem);

            case 10:
              result = _context.sent;
              console.log({
                areaId: areaId,
                selectedToken: selectedToken,
                betItem: betItem,
                result: result
              });
              _redux__WEBPACK_IMPORTED_MODULE_10__["actions"].myBalanceUpdateFromRemote().then(function (balance) {
                return _this.props.dispatch(balance);
              });

              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_10__["actions"].modal.closeLoading());

              _context.next = 22;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](6);
              console.error(_context.t0);
              rngError = Object(_libs_error_parser__WEBPACK_IMPORTED_MODULE_12__["default"])(_context.t0);

              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_10__["actions"].modal.closeLoading());

              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_10__["actions"].modal.showError(rngError));

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 16]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "renderCurrentBets", function () {
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      return _this.state.currentBets.slice(from, end).map(function (e, index) {
        var betTokenStyle = {
          width: 40
        };

        var wager = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.get(e, 'raw.meta.wager');

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: from + index
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "/static/img/baccarat/".concat(PlayerArea.WAGER_SOURCE[wager]),
          style: betTokenStyle
        }));
      });
    });

    return _this;
  }

  _createClass(PlayerArea, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var betItem = PlayerArea.AREA_ID[this.props.areaId].betItem;
      var currentBets = _redux__WEBPACK_IMPORTED_MODULE_10__["selectors"].getBaccaratCurrentBets(this.props);

      if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isArray(currentBets)) {
        currentBets = currentBets.filter(function (_ref3) {
          var item = _ref3.item;
          return item === betItem;
        });

        if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEqual(this.state.currentBets, currentBets) === false) {
          this.setState({
            currentBets: currentBets
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          areaId = _this$props.areaId,
          style = _this$props.style;
      var _PlayerArea$AREA_ID$a = PlayerArea.AREA_ID[areaId],
          title = _PlayerArea$AREA_ID$a.title,
          odds = _PlayerArea$AREA_ID$a.odds,
          titleColor = _PlayerArea$AREA_ID$a.titleColor,
          background = _PlayerArea$AREA_ID$a.background;
      var baseStyles = {
        borderStyle: 'solid',
        borderColor: '#9a7b46',
        textAlign: 'center',
        borderRadius: 2,
        borderWidth: 1,
        background: background
      };
      var containerStyle = Object.assign({}, baseStyles, style);
      var styles = {
        title: {
          marginTop: 11,
          color: titleColor
        },
        odds: {
          marginTop: 3,
          color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].odds
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true,
        style: containerStyle,
        onClick: this.handlerOnClick
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 4
      }, this.renderCurrentBets(0, 3)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 4
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: styles.title
      }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: styles.odds
      }, odds)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 4
      }, this.renderCurrentBets(3, 6)));
    }
  }]);

  return PlayerArea;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _defineProperty(_class2, "AREA_ID", {
  playerWin: {
    title: '閒',
    titleColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].blue,
    odds: '1:1',
    betItem: 'player'
  },
  playerPair: {
    title: '閒對',
    titleColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].white,
    odds: '1:11',
    betItem: 'player_pair',
    background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].pairBG
  },
  bankerWin: {
    title: '莊',
    titleColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].red,
    odds: '1:0.95',
    betItem: 'banker'
  },
  bankerPair: {
    title: '莊對',
    titleColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].white,
    odds: '1:11',
    betItem: 'banker_pair',
    background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].pairBG
  },
  tie: {
    title: '和',
    titleColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_14__["default"].mediumGreen,
    odds: '1:8',
    betItem: 'tie'
  }
}), _defineProperty(_class2, "WAGER_SOURCE", {
  '0.1000 EOS': 'baccarat-game-token-0-1.svg',
  '1.0000 EOS': 'baccarat-game-token-01.svg',
  '5.0000 EOS': 'baccarat-game-token-05.svg',
  '10.0000 EOS': 'baccarat-game-token-10.svg',
  '50.0000 EOS': 'baccarat-game-token-50.svg',
  '100.0000 EOS': 'baccarat-game-token-100.svg',
  '500.0000 EOS': 'baccarat-game-token-500.svg',
  '1000.0000 EOS': 'baccarat-game-token-1000.svg',
  '5000.0000 EOS': 'baccarat-game-token-5000.svg'
}), _defineProperty(_class2, "WAGER_TYPES", [0.1000, 1.0000, 5.0000, 10.0000, 50.0000, 100.0000, 500.0000, 1000.0000, 5000.0000]), _temp)) || _class);
PlayerArea.propTypes = {
  areaId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
var styles = {
  root: {
    height: 460,
    borderRadius: 2,
    borderStyle: 'solid',
    borderColor: '#9a7b46'
  },
  dealArea: {
    height: 130,
    borderRadius: 2,
    backgroundImage: 'linear-gradient(70deg, rgba(0, 0, 0, 0),	rgba(41, 202, 74, 0.5))',
    textAlign: 'center',
    position: 'relative'
  },
  dealAreaTitle: {
    textAlign: 'center',
    fontSize: 20
  },
  dealAreaBaccaratWord: {
    bottom: 5,
    position: 'absolute',
    width: '100%'
  },
  thirdCard: {
    transform: 'rotate(90deg)'
  },
  playerWin: {
    height: 150
  },
  playerPair: {
    height: 80
  },
  bankerWin: {
    height: 150
  },
  bankerPair: {
    height: 80
  },
  tie: {
    height: 160
  }
};
var GameTable = (_dec2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref4) {
  var baccarat = _ref4.baccarat;
  return {
    baccarat: baccarat
  };
}), _dec2(_class3 =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(GameTable, _React$Component2);

  function GameTable() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, GameTable);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(GameTable)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      dealArea: {
        playerCardSeat: [null, null, null],
        bankerCardSeat: [null, null, null]
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "getCard", function (cardNumber) {
      var colors = ['spade', 'heart', 'diamond', 'club'];

      var _decodeBaccaratCard = Object(_libs_format_helper__WEBPACK_IMPORTED_MODULE_11__["decodeBaccaratCard"])(cardNumber),
          rank = _decodeBaccaratCard.rank,
          color = _decodeBaccaratCard.color;

      var path = "".concat(colors[color - 1]).concat(rank < 10 ? '0' + rank : rank);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/img/baccarat/cards/".concat(path, ".svg")
      });
    });

    return _this2;
  }

  _createClass(GameTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.setState({
        dealArea: {
          playerCardSeat: [2, 5, 42].map(function (cardNumber) {
            return _this3.getCard(cardNumber);
          }),
          bankerCardSeat: [9, 10, 25].map(function (cardNumber) {
            return _this3.getCard(cardNumber);
          })
        }
      });
    } // componentDidUpdate(prevProps) {
    //   const previousBaccaratGameStatus = selectors.getBaccaratGameStatus(prevProps);
    //   const currentBaccaratGameStatus = selectors.getBaccaratGameStatus(this.props);
    //   // console.log('[GameTable]', { previousBaccaratGameStatus, currentBaccaratGameStatus });
    //   // game state changed
    //   if (currentBaccaratGameStatus && previousBaccaratGameStatus &&
    //     previousBaccaratGameStatus.gameState !== currentBaccaratGameStatus.gameState) {
    //     switch (currentBaccaratGameStatus.gameState) {
    //     case 'BACCARAT_GAME_STATE_RESULT': {
    //       const bankerCard = currentBaccaratGameStatus.gameResult.banker_card;
    //       const playerCard = currentBaccaratGameStatus.gameResult.player_card;
    //       this.setState({
    //         dealArea: {
    //           playerCardSeat: playerCard.map(cardNumber=>this.getCard(cardNumber)),
    //           bankerCardSeat: bankerCard.map(cardNumber=>this.getCard(cardNumber)),
    //         }
    //       });
    //       break;
    //     }
    //     default: {
    //       this.setState({
    //         dealArea: {
    //           playerCardSeat:[],
    //           bankerCardSeat:[],
    //         }
    //       });
    //     }
    //     }
    //   }
    // }

  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: styles.root
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.dealArea
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.dealAreaTitle
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_15__["default"])('player')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          marginLeft: 20
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_15__["default"])('banker'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.dealAreaBaccaratWord
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/img/baccarat/baccarat_word.svg"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 5
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 6
      }, this.state.dealArea.playerCardSeat[0]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 6
      }, this.state.dealArea.playerCardSeat[1])), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.thirdCard
      }, this.state.dealArea.playerCardSeat[2])), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 2
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 5
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 6
      }, this.state.dealArea.bankerCardSeat[0]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 6
      }, this.state.dealArea.bankerCardSeat[1]))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 5
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerArea, {
        areaId: 'playerWin',
        style: styles.playerWin
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerArea, {
        areaId: 'playerPair',
        style: styles.playerPair
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 2
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_game_counter__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerArea, {
        areaId: 'tie',
        style: styles.tie
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 5
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerArea, {
        areaId: 'bankerWin',
        style: styles.bankerWin
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayerArea, {
        areaId: 'bankerPair',
        style: styles.bankerPair
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_token_selector__WEBPACK_IMPORTED_MODULE_13__["default"], null));
    }
  }]);

  return GameTable;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class3);
GameTable.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(GameTable));

/***/ })

})
//# sourceMappingURL=baccarat.js.f12c174a566b9213735a.hot-update.js.map