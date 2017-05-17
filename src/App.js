import {createElement, Component} from 'rax';
import styles from './App.css';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'rax-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import testAppReducers from './reducers/reducers';
const loggerMiddleware = createLogger();
const store = createStore(testAppReducers, applyMiddleware(thunk, loggerMiddleware));

import ListBad from './list_bad';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListBad />
      </Provider>
    );
  }
}

export default App;
