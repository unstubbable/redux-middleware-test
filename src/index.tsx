import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { myMiddleware } from './my-middleware';
import { Action, AppState } from './types';

function countReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case 'INCREMENT':
      return ++state;
    case 'DECREMENT':
      return --state;
    default:
      return state;
  }
}

const reducer = combineReducers<AppState>({count: countReducer});
const store = createStore(reducer, applyMiddleware(myMiddleware));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
