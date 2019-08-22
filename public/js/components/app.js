webpackJsonp([0],{

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(29);

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = __webpack_require__(621);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          globalState = _props.globalState,
          handleBuyingDate = _props.handleBuyingDate,
          handleSellingDate = _props.handleSellingDate,
          setLocation = _props.setLocation;

      return _react2.default.createElement(
        "section",
        { id: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "col-md-6" },
            _react2.default.createElement("img", {
              className: "bitcoin-logo",
              src: "img/bitcoinLogo.png",
              alt: "Bitcoin"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-6" },
            _react2.default.createElement(
              "h2",
              null,
              "Enter Transaction"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "amount" },
              "Crypto Amount"
            ),
            _react2.default.createElement("input", { type: "text", name: "amount" }),
            _react2.default.createElement(
              "label",
              null,
              "Buying Date"
            ),
            _react2.default.createElement(_reactDatepicker2.default, {
              selected: globalState.buyingDate,
              onChange: handleBuyingDate,
              showMonthDropdown: true,
              showYearDropdown: true,
              maxDate: (0, _moment2.default)(),
              useShortMonthInDropdown: true,
              scrollableYearDropdown: true,
              yearDropdownItemNumber: 20
            }),
            _react2.default.createElement(
              "label",
              null,
              "Selling Date"
            ),
            _react2.default.createElement(_reactDatepicker2.default, {
              selected: globalState.sellingDate,
              onChange: handleSellingDate,
              showMonthDropdown: true,
              showYearDropdown: true,
              maxDate: (0, _moment2.default)(),
              useShortMonthInDropdown: true,
              scrollableYearDropdown: true,
              yearDropdownItemNumber: 5
            }),
            _react2.default.createElement(
              "button",
              { onClick: function onClick() {
                  return setLocation("results");
                } },
              "Check Profit"
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(29);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  _createClass(Results, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          buyingDate = _props.buyingDate,
          buyingData = _props.buyingData,
          sellingDate = _props.sellingDate,
          sellingData = _props.sellingData;


      var buyingDateConverted = new Date(buyingDate.unix() * 1000);
      var sellingDateConverted = new Date(sellingDate.unix() * 1000);

      var buyingDay = buyingDateConverted.getUTCDate();
      var buyingMonth = buyingDateConverted.getMonth() + 1;
      var buyingYear = buyingDateConverted.getFullYear();
      var sellingDay = sellingDateConverted.getUTCDate();
      var sellingMonth = sellingDateConverted.getMonth() + 1;
      var sellingYear = sellingDateConverted.getFullYear();

      return _react2.default.createElement(
        "section",
        { id: "results" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement(
              "div",
              { className: "ads" },
              "Google Adsense"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement(
              "h2",
              null,
              "Your $1200 dollars investment is now"
            ),
            _react2.default.createElement(
              "h1",
              null,
              "$7300"
            ),
            _react2.default.createElement(
              "h3",
              null,
              "You made 400% profit."
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "main-btn active" },
              "Create account to keep track of all your records"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement(
              "div",
              { className: "ads" },
              "Google Adsense"
            )
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(29);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(81);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(365);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _Home = __webpack_require__(366);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(367);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _this2 = this;

    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.getData = function (fsym, tsym, ts) {
      var url = "https://min-api.cryptocompare.com/data/pricehistorical?fsym=" + fsym + "&tsyms=" + tsym + "&ts=" + ts;

      return new Promise(function (resolve, reject) {
        _axios2.default.get(url).then(function (res) {
          return resolve(res.data);
        }).catch(function (err) {
          return console.log(err);
        });
      });
    };

    _this.handleBuyingDate = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(date) {
        var _this$state, fsym, tsym, ts, buyingData;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = _this.state, fsym = _this$state.fsym, tsym = _this$state.tsym;
                ts = date.unix();
                _context.next = 4;
                return _this.getData(fsym, tsym, ts);

              case 4:
                buyingData = _context.sent;

                _this.setState({ buyingDate: date, buyingData: buyingData });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleSellingDate = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(date) {
        var _this$state2, fsym, tsym, ts, sellingData;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$state2 = _this.state, fsym = _this$state2.fsym, tsym = _this$state2.tsym;
                ts = date.unix();
                _context2.next = 4;
                return _this.getData(fsym, tsym, ts);

              case 4:
                sellingData = _context2.sent;

                _this.setState({ sellingDate: date, sellingData: sellingData });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.routingSystem = function () {
      switch (_this.state.location) {
        case "results":
          return _react2.default.createElement(_Results2.default, _this.state);
          break;
        default:
          return _react2.default.createElement(_Home2.default, {
            handleBuyingDate: _this.handleBuyingDate,
            handleSellingDate: _this.handleSellingDate,
            globalState: _this.state,
            setLocation: _this.setLocation
          });
      }
    };

    _this.setLocation = function (location) {
      _this.setState({ location: location });
    };

    _this.state = {
      buyingData: {},
      sellingData: {},
      buyingDate: (0, _moment2.default)(),
      sellingDate: (0, _moment2.default)(),
      fsym: "ETH", // from symbol
      tsym: "USD", // to symbol -- can be multiple value 'BTC,USD,CAD,EUR'
      location: "home"
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      console.log(this.state.buyingData, this.state.sellingData);

      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "header",
            null,
            _react2.default.createElement(
              "div",
              { className: "logo" },
              "Crypto Profit"
            ),
            _react2.default.createElement(
              "nav",
              { className: "menu" },
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Register"
              )
            )
          ),
          this.routingSystem()
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[388]);