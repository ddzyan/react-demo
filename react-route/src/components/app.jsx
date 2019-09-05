import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MyNavLink from './my-nav-link';
import About from '../views/about';
import Home from '../views/home';
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <MyNavLink to="/about">About</MyNavLink>
          <MyNavLink to="/home">Home</MyNavLink>
        </div>
        <div>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>
            <Redirect to="/about"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
