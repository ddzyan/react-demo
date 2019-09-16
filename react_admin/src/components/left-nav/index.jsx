import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import './index.less';
import logo from '../../assets/images/logo.png';
import menuList from '../../config/memuConfig';

const { SubMenu } = Menu;
class LeftNav extends Component {
  state = {};

  getMenuNodes_map = menuList => {
    /**
     * 根据配置文件。使用递归方法动态生成导航栏
     * 判断是否有 children 属性，来生成对应的 SubMenu/Menu.Item
     * 通过 key 属性，决定跳转路径
     */
    return menuList.map(item => {
      const { title, key, icon, children } = item;
      if (children) {
        return (
          <SubMenu
            key={key}
            title={
              <span>
                <Icon type={icon} />
                <span>{title}</span>
              </span>
            }
          >
            {this.getMenuNode(children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={key}>
            <Link to={key}>
              <Icon type={icon} />
              <span>{title}</span>
            </Link>
          </Menu.Item>
        );
      }
    });
  };

  getMenuNodes = menuList => {
    /**
     * 采用 array reduce遍历方法，实现累计求和
     * 遍历数组数组每一个元素，进行累计操作
     */
    const { pathname } = this.props.location;
    return menuList.reduce((pre, item) => {
      const { title, key, icon, children } = item;
      if (children) {
        const citem = children.find(citem => citem.key === pathname);
        if (citem) {
          this.openKey = citem.key;
        }

        pre.push(
          <SubMenu
            key={key}
            title={
              <span>
                <Icon type={icon} />
                <span>{title}</span>
              </span>
            }
          >
            {this.getMenuNodes(children)}
          </SubMenu>
        );
      } else {
        pre.push(
          <Menu.Item key={key}>
            <Link to={key}>
              <Icon type={icon} />
              <span>{title}</span>
            </Link>
          </Menu.Item>
        );
      }

      return pre;
    }, []);
  };

  /**
   * 组将将要挂载等生命周期阶段，同步
   * 一般用于初始化数据，执行完毕后，才会执行 render
   */
  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }

  render() {
    /**
     * 通过 getMenuNodes 递归添加子项
     * 通过 selectedKeys 设置选择的栏目
     */
    const { pathname: path } = this.props.location;
    const openKey = this.openKey;
    console.log('render() :', path);
    console.log('openKey :', openKey);
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo"></img>
          <h1>React 后台</h1>
        </Link>
        <Menu theme="dark" mode="inline" selectedKeys={[path]} defaultOpenKeys={[openKey]}>
          {this.menuNodes}
        </Menu>
      </div>
    );
  }
}

/**
 * withRouter 高阶组件
 * 包装非路由组件，传递 history/location/mathc属性
 *
 * 非路由组件:不是用过router 跳转的组件
 */

export default withRouter(LeftNav);
