import React, { PureComponent } from 'react';
import './style.css';
import SelectRow from '../SelectRow';
import { SelectListConnector } from '../../store/connectors';

class SelectList extends PureComponent {
  render() {
    const { data, isLoading, searchTerm } = this.props;
    const hasData = data && data.length > 0;
    const isEmpty = !hasData && !!searchTerm && !isLoading;

    console.log('isEmpty = ', isEmpty);

    return (
      <div className="select-list-container">
        {(isEmpty || hasData) && (
          <div className="select-list">
            {isEmpty && (
              <div className="select-list-empty-container">
                <h2 className="select-list-empty-title">Oh No!</h2>
                <p className="select-list-empty-body">No results found for "{searchTerm}"</p>
              </div>
            )}
            {hasData && (
              <div>
                <SelectRow />
                <SelectRow />
                <SelectRow />
                <SelectRow />
                <SelectRow />
                <SelectRow />
                <SelectRow />
                <SelectRow />
                <SelectRow />
                <SelectRow />
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default SelectListConnector(SelectList);