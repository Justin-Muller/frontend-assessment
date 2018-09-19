import {
  CHANGE_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
  SEARCH_FAILED,
  SEARCH_SUCCESS,
  SET_ACTIVE_ID,
} from './constants';

export const changeSearchTerm = payload => ({
  type: CHANGE_SEARCH_TERM,
  payload,
});

export const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM,
});

export const searchFailed = payload => ({
  type: SEARCH_FAILED,
  payload,
});

export const searchSuccess = payload => ({
  type: SEARCH_SUCCESS,
  payload,
});

export const setActiveId = payload => ({
  type: SET_ACTIVE_ID,
  payload,
});
