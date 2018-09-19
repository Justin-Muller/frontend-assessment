import { connect } from 'react-redux';
import {
  changeSearchTerm,
  clearSearchTerm
} from './actions';

export const SelectListConnector = connect(store => ({
  data: store.data,
  isLoading: store.isLoading,
  searchTerm: store.searchTerm,
}));

export const SelectTextboxConnector = connect(store => ({
  isLoading: store.isLoading,
  searchTerm: store.searchTerm,
}), dispatch => ({
  onChange: value => dispatch(changeSearchTerm(value)),
  onClear: () => dispatch(clearSearchTerm()),
}));