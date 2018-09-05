import React, { Component } from 'react';
import Nav from '../nav';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Nav />
        <h1>Home Component</h1>
      </div>
    );
  }
}

export default Home;
