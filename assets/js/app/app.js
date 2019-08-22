import React, { Component } from "react";
import ReactDOM from "react-dom";

import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      location: "home"
    };
  }

  routingSystem = () => {
    switch (this.state.location) {
      case "results":
        return <Results />;
        break;
      default:
        return <Home />;
    }
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
