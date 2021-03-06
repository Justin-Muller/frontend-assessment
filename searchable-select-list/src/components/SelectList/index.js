import React, { PureComponent } from 'react';
import './style.css';
import SelectRow from '../SelectRow';
import { SelectListConnector } from '../../store/connectors';

class SelectList extends PureComponent {
  render() {
    const { activeId, results, isLoading, searchTerm } = this.props;
    const hasResults = results && results.length > 0;
    const isEmpty = !hasResults && !!searchTerm && !isLoading;

    return (
      <div className="select-list-container">
        {(isEmpty || hasResults) && (
          <div className="select-list">
            {isEmpty && (
              <div className="select-list-empty-container">
                <h2 className="select-list-empty-title">Oh No!</h2>
                <p className="select-list-empty-body">No results found for "{searchTerm}"</p>
              </div>
            )}
            {hasResults && (
              <div>
                {results.map(({ description, id, name, thumbnail }, index) => (
                  <SelectRow key={id} description={description} id={id} isActive={activeId === id} name={name} thumbnail={thumbnail}  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default SelectListConnector(SelectList);