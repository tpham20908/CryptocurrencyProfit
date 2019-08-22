import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import moment from "moment";

import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      currentData: {},
      previousData: {},
      date: moment(),
      fsym: "ETH", // from symbol
      tsym: "USD", // to symbol -- can be multiple value 'BTC,USD,CAD,EUR'
      location: "home"
    };
  }

  async componentDidMount() {
    const { date, fsym, tsym } = this.state;
    const ts = date.unix();
    const currentData = await this.apiCall(fsym, tsym, ts);
    this.setState({ currentData });
  }

  apiCall = (fsym, tsym, ts) => {
    const url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${fsym}&tsyms=${tsym}&ts=${ts}`;

    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          return resolve(res.data[fsym]);
        })
        .catch(err => console.log(err));
    });
  };

  handleDateChange = async date => {
    const { fsym, tsym } = this.state;
    const ts = date.unix();
    const previousData = await this.apiCall(fsym, tsym, ts);
    this.setState({ date, previousData });
  };

  routingSystem = () => {
    switch (this.state.location) {
      case "results":
        return <Results />;
        break;
      default:
        return (
          <Home
            handleDateChange={this.handleDateChange}
            globalState={this.state}
          />
        );
    }
  };

  render() {
    const currency = "USD";
    const { currentData, previousData } = this.state;
    const currentPrice = currentData[currency];
    const previousPrice = previousData[currency];

    return (
      <div className="home">
        <div className="container">
          <header>
            <div className="logo">Crypto Profit</div>
            <nav className="menu">
              <a href="#">Register</a>
            </nav>
          </header>
          {this.routingSystem()}
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
