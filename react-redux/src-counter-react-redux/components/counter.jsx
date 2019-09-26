import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    minus: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };
  add = () => {
    const value = this.countSelect.value * 1;
    this.props.add(value);
  };

  subtract = () => {
    const value = this.countSelect.value * 1;
    this.props.minus(value);
  };

  addIf = () => {
    const value = this.countSelect.value * 1;
    const count = this.state.count + value;
    if ((count + value) % 2 === 0) {
      this.props.add(value);
    }
  };

  addAsync = () => {
    const value = this.countSelect.value * 1;
    this.props.asyncAdd(value);
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <div>timer:{count}</div>
        <div>
          <select ref={select => (this.countSelect = select)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.add}>+</button>{" "}
          <button onClick={this.subtract}>-</button>
          <button onClick={this.addIf}>increment if add</button>
          <button onClick={this.addAsync}>increment async</button>
        </div>
      </div>
    );
  }
}

export default Counter;
