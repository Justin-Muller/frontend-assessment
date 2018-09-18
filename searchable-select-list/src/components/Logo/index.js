import React, { PureComponent } from 'react';
import './style.css';
import logo from '../../assets/marvel.svg';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo-container">
        <img src={logo} alt="Marvel" className="logo" />
      </div>
    );
  }
}
