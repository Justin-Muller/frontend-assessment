import React, { PureComponent } from 'react';
import './style.css';
import Hamburger from '../Hamburger';
import Logo from '../Logo';
import SelectTextbox from '../SelectTextbox';

export default class NavBar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <Hamburger />
        <Logo />
        <SelectTextbox />
      </header>
    )
  }
}
