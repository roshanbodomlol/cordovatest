import React, { Component } from 'react';
import styles from './home.module.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
      <div className="block">
        <p>This is the Home page.</p>
      </div>
      </div>
    );
  }
}

export default Home;
