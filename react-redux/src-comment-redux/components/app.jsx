import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentAdd from './comment-add';
import CommentList from './comment-list';
class App extends Component {
  static propTypes = {
    getComments: PropTypes.func.isRequired,
    delComment: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getComments();
  }

  render() {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.props.addComment}></CommentAdd>
          <CommentList delComment={this.props.delComment} comments={this.props.comments}></CommentList>
        </div>
      </div>
    );
  }
}

export default App;
