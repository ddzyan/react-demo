import React, { Component } from "react";

class Counter extends Component {
  state = {};

  add = () => {
    this.props.add(1);
  };

  minus = () => {
    this.props.minus(1);
  };

  asycAdd = () => {
    this.props.asyncAdd(10);
  };

  render() {
    console.log("render()");
    const { count } = this.props;
    return (
      <div>
        <h1>count:{count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asycAdd}>asycAdd</button>
      </div>
    );
  }
}

export default Counter;
