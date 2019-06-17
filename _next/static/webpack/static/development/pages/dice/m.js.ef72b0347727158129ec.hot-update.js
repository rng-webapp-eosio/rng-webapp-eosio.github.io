webpackHotUpdate("static/development/pages/dice/m.js",{

/***/ "./libs/eos-client.js":
/*!****************************!*\
  !*** ./libs/eos-client.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scatterjs-core */ "../node_modules/scatterjs-core/dist/index.js");
/* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scatterjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scatterjs-plugin-eosjs2 */ "../node_modules/scatterjs-plugin-eosjs2/dist/index.js");
/* harmony import */ var scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "../node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! eosjs */ "../node_modules/eosjs/dist/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _libs_format_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/format-helper */ "./libs/format-helper.js");
/* harmony import */ var _libs_decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../libs/decorators */ "./libs/decorators.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./config/index.js");


var _dec, _class;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }









 // Don't forget to tell ScatterJS which plugins you are using.

scatterjs_core__WEBPACK_IMPORTED_MODULE_1___default.a.plugins(new scatterjs_plugin_eosjs2__WEBPACK_IMPORTED_MODULE_2___default.a());
var network = _config__WEBPACK_IMPORTED_MODULE_9__["default"].network,
    contract = _config__WEBPACK_IMPORTED_MODULE_9__["default"].contract,
    app = _config__WEBPACK_IMPORTED_MODULE_9__["default"].app;
