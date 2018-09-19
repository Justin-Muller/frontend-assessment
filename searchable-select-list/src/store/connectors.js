import { connect } from 'react-redux';
import {
  changeSearchTerm,
  clearSearchTerm,
  setActiveId
} from './actions';

export const SelectListConnector = connect(store => ({
  activeId: store.activeId,
  results: store.data.results,
  isLoading: store.isLoading,
  searchTerm: store.searchTerm,
}));

export const SelectRowConnector = connect(null, dispatch => ({
  onClick: id => dispatch(setActiveId(id))
}));

export const SelectTextboxConnector = connect(store => ({
  isLoading: store.isLoading,
  searchTerm: store.searchTerm,
}), dispatch => ({
  onChange: value => dispatch(changeSearchTerm(value)),
  onClear: () => dispatch(clearSearchTerm()),
}));