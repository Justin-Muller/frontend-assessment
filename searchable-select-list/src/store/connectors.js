import { connect } from 'react-redux';
import {
  changeSearchTerm,
  clearSearchTerm
} from './actions';

export const SelectTextboxConnector = connect(store => ({
  isLoading: store.isLoading,
  searchTerm: store.searchTerm,
}), dispatch => ({
  onChange: value => dispatch(changeSearchTerm(value)),
  onClear: () => dispatch(clearSearchTerm()),
}));