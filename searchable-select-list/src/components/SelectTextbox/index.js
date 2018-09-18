import React, { PureComponent } from 'react';
import './style.css';

export default class SelectTextbox extends PureComponent {
  render() {
    return (
      <div className="select-textbox-container">
        <input className="select-textbox" placeholder="Search.." type="text" />
      </div>
    )
  }
}