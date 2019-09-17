import React, { Component } from 'react';
import { Card, Button, Icon, Table, message, Modal } from 'antd';

import LinkButton from '../../components/link-button';
import './category.less';
import { getCategory } from '../../api';
class Category extends Component {
  state = {
    lodding: true,
    categorys: [],
    subCategorys: [],
    parentId: '0',
    parentName: '',
    modalVisible: 0 // 0隐藏,1显示添加,2显示修改
  };

  // 初始化异步数据
  componentDidMount() {
    this.getCategorys();
  }
  // 初始化同步数据
  UNSAFE_componentWillMount() {
    this.initColumns();
  }

  //显示二级分类列表的点击事件
  showSubCategorys = ({ _id, name }) => {
    this.setState(
      {
        parentId: _id,
        parentName: name
      },
      () => {
        this.getCategorys();
      }
    );
  };

  /**
   * 初始化表格的标题内容，因为可能将内容写道配置文件中
   * 在添加按钮标签时候，判断 parentId 来区别是否要添加查看子分类按钮
   */
  initColumns = () => {
    this.columns = [
      {
        title: '分类名称',
        dataIndex: 'name'
      },
      {
        title: '操作',
        width: 300,
        render: category => (
          <span>
            <LinkButton onClick={() => this.updateModalVisible(2)}>修改分类</LinkButton>
            {this.state.parentId === '0' ? <LinkButton onClick={() => this.showSubCategorys(category)}>查看子分类</LinkButton> : ''}
          </span>
        )
      }
    ];
  };

  // 获取一级/二级分类列表
  getCategorys = async () => {
    const { parentId } = this.state;
    const result = await getCategory(parentId);
    if (result && result.status === 0) {
      const categorys = result.data;
      if (Object.is(parentId, '0')) {
        this.setState({
          lodding: false,
          categorys
        });
      } else {
        this.setState({
          lodding: false,
          subCategorys: categorys
        });
      }
    } else {
      message.error('获取分类列表失败');
    }
  };

  // 更新弹窗显示状态
  updateModalVisible = state => {
    this.setState({
      modalVisible: state
    });
  };
  // 添加分类
  addCategory = () => {
    this.updateModalVisible(0);
  };

  // 更新分类
  updateCategory = () => {
    this.updateModalVisible(0);
  };

  /**
   * 通过获得分类接口，异步加载表格内容
   * 判断分类ID是否为0，来决定显示一级/二级分类
   */
  render() {
    const title = '一级菜单';
    const extra = (
      <Button type="primary" onClick={() => this.updateModalVisible(1)}>
        <Icon type="plus"></Icon>
        添加
      </Button>
    );
    const { lodding, categorys, parentId, parentName, subCategorys } = this.state;
    return (
      <div className="category">
        <Modal title="Basic Modal" cancelText={'取消'} okText={'确认'} visible={this.state.modalVisible === 1} onOk={this.addCategory} onCancel={() => this.updateModalVisible(0)}>
          <p>添加</p>
        </Modal>
        <Modal title="Basic Modal" cancelText={'取消'} okText={'确认'} visible={this.state.modalVisible === 2} onOk={this.updateCategory} onCancel={() => this.updateModalVisible(0)}>
          <p>修改</p>
        </Modal>
        <Card title={title} className="category-card" extra={extra}>
          <Table bordered pagination={{ defaultPageSize: 5, showQuickJumper: true }} loading={lodding} columns={this.columns} dataSource={parentId === '0' ? categorys : subCategorys} rowKey="_id" />
        </Card>
      </div>
    );
  }
}

export default Category;
