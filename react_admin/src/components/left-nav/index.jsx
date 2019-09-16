import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './index.less';
import logo from '../../assets/images/logo.png';

const { SubMenu } = Menu;
class LeftNav extends Component {
  state = {};
  render() {
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo"></img>
          <h1>React 后台</h1>
        </Link>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>首页</span>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>品类管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="pie-chart" />
              <span>商品管理</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LeftNav;
