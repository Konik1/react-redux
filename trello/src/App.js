import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import rootReducer from './store'
import Board from './components/board'

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <div className="all">
        <Provider store={store}><Board /></Provider>
      </div>
      
    );
  }
}

export default App;
