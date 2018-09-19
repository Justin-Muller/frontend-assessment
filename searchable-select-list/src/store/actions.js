import {
  CHANGE_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
} from './constants';

export const changeSearchTerm = payload => ({
  type: CHANGE_SEARCH_TERM,
  payload,
});

export const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM,
});
