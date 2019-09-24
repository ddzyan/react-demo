import React, { Component } from "react";
import { Card, Button, Table } from "antd";

class Role extends Component {
  state = {
    roles: [], // 数据源
    role: {} // 选择中的用户
  };

  onRow = role => {
    return {
      onClick: event => {
        this.setState({
          role
        });
      }
    };
  };

  // 初始化异步数据
  componentDidMount() {
    const roles = [
      {
        _id: "5ca9eac0b49ef916541160d5",
        name: "角色1",
        create_time: 1554639552758,
        auth_time: 1557630307021,
        auth_name: "admin"
      },
      {
        _id: "5ca9eab0b49ef916541160d4",
        name: "经理",
        create_time: 1554639536419,
        auth_time: 1558506990798,
        auth_name: "test008"
      }
    ];
    this.setState({
      roles
    });
  }

  render() {
    const { role, roles } = this.state;
    const title = (
      <div>
        <Button type="primary">创建角色</Button>
        <Button type="primary" disabled={!role._id} style={{ marginLeft: 10 }}>
          创建角色权限
        </Button>
      </div>
    );

    const columns = [
      {
        title: "角色名称",
        dataIndex: "name"
      },
      {
        title: "创建时间",
        dataIndex: "create_time"
      },
      {
        title: "授权时间",
        dataIndex: "auth_time"
      },
      {
        title: "授权人",
        dataIndex: "auth_name"
      }
    ];

    return (
      <Card title={title}>
        <Table
          dataSource={roles}
          rowKey="_id"
          columns={columns}
          bordered={true}
          rowSelection={{
            type: "radio",
            selectedRowKeys: [role._id]
          }}
          onRow={this.onRow}
        />
      </Card>
    );
  }
}

export default Role;
