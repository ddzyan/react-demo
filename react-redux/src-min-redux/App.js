import React, { Component } from "react";
import PropTypes from "prop-types";

import { add, minus } from "./redux/actions";
class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  add = () => {
    const vaule = this.select.value;
    this.props.store.dispatch(add(vaule));
  };

  minus = () => {
    const vaule = this.select.value;
    this.props.store.dispatch(minus(vaule));
  };

  asyncAdd = () => {
    const vaule = this.select.value;
    setTimeout(() => {
      this.props.store.dispatch(add(vaule));
    }, 1000);
  };

  render() {
    const count = this.props.store.getState().counter;
    return (
      <div>
        <p>click:{count}</p>
        <select ref={select => (this.select = select)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>
      </div>
    );
  }
}

export default App;
