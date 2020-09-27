import { Form, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

import useBreadcrumb from '../../../../hooks/useBreadcrumb';

const { Item } = Form;

function ArticleManager(props) {
  useBreadcrumb(['文章管理']);

  // 在 redux 中获取指定的 store
  const { tagList, categoryList } = useSelector(state => ({
    tagList: state.article.tagList,
    categoryList: state.article.categoryList,
  }));

  const { getFieldDecorator } = props.form;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="admin-article-manager">
      <Form
        layout="inline"
        onSubmit={handleSubmit}
        style={{ marginBottom: 20 }}
      >
        <Item label="关键词">
          {getFieldDecorator('keyword')(
            <Input placeholder="请输入文章关键词" allowClear />
          )}
        </Item>
      </Form>
    </div>
  );
}

export default Form.create()(ArticleManager);
