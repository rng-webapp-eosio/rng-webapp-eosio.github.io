webpackHotUpdate("static/development/pages/baccarat.js",{

/***/ "./components/baccarat/game-result-modal.js":
/*!**************************************************!*\
  !*** ./components/baccarat/game-result-modal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Modal */ "../node_modules/@material-ui/core/Modal/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/styleguide/colors */ "./libs/styleguide/colors.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux */ "./redux/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function getModalStyle() {
  var top = 50;
  var left = 50;
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
  };
}

var styles = {
  paper: {
    height: 260,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangeYellow,
    background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_6__["default"].darkGrey4,
    position: 'absolute',
    width: '80%' // backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing.unit * 4,
    // outline: 'none',

  },
  pokerImage: {
    textAlign: 'center',
    marginTop: 50
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 375,
    margin: '30px auto auto auto'
  },
  winner: {
    paddingLeft: 5,
    paddingRight: 5,
    color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_6__["default"].clearBlue
  },
  winnerWord: {
    paddingLeft: 5,
    paddingRight: 5,
    color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_6__["default"].palePeach
  }
};
var WINNER_MAPPING = {
  player: '閒家',
  banker: '莊家',
  tie: '和'
};
var GameResultModal = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref) {
  var baccarat = _ref.baccarat;
  return {
    baccarat: baccarat
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameResultModal, _React$Component);

  function GameResultModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GameResultModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameResultModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {// TODO
    });

    return _this;
  }

  _createClass(GameResultModal, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      var _ref2 = _redux__WEBPACK_IMPORTED_MODULE_7__["selectors"].getBaccaratGameStatus(this.props) || {},
          showGameResult = _ref2.showGameResult,
          gameResult = _ref2.gameResult;

      var _ref3 = gameResult || {},
          winner = _ref3.winner,
          is_banker_pair = _ref3.is_banker_pair,
          is_player_pair = _ref3.is_player_pair;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
        "aria-labelledby": "game result",
        "aria-describedby": "game result",
        open: showGameResult,
        onClose: this.handleClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: getModalStyle(),
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.pokerImage
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/img/baccarat/popup_poker.svg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.description
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h6",
        inline: true,
        className: classes.winner
      }, WINNER_MAPPING[winner]), !!is_banker_pair && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h6",
        inline: true,
        className: classes.winner
      }, "\u838A\u5C0D"), !!is_player_pair && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h6",
        inline: true,
        className: classes.winner
      }, "\u8CE2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h6",
        inline: true,
        className: classes.winnerWord
      }, "\u7372\u52DD")))));
    }
  }]);

  return GameResultModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);
GameResultModal.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}; // We need an intermediary variable for handling the recursive nesting.

var GameResultModalWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(GameResultModal);
/* harmony default export */ __webpack_exports__["default"] = (GameResultModalWrapped);

/***/ })

})
//# sourceMappingURL=baccarat.js.2a3eb8814f457e7055e4.hot-update.js.map