import React, { Component } from "react";
import { Form, Select, Input } from "antd";

const Item = Form.Item;
const Option = Select.Option;

class AddForm extends Component {
  state = {};
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Item>
          {getFieldDecorator("parentId", { initialValue: "0" })(
            <Select>
              <Option value="0">一级分类</Option>
              <Option value="1">家电</Option>
              <Option value="2">服装</Option>
            </Select>
          )}
        </Item>
        <Item>
          {getFieldDecorator("categoryName", {
            initialValue: "",
            rules: [
              {
                max: 10,
                message: "分类名称需要小于10位"
              },
              { pattern: /^[\u4e00-\u9fa5]+$/, message: "分类名称只能是中文" }
            ]
          })(<Input placeholder="请输入分类名称"></Input>)}
        </Item>
      </Form>
    );
  }
}

const WrapAddForm = Form.create()(AddForm);

export default WrapAddForm;
