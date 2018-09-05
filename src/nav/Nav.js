import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav className="ptf-nav">
        <p>Nav Component</p>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
