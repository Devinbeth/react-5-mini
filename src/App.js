import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { increment, undo, redo } from './ducks/counter.js';

class App extends Component {
  render() {
    const { currentValue, previousValues, futureValues, increment, undo, redo } = this.props;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => increment(-1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => increment(-5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={previousValues.length === 0}
              onClick={() => undo()}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={futureValues.length === 0}
              onClick={() => redo()}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            {JSON.stringify(this.props, null, 2)}
          </pre>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!state) {
    return {};
  }
  return {
    currentValue: state.currentValue,
    previousValues: state.previousValues,
    futureValues: state.currentValue
  }
}

let actions = { increment, undo, redo};

let connected = connect(mapStateToProps, actions);
export default connected(App);
