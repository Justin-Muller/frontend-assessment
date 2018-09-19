import React, { PureComponent } from 'react';
import './style.css';

export default class SelectRow extends PureComponent {
  render() {
    const { description, name } = this.props;
    const isActive = false;

    return (
      <div className={`select-row ${isActive ? 'active' : ''}`}>
        <div className="select-row-profile-thumbnail"></div>
        <div className="select-row-profile-bio">
          <h3 className="select-row-profile-bio-name">{name}</h3>
          <p className="select-row-profile-bio-description">{description}</p>
        </div>
      </div>
    );
  }
}