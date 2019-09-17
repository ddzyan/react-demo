import React, { Component } from "react";
import { Card, Button, Icon, Table, message } from "antd";

import LinkButton from "../../components/link-button";
import "./category.less";
import { getCategory } from "../../api";
class Category extends Component {
  state = {
    lodding: true,
    categorys: []
  };

  // 初始化行内容，因为可能将内容写道配置文件中
  initColumns = () => {
    this.columns = [
      {
        title: "分类名称",
        dataIndex: "name"
      },
      {
        title: "操作",
        width: 300,
        render: () => (
          <span>
            <LinkButton>修改分类</LinkButton>
            <LinkButton>查看子分类</LinkButton>
          </span>
        )
      }
    ];
  };
  initCategory = async () => {
    const result = await getCategory(0);
    if (result && result.status === 0) {
      const categorys = result.data;
      this.setState({
        lodding: false,
        categorys
      });
    } else {
      message.error("获取分类列表失败");
    }
  };
  // 初始化异步数据
  componentDidMount() {
    this.initCategory();
  }
  // 初始化同步数据
  UNSAFE_componentWillMount() {
    this.initColumns();
  }
  /**
   * 通过获得分类接口，异步加载表格内容
   *
   */
  render() {
    const title = "一级菜单";
    const extra = (
      <Button type="primary">
        <Icon type="plus"></Icon>
        添加
      </Button>
    );
    const { lodding, categorys } = this.state;
    return (
      <div className="category">
        <Card title={title} className="category-card" extra={extra}>
          <Table
            bordered
            pagination={{ defaultPageSize: 5, showQuickJumper: true }}
            loading={lodding}
            columns={this.columns}
            dataSource={categorys}
            rowKey="_id"
          />
        </Card>
      </div>
    );
  }
}

export default Category;
