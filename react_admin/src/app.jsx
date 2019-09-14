import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route to="/login" component={Login}></Route>
          <Route to="/" component={Admin}></Route>
          <Redirect path="/login"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
