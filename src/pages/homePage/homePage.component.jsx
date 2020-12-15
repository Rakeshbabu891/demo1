import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { add, minus, fetchUserStart } from "../../redux/home/home.actions";
import { selectHomeValue } from "../../redux/home/home.selectors";

const HomePage = ({ add, minus, value, fetchUserStart }) => (
  <div>
    <h1>value {value}</h1>
    <button onClick={add} className="ml-3">
      Add
    </button>
    <button onClick={minus} className="ml-3">
      minus
    </button>
    <button onClick={fetchUserStart} className="btn btn-primary ml-2">
      get Users
    </button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  value: selectHomeValue,
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(add()),
  minus: () => dispatch(minus()),
  fetchUserStart: () => dispatch(fetchUserStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
