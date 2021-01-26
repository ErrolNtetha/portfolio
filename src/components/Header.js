import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Mobile.css";

export default class Header extends Component {
  state = {
    showModal: false,
  }
  
  handleModal = () => {
    console.log("Button clicked....")
    return <h4> Dialogue box </h4>
  }

  render() {
    return (
      <div className="headerContainer">
        <nav className="header">
          <img className="logo" alt="logo" src="./not.png" />
          <div>
            <h2 style={{ margin: "0" }} className="myName">
              {" "}
              Mphumeleli Ntetha{" "}
            </h2>
            <h6 className="country" style={{ margin: "-6px 0 0 0", float: "right" }}> South Africa </h6>
          </div>
          <ul className="navLink">
            <li className="nav" id={window.location.pathname === "about" ? "active" : ""}>
              <Link to="/"> Home </Link>
            </li>
            <li className="nav">
              <Link to="/blogs"> Blog </Link>
            </li>
            <li className="nav">
              <Link to="/portfolio"> Portfolio </Link>
            </li>
            <li className="nav">
              <Link to="/about"> About </Link>
            </li>
            <li className="nav">
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
          <div className="cont">
            <button onClick={this.handleModal} className="getRequest">
              GET REQUEST
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
