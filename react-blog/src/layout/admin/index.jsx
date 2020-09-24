import React from 'react';

import '../../style/admin.less';

import AdminHeader from './header';
import AdminSidebar from './sidebar';

import { Layout } from 'antd';

const { Sider, Header, Content } = Layout;

const AdminLayout = props => {
  return (
    <Layout className="admin-container">
      <Header className="admin-header">
        <AdminHeader />
      </Header>

      <Layout>
        <Sider width={100} className="admin-sider">
          <AdminSidebar />
        </Sider>
      </Layout>
      <Layout className="admin-content-wrap">
        <Content className="admin-content">这是内容区</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
