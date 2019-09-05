import React from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../comment-item/comment-item';

function CommentList(props) {
  const { del, commentList } = props;
  const display = commentList.length > 0 ? 'none' : 'block';
  return (
    <div className="col-md-8">
      <h3 className="reply">评论回复：</h3>
      <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
      <ul className="list-group">
        {commentList.map((vaule, index) => (
          <CommentItem del={del} comment={vaule} index={index} key={index}></CommentItem>
        ))}
      </ul>
    </div>
  );
}

CommentList.propTypes = {
  del: PropTypes.func.isRequired,
  commentList: PropTypes.array.isRequired
};
export default CommentList;
