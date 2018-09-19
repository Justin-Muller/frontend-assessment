import React, { PureComponent } from 'react';
import './style.css';
import spinner from '../../assets/spinner.gif';
import { SelectTextboxConnector } from '../../store/connectors';

class SelectTextbox extends PureComponent {
  onChange = (event) => {
    const { value } = event.target;
    const { onChange, onClear } = this.props;
    if (!value) {
      onClear();
    } else {
      onChange(event.target.value);
    }
  };

  render() {
    const { isLoading, onClear, searchTerm } = this.props;

    return (
      <div className="select-textbox-container">
        <input className="select-textbox" placeholder="Search.." type="text" onChange={this.onChange} value={searchTerm} />
        {isLoading && <img alt="loading" src={spinner} className="select-textbox-spinner" />}
        {!!searchTerm && !isLoading && <span className="select-textbox-clear" onClick={onClear}>&times;</span>}
      </div>
    )
  }
}

export default SelectTextboxConnector(SelectTextbox);