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
      buyingData: {},
      buyingDate: moment(),
      cryptoAmount: "",
      fsym: "ETH", // from symbol
      location: "home",
      sellingDate: moment(),
      sellingData: {},
      tsym: "USD" // to symbol -- can be multiple value 'BTC,USD,CAD,EUR'
    };
  }

  async componentDidMount() {
    const { fsym, sellingDate, tsym } = this.state;
    const data = await this.getData(fsym, tsym, sellingDate);
    this.setState({ buyingData: data, sellingData: data });
  }

  getData = (fsym, tsym, ts) => {
    const url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${fsym}&tsyms=${tsym}&ts=${ts}`;

    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          return resolve(res.data);
        })
        .catch(err => console.log(err));
    });
  };

  handleBuyingDate = async date => {
    const { fsym, tsym } = this.state;
    const ts = date.unix();
    const buyingData = await this.getData(fsym, tsym, ts);
    this.setState({ buyingDate: date, buyingData });
  };

  handleSellingDate = async date => {
    const { fsym, tsym } = this.state;
    const ts = date.unix();
    const sellingData = await this.getData(fsym, tsym, ts);
    this.setState({ sellingDate: date, sellingData });
  };

  routingSystem = () => {
    switch (this.state.location) {
      case "results":
        return <Results {...this.state} />;
        break;
      default:
        return (
          <Home
            handleBuyingDate={this.handleBuyingDate}
            handleSellingDate={this.handleSellingDate}
            globalState={this.state}
            setCryptoAmount={this.setCryptoAmount}
            setLocation={this.setLocation}
          />
        );
    }
  };

  setCryptoAmount = event => {
    this.setState({ cryptoAmount: event.target.value });
  };

  setLocation = location => {
    this.setState({ location });
  };

  render() {
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
