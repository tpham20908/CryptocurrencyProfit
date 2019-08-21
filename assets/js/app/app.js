import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
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
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
