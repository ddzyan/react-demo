import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";

import "./index.less";
import logo from "../../assets/images/logo.png";
import menuList from "../../config/memuConfig";

const { SubMenu } = Menu;
class LeftNav extends Component {
  state = {};
  /**
   * 采用 array reduce遍历方法，实现累计往 pre 数组中添加新下内容
   * 在遍历的过程中，判断二级菜单栏的 key 是否与当前路径相同
   * 如果一致则记录一级菜单栏的 key
   */
  getMenuNodes = menuList => {
    const { pathname } = this.props.location;
    return menuList.reduce((pre, item) => {
      const { title, key, icon, children } = item;
      if (children) {
        const citem = children.find(citem => citem.key === pathname);
        if (citem) {
          this.openKey = item.key;
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
   * 在执行 render 之前，准备好菜单栏数据，用于初始化渲染
   * 一般用于初始化同步数据
   * componentDidMount 则用于初始化异步数据，包含：ajax请求，关闭计时器等
   */
  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }
  /**
   * 通过 getMenuNodes 递归添加子项
   * 通过 selectedKeys 设置选择的栏目
   * defaultOpenKeys 设置打开的二级菜单栏，值为一级菜单栏
   */
  render() {
    const { pathname: path } = this.props.location;
    const openKey = this.openKey;
    console.log("render() :", path);
    console.log("openKey :", openKey);
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo"></img>
          <h1>React 后台</h1>
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
        >
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
