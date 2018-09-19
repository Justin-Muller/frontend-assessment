import {
  CHANGE_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
  SEARCH_FAILED,
  SEARCH_SUCCESS,
  SET_ACTIVE_ID,
} from './constants';

const defaultState = {
  activeId: null,
  data: {
    "results": []
  },
  error: null,
  isLoading: false,
  searchTerm: '',
};

const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...state, isLoading: true, searchTerm: action.payload };

    case CLEAR_SEARCH_TERM:
      return { ...state, activeId: null, data: { results: [] }, searchTerm: '' };

    case SET_ACTIVE_ID:
      return { ...state, activeId: action.payload};

    case SEARCH_FAILED:
      return { ...state, error: action.payload };

    case SEARCH_SUCCESS:
      return {  ...state, isLoading: false, data: action.payload, error: null };

    default:
      return state;
  }
};

export default reducer;