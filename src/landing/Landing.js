import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-content">
          <h1>A PORTFOLIO</h1>
          <h3>By James Moon</h3>
          <button className="ptf-btn"><a href="/home">Check It Out</a></button>
        </div>
      </div>
    );
  }
}

export default Landing;
