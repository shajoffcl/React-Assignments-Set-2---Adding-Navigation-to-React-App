import React, { Component, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div id="main">
        <div id="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
