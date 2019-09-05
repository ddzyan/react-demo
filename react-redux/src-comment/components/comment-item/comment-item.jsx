import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentItem extends Component {
  static propTypes = {
    del: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired
  };

  delComment = index => {
    if (window.confirm('确认删除')) {
      this.props.del(index);
    }
  };

  render() {
    const { comment, index } = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <button onClick={() => this.delComment(index)}>删除</button>
        </div>
        <p className="user">
          <span>{comment.name}</span>
          <span>说:</span>
        </p>
        <p className="centence">{comment.content}</p>
      </li>
    );
  }
}

export default CommentItem;
