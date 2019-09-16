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
            <Link to="/">
              <Icon type="home" />
              <span>首页</span>
            </Link>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to="/product">
                <Icon type="bars" />
                <span>品类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/category">
                <Icon type="setting" />
                <span>商品管理</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4">
            <Link to="/user">
              <Icon type="user" />
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/role">
              <Icon type="safety-certificate" />
              <span>角色管理</span>
            </Link>
          </Menu.Item>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="area-chart" />
                <span>图形图表</span>
              </span>
            }
          >
            <Menu.Item key="6">
              <Link to="/charts/bar">
                <Icon type="bar-chart" />
                <span>柱形图</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/charts/pie">
                <Icon type="line-chart" />
                <span>折线图</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/charts/line">
                <Icon type="pie-chart" />
                <span>饼图</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LeftNav;
