import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="nav">
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
