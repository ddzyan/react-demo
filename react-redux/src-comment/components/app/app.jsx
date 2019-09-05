import React, { Component } from 'react';

import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';
class App extends Component {
  state = { commentList: [] };

  add = comment => {
    const { commentList } = this.state;
    commentList.unshift(comment);
    this.setState({
      commentList
    });
  };

  del = id => {
    let { commentList } = this.state;
    commentList = commentList.filter((value, index) => index !== id);
    this.setState({
      commentList
    });
  };

  componentDidMount() {
    setTimeout(() => {
      const commentList = [
        {
          name: 'ddz',
          content: 'aaaaaaaa'
        }
      ];

      this.setState({
        commentList
      });
    }, 1000);
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
          <CommentAdd add={this.add}></CommentAdd>
          <CommentList del={this.del} commentList={this.state.commentList}></CommentList>
        </div>
      </div>
    );
  }
}

export default App;
