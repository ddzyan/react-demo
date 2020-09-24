import React from 'react';

import { useLocation } from 'react-router-dom';

import '../../style/admin.less';

import AdminHeader from './header';
import AdminSidebar from './sidebar';

import { Layout } from 'antd';

const { Sider, Header, Content } = Layout;

const AdminLayout = props => {
  const location = useLocation();
  console.log(props.children);
  return (
    <Layout className="admin-container">
      <Header className="admin-header">
        <AdminHeader />
      </Header>

      <Layout>
        <Sider width={200} className="admin-sider">
          <AdminSidebar selectedKeys={location.pathname} />
        </Sider>
        <Layout className="admin-content-wrap">
          <Content className="admin-content">{props.children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
