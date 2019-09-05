import React from 'react';
import PropTypes from 'prop-types';

import CommentItem from './comment-item';

function CommentList(props) {
  const { comments, delComment } = props;
  const display = comments.length > 0 ? 'none' : 'block';
  return (
    <div className="col-md-8">
      <h3 className="reply">评论回复：</h3>
      <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
      <ul className="list-group">
        {comments.map((vaule, index) => (
          <CommentItem delComment={delComment} comment={vaule} index={index} key={index}></CommentItem>
        ))}
      </ul>
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.array.isRequired,
  delComment: PropTypes.func.isRequired
};
export default CommentList;
