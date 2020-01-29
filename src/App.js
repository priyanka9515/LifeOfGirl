import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./components/Navbar/Signin";
import Signup from "./components/Navbar/Signup";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route path="/" component={Navbar} />
      <Route path="/" component={Maps} />
      <Route path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
      {/* <Maps /> */}
    </Router>
  );
}

export default App;
