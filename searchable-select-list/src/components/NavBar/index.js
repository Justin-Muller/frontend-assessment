import React, { PureComponent } from 'react';
import './style.css';
import logo from '../../assets/marvel.svg';

export default class NavBar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <button className="hamburger">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <div>
          <img src={logo} alt="Marvel" className="logo" />
        </div>
        <div>
          <input />
        </div>
      </header>
    )
  }
}
