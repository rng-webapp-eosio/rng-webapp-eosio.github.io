webpackHotUpdate("static/development/pages/dice.js",{

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.
var CONFIG = {
  production: {
    app: {
      name: 'rng.casino',
      key: 'key'
    },
    network: {
      blockchain: 'eos',
      protocol: 'https',
      host: 'nodes.get-scatter.com',
      port: 443,
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    },
    contract: {
      dice: 'rngdicebet11',
      baccarat: 'rngbaccarat1',
      pk10: 'rnglotpkten1',
      'pk-10': 'rnglotpkten1'
    },
    gameStatus: 'https://gamestatus.rngcasino.io',
    segmentApiKey: 'g9PC1LGDDrb3uHP79yBc2kTpnYKATUYS',
    mixpanelToken: '67caf9d709cdf2d3ab6f555e4459e217'
  },
  development: {
    app: {
      name: 'rng.casino-stag',
      key: 'key'
    },
    network: {
      blockchain: 'eos',
      protocol: 'https',
      host: 'chain.beos.network',
      port: 443,
      chainId: 'a578eed19b3745a4e0e3a56a27f6323d3a40f6544af3368f5ff7c69dbf8fdbe7'
    },
    contract: {
      dice: 'rngdicebet11',
      baccarat: 'rngbaccarat1',
      pk10: 'rnglotpkten1',
      'pk-10': 'rnglotpkten1'
    },
    gameStatus: 'https://gamestatus.beos.network',
    segmentApiKey: 'kwLsTv7mc5W7mFEEr3XsuPhzuuCjWzBE',
    mixpanelToken: '357ed2a145f08d43cbd27574a3e883e5'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ( false ? undefined : CONFIG.development);

/***/ })

})
//# sourceMappingURL=dice.js.4ce591a5c1a83803188e.hot-update.js.map