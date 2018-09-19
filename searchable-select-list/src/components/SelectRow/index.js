import React, { PureComponent } from 'react';
import './style.css';

export default class SelectRow extends PureComponent {
  render() {
    return (
      <div className="select-row">
        <div className="select-row-profile-image"></div>
        <div className="select-row-profile-bio">
          <h3 className="select-row-profile-bio-name">Wolverine</h3>
          <p className="select-row-profile-bio-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    );
  }
}