import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import logo from '../../assets/images/logo.png';
import './login.less';

const { Item } = Form;

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login">
        <header className="login-title">
          <img src={logo} alt="logo"></img>
          <h1>React 后台登陆系统</h1>
        </header>
        <section className="login-content">
          <h2>登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            </Item>
            <Item>
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}

const WrapLogin = Form.create()(Login);

export default WrapLogin;
