import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import { AppState } from './types';

const logo = require('./logo.svg');

interface AppProps {
  count: number;
  onIncrement(): void;
  onDecrement(): void;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <h3>{this.props.count}</h3> 
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => ({
  onIncrement: () => { dispatch({type: 'INCREMENT'}); },
  onDecrement: () => { dispatch({type: 'DECREMENT'}); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