var instance = null;
var EosClient = (_dec = Object(_libs_decorators__WEBPACK_IMPORTED_MODULE_8__["clientOnly"])(null), (_class =
/*#__PURE__*/
function () {
  _createClass(EosClient, null, [{
    key: "getInstance",

    /** @type {WebSocket} */

    /** @type {ScatterJS.scatter} */

    /** @type {EosApi} */

    /** @type {JsonRpc} */

    /** @type {boolean} */

    /** @type {boolean} */

    /**
     * @returns {EosClient}
     */
    value: function getInstance() {
      if (instance === null) {
        instance = new EosClient();
      }

      return instance;
    }
  }]);

  function EosClient() {
    var _this = this;

    _classCallCheck(this, EosClient);

    _defineProperty(this, "contract", null);

    _defineProperty(this, "account", null);

    _defineProperty(this, "initPromise", null);

    _defineProperty(this, "scatterSocket", null);

    _defineProperty(this, "scatter", null);

    _defineProperty(this, "eos", null);

    _defineProperty(this, "rpc", null);

    _defineProperty(this, "connected", false);

    _defineProperty(this, "hasScatter", false);

    this.contract = contract;
    this.account = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.getJSON('chain.account');
    this.rpc = new eosjs__WEBPACK_IMPORTED_MODULE_5__["JsonRpc"]("".concat(network.protocol, "://").concat(network.host, ":").concat(network.port), {
      fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a
    });
    var host = '127.0.0.1:50005';

    if (typeof WebSocket !== 'undefined') {
      this.scatterSocket = new WebSocket("wss://".concat(host, "/socket.io/?EIO=3&transport=websocket"));

      this.scatterSocket.onopen = function () {
        console.log('[scatterSocket]', 'onopen');

        _this.scatterSocket.send('40/scatter');
      };

      this.scatterSocket.onmessage = function (msg) {
        console.log('[scatterSocket]', 'onmessage', msg);
        var isTrusted = msg.isTrusted,
            data = msg.data;

        if (isTrusted && data === '42/scatter,["connected"]') {
          _this.hasScatter = true;
        }
      };

      this.scatterSocket.onerror = function (event) {
        console.log('[scatterSocket]', 'onerror', event);
      };
    }
  }

  _createClass(EosClient, [{
    key: "waitInit",
    value: function () {
      var _waitInit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.initPromise === null)) {
                  _context.next = 3;
                  break;
                }

                this.initPromise = this.init();
                return _context.abrupt("return", this.initPromise);

              case 3:
                return _context.abrupt("return", this.initPromise);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function waitInit() {
        return _waitInit.apply(this, arguments);
      }

      return waitInit;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var requiredFields;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return scatterjs_core__WEBPACK_IMPORTED_MODULE_1___default.a.scatter.connect(app.name);

              case 2:
                this.connected = _context2.sent;

                if (this.connected) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", this);

              case 5:
                this.scatter = scatterjs_core__WEBPACK_IMPORTED_MODULE_1___default.a.scatter; // Now we need to get an identity from the user.
                // We're also going to require an account that is connected to the network we're using.

                requiredFields = {
                  accounts: [network]
                };
                _context2.next = 9;
                return this.scatter.getIdentity(requiredFields);

              case 9:
                // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
                // the user for their account name beforehand. They could still give you a different account.
                this.account = this.scatter.identity.accounts.find(function (x) {
                  return x.blockchain === 'eos';
                }); // Store account

                js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('chain.account', this.account, {
                  expires: 14
                }); // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.

                this.eos = this.scatter.eos(network, eosjs__WEBPACK_IMPORTED_MODULE_5__["Api"], {
                  rpc: this.rpc,
                  beta3: true
                }); // ----------------------------
                // Now that we have an identity,
                // an EOSIO account, and a reference
                // to an eosjs object we can send a transaction.
                // ----------------------------
                // Never assume the account's permission/authority. Always take it from the returned account.

                this.transactionOptions = {
                  authorization: [{
                    actor: this.account.name,
                    permission: this.account.authority
                  }]
                };

                if (typeof window !== 'undefined') {
                  window.ScatterJS = null;
                }

                return _context2.abrupt("return", this);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "getResources",
    value: function () {
      var _getResources = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(accountName) {
        var account, ram_quota, ram_usage, net_limit, cpu_limit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.rpc.get_account(accountName);

              case 2:
                account = _context3.sent;
                ram_quota = account.ram_quota, ram_usage = account.ram_usage, net_limit = account.net_limit, cpu_limit = account.cpu_limit;
                return _context3.abrupt("return", {
                  ram: {
                    quota: ram_quota,
                    usage: ram_usage
                  },
                  cpu: cpu_limit,
                  net: net_limit
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getResources(_x) {
        return _getResources.apply(this, arguments);
      }

      return getResources;
    }()
  }, {
    key: "getMyBalance",
    value: function () {
      var _getMyBalance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var account, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                account = this.account;

                if (lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isNil(account)) {
                  account = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.getJSON('chain.account');
                }

                if (!lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isNil(account)) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 5;
                return this.initPromise;

              case 5:
                account = this.account;

              case 6:
                if (!lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isNil(account)) {
                  _context4.next = 9;
                  break;
                }

                console.error('[eos-client.getMyBalance]', 'account is nil');
                throw new Error('account is nil. Is scatter installed ?');

              case 9:
                _context4.next = 11;
                return this.rpc.get_currency_balance('eosio.token', account.name, 'EOS');

              case 11:
                result = _context4.sent;
                return _context4.abrupt("return", result[0]);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getMyBalance() {
        return _getMyBalance.apply(this, arguments);
      }

      return getMyBalance;
    }()
    /**
     * @param {('dice'|'baccarat'|'pk-10')} gameType
     */

  }, {
    key: "gameGlobal",
    value: function () {
      var _gameGlobal = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(gameType) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.rpc.get_table_rows({
                  json: true,
                  code: this.contract[gameType],
                  scope: this.contract[gameType],
                  table: 'global',
                  limit: 1
                });

              case 2:
                result = _context5.sent;
                return _context5.abrupt("return", lodash__WEBPACK_IMPORTED_MODULE_6___default.a.get(result, 'rows[0]'));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function gameGlobal(_x2) {
        return _gameGlobal.apply(this, arguments);
      }

      return gameGlobal;
    }()
    /**
     * @param {('dice'|'baccarat'|'pk-10')} gameType
     */

  }, {
    key: "currentBets",
    value: function () {
      var _currentBets = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(gameType) {
        var result, bets;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.rpc.get_table_rows({
                  json: true,
                  code: this.contract[gameType],
                  scope: this.contract[gameType],
                  table: 'bets',
                  limit: 100
                });

              case 2:
                result = _context6.sent;
                bets = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.get(result, 'rows', []);
                return _context6.abrupt("return", bets.map(function (bet) {
                  return Object(_libs_format_helper__WEBPACK_IMPORTED_MODULE_7__["currentBetToBetreceipt"])(bet);
                }).reverse());

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function currentBets(_x3) {
        return _currentBets.apply(this, arguments);
      }

      return currentBets;
    }()
  }, {
    key: "diceLatestBetreceipts",
    value: function () {
      var _diceLatestBetreceipts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var offset,
            _ref,
            actions,
            betreceipts,
            _args7 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                offset = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : 5;
                _context7.next = 3;
                return this.rpc.history_get_actions(this.contract.dice, -1, -offset);

              case 3:
                _ref = _context7.sent;
                actions = _ref.actions;
                betreceipts = actions.filter(function (item) {
                  return lodash__WEBPACK_IMPORTED_MODULE_6___default.a.get(item, 'action_trace.act.name') === 'betreceipt';
                });
                return _context7.abrupt("return", betreceipts.map(function (betreceipt) {
                  var _$get = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.get(betreceipt, 'action_trace.act.data', {}),
                      betId = _$get.bet_id,
                      betMemo = _$get.bet_memo,
                      randomRoll = _$get.random_roll,
                      bettor = _$get.bettor,
                      item = _$get.item,
                      payout = _$get.payout,
                      wager = _$get.wager;

                  return {
                    betId: betId,
                    betMemo: betMemo,
                    bettor: bettor,
                    item: item,
                    payout: payout,
                    wager: wager,
                    randomRoll: randomRoll
                  };
                }));

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function diceLatestBetreceipts() {
        return _diceLatestBetreceipts.apply(this, arguments);
      }

      return diceLatestBetreceipts;
    }()
  }, {
    key: "baccaratGameResult",
    value: function () {
      var _baccaratGameResult = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(gameId) {
        var contract, rawResult, _$get2, result, rest;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                contract = this.contract.baccarat;
                _context8.next = 3;
                return this.rpc.get_table_rows({
                  json: true,
                  code: contract,
                  scope: contract,
                  table: 'games',
                  limit: 1,
                  lower_bound: gameId,
                  upper_bound: gameId
                });

              case 3:
                rawResult = _context8.sent;
                _$get2 = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.get(rawResult, 'rows[0]', {}), result = _$get2.result, rest = _objectWithoutProperties(_$get2, ["result"]);
                return _context8.abrupt("return", Object.assign({}, result, rest));

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function baccaratGameResult(_x4) {
        return _baccaratGameResult.apply(this, arguments);
      }

      return baccaratGameResult;
    }()
  }, {
    key: "diceBet",
    value: function () {
      var _diceBet = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(quantity, rollUnder, betMemo) {
        var memo, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.waitInit();

              case 2:
                memo = "action:bet,item:".concat(rollUnder, ",user_seed:testsetset,bet_memo:").concat(betMemo);
                _context9.next = 5;
                return this.eos.transact({
                  actions: [{
                    account: 'eosio.token',
                    name: 'transfer',
                    authorization: this.transactionOptions.authorization,
                    data: {
                      from: this.account.name,
                      to: this.contract.dice,
                      quantity: quantity,
                      memo: memo
                    }
                  }]
                }, {
                  blocksBehind: 3,
                  expireSeconds: 30
                });

              case 5:
                result = _context9.sent;
                return _context9.abrupt("return", result);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function diceBet(_x5, _x6, _x7) {
        return _diceBet.apply(this, arguments);
      }

      return diceBet;
    }()
  }, {
    key: "baccaratBet",
    value: function () {
      var _baccaratBet = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(quantity, referrer, item) {
        var gameConfig, roundId, gameId, betMemo, memo, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.waitInit();

              case 2:
                _context10.next = 4;
                return this.gameGlobal('baccarat');

              case 4:
                gameConfig = _context10.sent.game_config;
                roundId = gameConfig.round_id;
                gameId = gameConfig.game_id;
                betMemo = 'qwert1234'; // TODO

                memo = "round_id:".concat(roundId, ",game_id:").concat(gameId, ",referrer:").concat(referrer, ",action:bet,item:").concat(item, ",bet_memo:").concat(betMemo);
                _context10.next = 11;
                return this.eos.transact({
                  actions: [{
                    account: 'eosio.token',
                    name: 'transfer',
                    authorization: this.transactionOptions.authorization,
                    data: {
                      from: this.account.name,
                      to: this.contract.baccarat,
                      quantity: quantity,
                      memo: memo
                    }
                  }]
                }, {
                  blocksBehind: 3,
                  expireSeconds: 30
                });

              case 11:
                result = _context10.sent;
                return _context10.abrupt("return", result);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function baccaratBet(_x8, _x9, _x10) {
        return _baccaratBet.apply(this, arguments);
      }

      return baccaratBet;
    }()
    /**
     * `cleos transfer inita bjpkten "40.0000 EOS" "game_id:732628,bet_price:20000,bet_cnt:20,action:singlebet,item:1/0/3/1023/0/32/7/1/1/2,bet_memo:123fdsa" -p inita`
     */

  }, {
    key: "pk10Bet",
    value: function () {
      var _pk10Bet = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(quantity, betPrice, betCount, referrer, action, item) {
        var gameId, betMemo, memo, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.waitInit();

              case 2:
                _context11.t0 = lodash__WEBPACK_IMPORTED_MODULE_6___default.a;
                _context11.next = 5;
                return this.gameGlobal('pk-10');

              case 5:
                _context11.t1 = _context11.sent;
                gameId = _context11.t0.get.call(_context11.t0, _context11.t1, 'game_config.game_id');
                betMemo = 'qwert1234'; // TODO

                memo = "game_id:".concat(gameId, ",bet_price:").concat(betPrice, ",bet_cnt:").concat(betCount, ",referrer:").concat(referrer, ",action:").concat(action, ",item:").concat(item, ",bet_memo:").concat(betMemo);
                _context11.next = 11;
                return this.eos.transact({
                  actions: [{
                    account: 'eosio.token',
                    name: 'transfer',
                    authorization: this.transactionOptions.authorization,
                    data: {
                      from: this.account.name,
                      to: this.contract.pk10,
                      quantity: quantity,
                      memo: memo
                    }
                  }]
                }, {
                  blocksBehind: 3,
                  expireSeconds: 30
                });

              case 11:
                result = _context11.sent;
                return _context11.abrupt("return", result);

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function pk10Bet(_x11, _x12, _x13, _x14, _x15, _x16) {
        return _pk10Bet.apply(this, arguments);
      }

      return pk10Bet;
    }()
  }]);

  return EosClient;
}(), (_applyDecoratedDescriptor(_class.prototype, "getMyBalance", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "getMyBalance"), _class.prototype)), _class));
/* harmony default export */ __webpack_exports__["default"] = (EosClient);

/***/ })

})
//# sourceMappingURL=m.js.ef72b0347727158129ec.hot-update.js.map