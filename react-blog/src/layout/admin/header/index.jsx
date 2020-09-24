import React from 'react';
import { Icon, Dropdown, Menu, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';

function AdminHeader(props) {
  const history = useHistory();

  const userInfo = {
    username: '孺子牛',
  };

  const menu = (
    <Menu className='menu'>
      <Menu.Item>
        <span>个人信息</span>
      </Menu.Item>
      <Menu.Item>
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <span className='header-title'>后台管理系统</span>
      <Dropdown overlay={menu} className='header-dropdown'>
        <a className='ant-dropdown-link'>
          {userInfo.username}
          <Icon type='down' />
        </a>
      </Dropdown>
    </div>
  );
}

export default AdminHeader;
