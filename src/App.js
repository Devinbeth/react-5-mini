import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { increment, undo, redo } from './ducks/counter.js';

class App extends Component {
  render() {
    let { value, increment } = this.props;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{value}</h1>
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
              disabled={false}
              onClick={() => undo(value)}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={false}
              onClick={() => redo(value)}
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
    value: state.value
    // power2: state.value * state.value,
    // sqrt: Math.sqrt(state.value)
  }
}

let actions = { increment };

let connected = connect(mapStateToProps, actions);
export default connected(App);
