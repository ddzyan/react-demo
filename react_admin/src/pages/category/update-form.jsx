import React, { Component } from "react";
import { Form, Input } from "antd";

const Item = Form.Item;
class UpdateForm extends Component {
  state = {};
  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Item>
          {getFieldDecorator("categoryName", {
            initialValue: "",
            rules: [
              { max: 12, message: "分类名称需要小于12位" },
              { pattern: /^[\u4e00-\u9fa5]+$/, message: "分类名称必须是中文" }
            ]
          })(<Input placeholder="请输入分类名称"></Input>)}
        </Item>
      </Form>
    );
  }
}

const WrapUpdateForm = Form.create()(UpdateForm);

export default WrapUpdateForm;
