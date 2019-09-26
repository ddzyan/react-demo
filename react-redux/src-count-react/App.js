import React, { Component } from "react";

class App extends Component {
  state = { count: 0 };

  add = () => {
    const vaule = this.select.value;
    this.setState(state => ({
      count: state.count + Number.parseInt(vaule)
    }));
  };

  minus = () => {
    const vaule = this.select.value;
    this.setState(state => ({
      count: state.count - Number.parseInt(vaule)
    }));
  };

  asyncAdd = () => {
    const vaule = this.select.value;
    setTimeout(() => {
      this.setState(state => ({
        count: state.count + Number.parseInt(vaule)
      }));
    }, 1000);
  };

  render() {
    const { count } = this.state;
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
