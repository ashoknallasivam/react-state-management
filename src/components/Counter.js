//src/components/Counter.js
import React from "react";
import { connect } from "react-redux";
import ChildD from "../ChildD";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="App-header4">
      <h1>Increment Decrement Using Plain Redux</h1>
      <ChildD />
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button className="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
