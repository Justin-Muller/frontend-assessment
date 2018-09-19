import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <NavBar />
        </Provider>
      </div>
    );
  }
}

export default App;
