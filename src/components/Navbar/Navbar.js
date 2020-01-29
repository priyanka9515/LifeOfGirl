import React, { Component } from "react";
import { Link } from "react-router-dom";
// import App from "./App";
import { Button } from "reactstrap";

import "./Navbar.css";
import Search from "./Search";
// import Hamburger from "./Hamburger";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar" style={{backgroundColor:"yellow"}}>
        {/* <Hamburger/> */}
        <Search />
        <div className="nav-right">
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              padding: "5px"
            }}
          >
            <Button style={{ backgroundColor: "blue",marginTop:"-40px" }}>SignUp</Button>
          </Link>
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              padding: "5px"
            }}
          >
            <Button style={{ backgroundColor: "blue" ,marginTop:"-40px"}}>SignIn</Button>
          </Link>
          

        </div>
      </div>
    );
  }
}

export default Navbar;
