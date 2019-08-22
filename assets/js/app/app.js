import React, { Component } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import moment from "moment";

import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      date: moment(),
      location: "home"
    };
  }

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

  handleDateChange = date => {
    this.setState({ date }, () => console.log(this.state.date));
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
