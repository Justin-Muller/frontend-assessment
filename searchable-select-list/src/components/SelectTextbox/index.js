import React, { PureComponent } from 'react';
import './style.css';
import spinner from '../../assets/spinner.gif';
import { SelectTextboxConnector } from '../../store/connectors';

class SelectTextbox extends PureComponent {
  onChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const { onClear, searchTerm } = this.props;

    return (
      <div className="select-textbox-container">
        <input className="select-textbox" placeholder="Search.." type="text" onChange={this.onChange} value={searchTerm} />
        <img alt="loading" src={spinner} className="select-textbox-spinner" />
        <span className="select-textbox-clear" onClick={onClear}>&times;</span>
      </div>
    )
  }
}

export default SelectTextboxConnector(SelectTextbox);