import { Form } from 'antd';
import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import useBreadcrumb from '../../../../hooks/useBreadcrumb';

function ArticleManager(props) {
  useBreadcrumb(['文章管理']);

  // 在 redux 中获取指定的 store
  const { tagList, categoryList } = useSelector(state => ({
    tagList: state.article.tagList,
    categoryList: state.article.categoryList,
  }));

  const { getFieldDecorator } = props.form;

  return (
    <div className="admin-article-manager">
      <Form></Form>
    </div>
  );
}

export default ArticleManager;
