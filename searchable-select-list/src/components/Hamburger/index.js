import React, { PureComponent } from 'react';
import './style.css';

export default class Hamburger extends PureComponent {
  render() {
    return (
      <button className="hamburger">
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>
    );
  }
}
