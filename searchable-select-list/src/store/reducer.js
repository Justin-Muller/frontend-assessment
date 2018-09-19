import {
  CHANGE_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
} from './constants';

// TODO - Move data into stub.json + hook up redux-thunk.
const defaultState = {
  data: {
    "results": [
      {
        "id": "1",
        "name": "Iron Man",
        "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark...",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
          "extension": "jpg"
        }
      },
      {
        "id": "2",
        "name": "Wolverine",
        "description": "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured b...",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
          "extension": "jpg"
        }
      },
      {
        "id": "3",
        "name": "Wolfsbane",
        "description": "Rahne Sinclair was an orphan in Scotland, raised by Reverend Craig. When her powers manifested, Craig attempted to...",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
          "extension": "jpg"
        }
      },
      {
        "id": "4",
        "name": "Wolverine X-23",
        "description": "A clone of the mutant Wolverine, X-23 was trained as a living weapon by a secretive government agency. Now residing...",
      }
    ]
  },
  isLoading: false,
  searchTerm: '',
};

const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };

    case CLEAR_SEARCH_TERM:
      return { ...state, data: { results: [] }, searchTerm: '' };

    default:
      return state;
  }
};

export default reducer;