webpackJsonp([0],{

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(28);

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = __webpack_require__(152);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

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
              { htmlFor: "date" },
              "Date"
            ),
            _react2.default.createElement(_reactDatepicker2.default, {
              selected: this.props.globalState.date,
              onChange: this.props.handleDateChange,
              showMonthDropdown: true,
              showYearDropdown: true,
              useShortMonthInDropdown: true,
              scrollableYearDropdown: true,
              yearDropdownItemNumber: 20
            }),
            _react2.default.createElement(
              "button",
              { type: "submit" },
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

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(28);

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

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(28);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(80);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(152);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _Home = __webpack_require__(359);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(360);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.routingSystem = function () {
      switch (_this.state.location) {
        case "results":
          return _react2.default.createElement(_Results2.default, null);
          break;
        default:
          return _react2.default.createElement(_Home2.default, {
            handleDateChange: _this.handleDateChange,
            globalState: _this.state
          });
      }
    };

    _this.handleDateChange = function (date) {
      _this.setState({ date: date }, function () {
        return console.log(_this.state.date);
      });
    };

    _this.state = {
      date: (0, _moment2.default)(),
      location: "home"
    };
    return _this;
  }

  _createClass(Layout, [{
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

},[364]);