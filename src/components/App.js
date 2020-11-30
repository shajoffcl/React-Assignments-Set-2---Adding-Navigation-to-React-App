import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import LocationDisplay from "./LocationDisplay";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={Error} />
        </Switch>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;
