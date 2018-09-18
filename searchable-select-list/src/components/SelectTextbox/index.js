import React, { PureComponent } from 'react';
import './style.css';
import spinner from '../../assets/spinner.gif';

export default class SelectTextbox extends PureComponent {
  render() {
    return (
      <div className="select-textbox-container">
        <input className="select-textbox" placeholder="Search.." type="text" />
        <img alt="loading" src={spinner} className="select-textbox-spinner" />
      </div>
    )
  }
}