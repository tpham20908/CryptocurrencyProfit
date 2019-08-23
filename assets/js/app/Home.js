import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  render() {
    const {
      globalState,
      handleBuyingDate,
      handleSellingDate,
      setCryptoAmount,
      setLocation
    } = this.props;
    return (
      <section id="home">
        <div className="container">
          <div className="col-md-6">
            <img
              className="bitcoin-logo"
              src="img/bitcoinLogo.png"
              alt="Bitcoin"
            />
          </div>

          <div className="col-md-6">
            <h2>Enter Transaction</h2>

            <label htmlFor="amount">Crypto Amount</label>
            <input
              type="number"
              name="amount"
              value={globalState.cryptoAmount}
              onChange={setCryptoAmount}
            />

            <label>Buying Date</label>
            <DatePicker
              selected={globalState.buyingDate}
              onChange={handleBuyingDate}
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              useShortMonthInDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={20}
            />

            <label>Selling Date</label>
            <DatePicker
              selected={globalState.sellingDate}
              onChange={handleSellingDate}
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              useShortMonthInDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={5}
            />

            <button onClick={() => setLocation("results")}>Check Profit</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
