import React, { PureComponent } from 'react';
import './style.css';
import logo from '../../assets/marvel.svg';
import Hamburger from '../Hamburger';
import SelectTextbox from '../SelectTextbox';

export default class NavBar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <Hamburger />
        <div >
          <img src={logo} alt="Marvel" className="logo" />
        </div>
        <div>
          <SelectTextbox />
        </div>
      </header>
    )
  }
}
