import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';

import logo from '../../assets/images/logo.png';
import './login.less';
import { login } from '../../api';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';

const { Item } = Form;

class Login extends Component {
  /**
   * 表单提交事件
   * 1.关闭默认事件
   * 2.判断表单验证是否通过
   * 3.发送登陆请求
   * 4.内存和本地存储，页面跳转
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (error, value) => {
      if (!error) {
        const { username, password } = value;
        if ((username, password)) {
          // 使用同步的方式编写异步代码，代码执行顺序为同步顺序
          const response = await login(username, password);
          message.success(`用户: ${response.data.username} 欢迎回来`);
          memoryUtils.user = response.data;
          storageUtils.saveUser(response.data);
          this.props.history.replace('/');
        }
      } else {
        message.error('验证失败');
      }
    });
  };

  /**
   * value 输入的内容
   * callback 回调内包含字符串则表示验证失败
   * callback 不包含则代表回调成功
   */
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
  render() {
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
