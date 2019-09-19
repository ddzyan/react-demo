import React, { Component } from "react";
import { Card, Input, Button, Icon, Form, message, Cascader } from "antd";

import LinkButton from "../../components/link-button";
import { getCategory } from "../../api";
const { Item } = Form;
const { TextArea } = Input;

class ProductAddUpdate extends Component {
  state = {
    options: []
  };

  /**
   * 初始化分类级联菜单
   * 如果是修改界面并且product的一级分类(pCategoryId) 不为0
   * 则获取二级分类，并且添加到 对应一级分类的 children 属性中
   * 更新 state 用于默认选中 一级/二级分类
   */
  initOptions = async options => {
    const { product, isUpdate } = this;

    if (isUpdate && product.pCategoryId !== "0") {
      debugger;
      const childOptions = await this.getCategory(product.pCategoryId);
      const targetOption = options.find(
        item => item.value === product.pCategoryId
      );
      targetOption.children = childOptions;
    }
    this.setState({
      options
    });
  };

  /**
   * 获取一级分类列表
   */
  getCategory = async (parentId = 0) => {
    const response = await getCategory(parentId);
    if (response && response.status === 0) {
      const options = response.data.map(({ name, _id }) => ({
        value: _id,
        label: name,
        isLeaf: parentId === 0 ? false : true
      }));
      if (parentId === 0) {
        this.initOptions(options);
      } else {
        return options;
      }
    } else {
      message.error("获取分类列表失败");
    }
  };

  /**
   * 动态加载二级分类列表
   */
  loadData = async selectedOptions => {
    const targetOption = selectedOptions[0]; //获得选择的项
    targetOption.loading = true; // 加载动画

    const option = await this.getCategory(targetOption.value);
    targetOption.loading = false;
    if (option && option.length > 0) {
      targetOption.children = option;
    } else {
      targetOption.isLeaf = true;
    }
    // 更新状态需要放到最后，保证loading动画关闭
    this.setState({
      options: [...this.state.options]
    });
  };

  //提交表单
  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (!error) {
      } else {
        message.error("验证失败");
      }
    });
  };

  /**
   * 商品价格验证，由于已经设置了输入框类型为 Number
   * 无需判断为符合或者字母
   */
  validatePrice = (rule, value, callback) => {
    if (Number.parseInt(value) > 0) {
      callback();
    } else {
      callback("商品价格必须大于0");
    }
  };
  /**
   * 异步初始化数据
   * 获取一级分类列表和二级分类列表
   */
  componentDidMount() {
    this.getCategory();
  }

  /**
   * 同步初始化
   * 记录商品对象和更新标记
   */
  UNSAFE_componentWillMount() {
    const product = this.props.location.state;
    this.isUpdate = !!product;
    this.product = product || {};
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { product, isUpdate } = this;
    const { pCategoryId, categoryId, name, desc, price } = product;
    const categoryIds = [];
    if (isUpdate) {
      categoryIds.push(pCategoryId);
      if (pCategoryId !== "0") {
        categoryIds.push(categoryId);
      }
    }
    const title = (
      <span>
        <LinkButton
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          <Icon type="arrow-left" style={{ fontSize: 15 }} />
        </LinkButton>
        <span style={{ fontSize: 15 }}>添加商品</span>
      </span>
    );

    /**
     * 使用 antd 栅格布局，满格为24
     */
    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 }
    };

    return (
      <Card title={title}>
        <Form {...formItemLayout}>
          <Item label="商品名称:">
            {getFieldDecorator("name", {
              initialValue: name,
              rules: [{ required: true, message: "商品名称不能为空" }]
            })(<Input placeholder="请输入商品名称" />)}
          </Item>
          <Item label="商品描述:">
            {getFieldDecorator("desc", {
              initialValue: desc,
              rules: [{ required: true, message: "商品描述不能为空" }]
            })(
              <TextArea
                placeholder="请输入商品描述"
                autosize={{ maxRows: 6, minRows: 2 }}
              />
            )}
          </Item>
          <Item label="商品价格:">
            {getFieldDecorator("price", {
              initialValue: price,
              rules: [
                { required: true, message: "商品价格不能为空" },
                { validator: this.validatePrice }
              ]
            })(
              <Input
                placeholder="请输入商品价格"
                type="number"
                addonAfter="元"
              />
            )}
          </Item>
          <Item label="商品类别">
            {getFieldDecorator("categorys", {
              initialValue: categoryIds,
              rules: [
                { required: true, message: "商品价格不能为空" },
                { validator: this.validator }
              ]
            })(
              <Cascader
                placeholder="请选择商品分类"
                options={this.state.options} /**显示需要显示的数据数组 */
                loadData={
                  this.loadData
                } /**当选择某个选项，加载下一列的监听回调 */
              />
            )}
          </Item>
          <Button type="primary" onClick={this.submit}>
            提交
          </Button>
        </Form>
      </Card>
    );
  }
}

const WrapProductAddUpdate = Form.create()(ProductAddUpdate);

export default WrapProductAddUpdate;
