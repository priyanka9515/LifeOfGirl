import React, { Component } from "react";
import { Link } from "react-router-dom";
// import App from "./App";
import { Button } from "reactstrap";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-right">
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              padding: "5px"
            }}
          >
            <Button style={{ backgroundColor: "grey" }}>SignUp</Button>
          </Link>
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              padding: "5px"
            }}
          >
            <Button style={{ backgroundColor: "grey" }}>SignIn</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
