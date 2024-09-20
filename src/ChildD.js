import React from "react";
import { connect } from "react-redux";

function ChildD(props) {
  return (
    <div>
      <h2>Count in Child C: {props.counter}</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

export default connect(mapStateToProps)(ChildD);
