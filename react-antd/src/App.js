import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/login/login';

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/login"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
