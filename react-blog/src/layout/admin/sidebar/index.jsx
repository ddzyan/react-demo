import React from 'react';
import { Icon, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import menu from '../../../config/menu';

const { Item, SubMenu } = Menu;

function getMenuOpenKeys(menu) {
  const list = [];
  menu.forEach(item => {
    if (item.children) {
      item.children.forEach(child => {
        list.push({
          pathname: child.path,
          openKey: item.path,
        });
      });
    }
  });
  return list;
}

const menuMenuOpenKeys = getMenuOpenKeys(menu);

function AdminSidebar(props) {
  // 菜单渲染
  function renderMenu(list) {
    function renderRoute(item) {
      // 渲染子项目
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.name}</span>
              </span>
            }
          >
            {item.children.map(renderRoute)}
          </SubMenu>
        );
      } else {
        return (
          item.name && (
            <Item key={item.path}>
              <NavLink to={item.path}>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.name}</span>
              </NavLink>
            </Item>
          )
        );
      }
    }
    return list.map(renderRoute);
  }

  const target = menuMenuOpenKeys.find(
    d => d.pathname === props.selectedKeys[0]
  );
  const openKeys = target ? [target.openKey] : [];
  return (
    <Menu
      defaultOpenKeys={openKeys}
      selectedKeys={props.selectedKeys}
      mode="inline"
      style={{ height: '100%', borderRight: 0 }}
    >
      {renderMenu(menu)}
    </Menu>
  );
}

export default AdminSidebar;
