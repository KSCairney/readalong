import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="center topper">
        <h2>Read Along</h2>
        <h1>{this.props.theTitle}</h1>
        <h5>by {this.props.theAuthor}</h5>
      </div>
    );
  }
}

export default Header;