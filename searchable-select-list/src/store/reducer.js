import {
  CHANGE_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
} from './constants';

const defaultState = {
  data: null,
  loading: false,
  searchTerm: '',
};

const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };

    case CLEAR_SEARCH_TERM:
      return { ...state, searchTerm: '' };
  }

  return state;
};

export default reducer;