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
    const { description, isActive, name, thumbnail } = this.props;
    return (
      <div className={`select-row ${isActive ? 'active' : ''}`} onClick={this.onClick}>
        {!thumbnail && (
          <div className="select-row-profile-thumbnail-empty">IMAGE NOT FOUND</div>
        )}
        {!!thumbnail && (
          <img className="select-row-profile-thumbnail" src={thumbnail} />
        )}
        <div className="select-row-profile-bio">
          <h3 className="select-row-profile-bio-name">{name}</h3>
          <p className="select-row-profile-bio-description">{description}</p>
        </div>
      </div>
    );
  }
}

export default SelectRowConnector(SelectRow)