import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import LocationDisplayComponent from "./LocationDisplayCompnent";

function Home() {
  return <div>You are home.</div>;
}
function About() {
  return <div>You are on the about page.</div>;
}
function Invalid() {
  return <div>No match</div>;
}
class App extends Component {
  render() {
    return (
      <>
        <div id="main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/" component={Invalid} />
          </Switch>
          <LocationDisplayComponent />
        </div>
      </>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplayComponent;
