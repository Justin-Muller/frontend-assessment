import React, { PureComponent } from 'react';
import './style.css';
import { SelectRowConnector } from '../../store/connectors';

class SelectRow extends PureComponent {

  onClick = () => {
    const { id, name, onClick } = this.props;
    console.log(name);
    onClick(id);
  };

  render() {
    const { description, isActive, name } = this.props;
    return (
      <div className={`select-row ${isActive ? 'active' : ''}`} onClick={this.onClick}>
        <div className="select-row-profile-thumbnail">IMAGE NOT FOUND</div>
        <div className="select-row-profile-bio">
          <h3 className="select-row-profile-bio-name">{name}</h3>
          <p className="select-row-profile-bio-description">{description}</p>
        </div>
      </div>
    );
  }
}

export default SelectRowConnector(SelectRow)