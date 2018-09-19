import React, { PureComponent } from 'react';
import './style.css';
import Hamburger from '../Hamburger';
import Logo from '../Logo';
import SelectList from '../SelectList';
import SelectTextbox from '../SelectTextbox';

export default class NavBar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <Hamburger />
        <Logo />
        <div className="navbar-select-container">
          <SelectTextbox />
          <SelectList />
        </div>
      </header>
    )
  }
}
