import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';

import logo from '../../assets/images/logo.png';

import './login.less';
class Login extends Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields(async (error, value) => {
      if (!error) {
        const { username, password } = value;
        if (username && password) {
          message.success('登陆成功');
        }
      } else {
        message.error('验证失败');
      }
    });
  };

  validator = (rule, value, callback) => {
    if (!value) {
      callback('密码不能为空');
    } else if (value.length < 4) {
      callback('密码长度不能小于4');
    } else if (value.length > 12) {
      callback('密码长度不能大于12');
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成');
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"></img>
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { require: true, whitespace: true, message: '用户名不能为空' },
                  { min: 4, message: '用户名最少要4位数' },
                  { max: 12, message: '用户名最多为12位数' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }
                ],
                initialValue: 'admin'
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ validator: this.validator }]
              })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

const WrapLogin = Form.create()(Login);

export default WrapLogin;
