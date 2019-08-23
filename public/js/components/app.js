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
          setCryptoAmount = _props.setCryptoAmount,
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
            _react2.default.createElement("input", {
              type: "number",
              name: "amount",
              value: globalState.cryptoAmount,
              onChange: setCryptoAmount
            }),
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
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Results);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Results.__proto__ || Object.getPrototypeOf(Results)).call.apply(_ref, [this].concat(args))), _this), _this.formatDate = function (day, month, year) {
      var monthText = void 0;
      switch (month) {
        case 1:
          monthText = "Jan";
          break;
        case 2:
          monthText = "Feb";
          break;
        case 3:
          monthText = "Mar";
          break;
        case 4:
          monthText = "Apr";
          break;
        case 5:
          monthText = "May";
          break;
        case 6:
          monthText = "Jun";
          break;
        case 7:
          monthText = "Jul";
          break;
        case 8:
          monthText = "Aug";
          break;
        case 9:
          monthText = "Sep";
          break;
        case 10:
          monthText = "Oct";
          break;
        case 11:
          monthText = "Nov";
          break;
        case 12:
          monthText = "Dec";
          break;
      }

      return monthText + " " + day + " " + year;
    }, _this.profitStatement = function (buyingAmount, sellingAmount) {
      var profitPercentage = (sellingAmount / buyingAmount * 100).toFixed(2);
      var result = Math.abs(profitPercentage - 100).toFixed(2);
      var statement = profitPercentage >= 100 ? "You would make " + result + "% profit." : "You would lose " + result + "% your investment.";

      return statement;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Results, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          buyingDate = _props.buyingDate,
          buyingData = _props.buyingData,
          cryptoAmount = _props.cryptoAmount,
          fsym = _props.fsym,
          sellingDate = _props.sellingDate,
          sellingData = _props.sellingData,
          tsym = _props.tsym;


      var buyingDateConverted = new Date(buyingDate.unix() * 1000);
      var sellingDateConverted = new Date(sellingDate.unix() * 1000);
      var buyingDay = buyingDateConverted.getDate();
      var buyingMonth = buyingDateConverted.getMonth() + 1;
      var buyingYear = buyingDateConverted.getFullYear();
      var sellingDay = sellingDateConverted.getDate();
      var sellingMonth = sellingDateConverted.getMonth() + 1;
      var sellingYear = sellingDateConverted.getFullYear();

      var formatedBuyingDate = this.formatDate(buyingDay, buyingMonth, buyingYear);

      var formatedSellingDate = this.formatDate(sellingDay, sellingMonth, sellingYear);

      var buyingAmount = (cryptoAmount * buyingData[fsym][tsym]).toFixed(2);
      var sellingAmount = (cryptoAmount * sellingData[fsym][tsym]).toFixed(2);

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
              _react2.default.createElement("ins", {
                className: "adsbygoogle",
                style: { display: "block" },
                "data-ad-client": "ca-pub-4307977294782063",
                "data-ad-slot": "7806394673",
                "data-ad-format": "auto"
              })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement(
              "h2",
              null,
              "Your $",
              buyingAmount,
              " ",
              tsym,
              " investment on ",
              formatedBuyingDate,
              " ",
              "would be"
            ),
            _react2.default.createElement(
              "h1",
              null,
              "$",
              sellingAmount
            ),
            _react2.default.createElement(
              "h2",
              null,
              "on ",
              formatedSellingDate,
              ".",
              " ",
              _react2.default.createElement(
                "span",
                { className: "profit-percentage" },
                this.profitStatement(buyingAmount, sellingAmount)
              )
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "main-btn active" },
              "Create account to keep track of all your records"
            ),
            _react2.default.createElement(
              "a",
              { href: "/", className: "main-btn" },
              "Another transaction"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement(
              "div",
              { className: "ads" },
              _react2.default.createElement("ins", {
                className: "adsbygoogle",
                style: { display: "block" },
                "data-ad-client": "ca-pub-4307977294782063",
                "data-ad-slot": "7806394673",
                "data-ad-format": "auto"
              })
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
            setCryptoAmount: _this.setCryptoAmount,
            setLocation: _this.setLocation
          });
      }
    };

    _this.setCryptoAmount = function (event) {
      _this.setState({ cryptoAmount: event.target.value });
    };

    _this.setLocation = function (location) {
      _this.setState({ location: location });
    };

    _this.state = {
      buyingData: {},
      buyingDate: (0, _moment2.default)(),
      cryptoAmount: "",
      fsym: "ETH", // from symbol
      location: "home",
      sellingDate: (0, _moment2.default)(),
      sellingData: {},
      tsym: "USD" // to symbol -- can be multiple value 'BTC,USD,CAD,EUR'
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _state, fsym, sellingDate, tsym, data;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _state = this.state, fsym = _state.fsym, sellingDate = _state.sellingDate, tsym = _state.tsym;
                _context3.next = 3;
                return this.getData(fsym, tsym, sellingDate);

              case 3:
                data = _context3.sent;

                this.setState({ buyingData: data, sellingData: data });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
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