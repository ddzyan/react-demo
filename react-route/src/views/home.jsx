import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MyNavLink from '../components/my-nav-link';
import News from './news';
import Message from './message';
class Home extends Component {
  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <div>
          <h1>Home 组件内容</h1>
        </div>
        <div>
          <MyNavLink to={`${path}/news`}>news</MyNavLink>
          <MyNavLink to={`${path}/message`}>message</MyNavLink>
        </div>
        <div>
          <Switch>
            <Route path={`${path}/news`} component={News}></Route>
            <Route path={`${path}/message`} component={Message}></Route>
            <Redirect to={`${path}/news`}></Redirect>
          </Switch>
        </div>
        <div>
          <button onClick={this.back}>后退</button>
          <button onClick={this.forward}>前进</button>
        </div>
      </div>
    );
  }
}

export default Home;
