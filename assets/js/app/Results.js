import React, { Component } from "react";

class Results extends Component {
  render() {
    const { buyingDate, buyingData, sellingDate, sellingData } = this.props;

    const buyingDateConverted = new Date(buyingDate.unix() * 1000);
    const sellingDateConverted = new Date(sellingDate.unix() * 1000);

    const buyingDay = buyingDateConverted.getUTCDate();
    const buyingMonth = buyingDateConverted.getMonth() + 1;
    const buyingYear = buyingDateConverted.getFullYear();
    const sellingDay = sellingDateConverted.getUTCDate();
    const sellingMonth = sellingDateConverted.getMonth() + 1;
    const sellingYear = sellingDateConverted.getFullYear();

    return (
      <section id="results">
        <div className="container">
          <div className="col-md-12">
            <div className="ads">Google Adsense</div>
          </div>
          <div className="col-md-12">
            <h2>Your $1200 dollars investment is now</h2>
            <h1>$7300</h1>
            <h3>You made 400% profit.</h3>
            <a href="#" className="main-btn active">
              Create account to keep track of all your records
            </a>
          </div>
          <div className="col-md-12">
            <div className="ads">Google Adsense</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Results;
