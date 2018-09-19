import { connect } from 'react-redux';
import {
  changeSearchTerm,
  clearSearchTerm,
  setActiveId
} from './actions';
import {
  search
} from './thunks';

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
  onChange: value => {
    dispatch(changeSearchTerm(value));
    dispatch(search(value));
  },
  onClear: () => dispatch(clearSearchTerm()),
}));