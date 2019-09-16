import React, { Component } from 'react';
import { Layout } from 'antd';
import { Redirect } from 'react-router-dom';

import './admin.less';
import memoryUtils from '../../utils/memoryUtils';

import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
const { Footer, Sider, Content } = Layout;
class Admin extends Component {
  state = {};
  render() {
    const { user } = memoryUtils;
    if (!user.id) {
      return <Redirect to="/login"></Redirect>;
    }

    return (
      <Layout className="admin">
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer style={{ textAlign: 'center', color: '#cccc' }}>推荐使用谷歌浏览器,获得更好的使用体验</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
