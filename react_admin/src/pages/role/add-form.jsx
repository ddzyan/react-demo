import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";

const { Item } = Form;
class AddForm extends Component {
  static propTypes = {
    setForm: PropTypes.func.isRequired
  };
  state = {};

  UNSAFE_componentWillMount() {
    this.props.setForm(this.props.form);
  }

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 10 }}>
        <Item label="角色名称:">
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "用户名称必须输入" }]
          })(<Input placeholder="请输入角色名称" />)}
        </Item>
      </Form>
    );
  }
}

const WrapAddForm = Form.create()(AddForm);

export default WrapAddForm;
