import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';

import logo from '../../assets/images/logo.png';
import './login.less';
import { login } from '../../api/login'

const { Item } = Form;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (error, value) => {
      if (!error) {
        const { username, password } = value;
        if ((username, password)) {
          const result = await login(username, password);
          if (result.success) {
            message.success(`username:${username}登陆成功`);
          }
        }
      } else {
        message.error('验证失败');
      }
    });
  };

  validator = (rule, value, callback) => {
    if (!value) {
      callback('密码不能为空');
    } else if (value.length > 12) {
      callback('密码不能大于12位');
    } else if (value.length < 4) {
      callback('密码不能小于4位');
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码只能为密码数字下划线组成');
    } else {
      callback();
    }
  };
  state = {};
  render () {
    const { getFieldDecorator } = this.props.form;
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
              {getFieldDecorator('username', {
                rules: [{ required: true, whitespace: true, message: '用户名必须输入' }, { min: 4, message: '用户名不能小于4位数' }, { max: 12, message: '用户名不能大于12位数' }]
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
            </Item>
            <Item>
              {getFieldDecorator('password', { rules: [{ validator: this.validator }] })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
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
