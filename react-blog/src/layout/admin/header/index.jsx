import React from 'react';
import { Icon, Dropdown, Menu, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';

function AdminHeader(props) {
  // 获取location对象，与 props.location 获得的一致
  const history = useHistory();

  const userInfo = {
    username: '孺子牛',
  };

  const menu = (
    <Menu className="menu">
      <Menu.Item>
        <span
          onClick={e => {
            e.preventDefault();
            history.push('/');
          }}
        >
          返回主页
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={e => {
            e.preventDefault();
            history.push('/');
          }}
        >
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <span className="header-title">后台管理系统</span>
      <Dropdown overlay={menu} className="header-dropdown">
        <a className="ant-dropdown-link">
          {userInfo.username}
          <Icon type="down" />
        </a>
      </Dropdown>
    </div>
  );
}

export default AdminHeader;
