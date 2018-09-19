import {
  searchFailed,
  searchSuccess
} from './actions';

export const search = searchTerm => dispatch => setTimeout(() => window.fetch('/api/stub.json')
  .then(function(response) {
    return response.json();
  })
  .then(
    data => {
      dispatch(searchSuccess(data))
    },
    error => dispatch(searchFailed(error))
  ),
  300 //simulated network latency
);
