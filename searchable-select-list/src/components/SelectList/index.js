import React, { PureComponent } from 'react';
import './style.css';
import SelectRow from '../SelectRow';

export default class SelectList extends PureComponent {
  render() {
    const isEmpty = false;
    const searchTerm = 'search term';

    return (
      <div className="select-list-container">
        <div className="select-list">
          {isEmpty ? (
            <div className="select-list-empty-container">
              <h2 className="select-list-empty-title">Oh No!</h2>
              <p className="select-list-empty-body">No results found for "{searchTerm}"</p>
            </div>
          ) : (
            <SelectRow />
          )}
        </div>
      </div>
    )
  }
}