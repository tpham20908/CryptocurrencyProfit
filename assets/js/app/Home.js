import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  render() {
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
            <input type="text" name="amount" />

            <label htmlFor="date">Date</label>
            <input type="text" name="date" />

            <button type="submit">Check Profit</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
