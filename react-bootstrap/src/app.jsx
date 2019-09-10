import React, { Component } from 'react';
import './app.css';

class APP extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>react bootstrap demo</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">.col-md-1</div>
            <div className="col-md-3">.col-md-1</div>
            <div className="col-md-3">.col-md-1</div>
            <div className="col-md-3">.col-md-1</div>
          </div>
        </div>
      </div>
    );
  }
}

export default APP;
