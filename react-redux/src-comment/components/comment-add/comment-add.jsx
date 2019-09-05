import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentAdd extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  };
  state = {
    name: '',
    content: ''
  };

  inputChange = event => {
    const name = event.target.value;
    this.setState({
      name
    });
  };

  textareaChange = event => {
    const content = event.target.value;
    this.setState({
      content
    });
  };

  addComment = () => {
    const comment = this.state;
    this.props.add(comment);
  };

  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input className="form-control" type="text" placeholder="名字" value={this.state.name} onChange={this.inputChange}></input>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" type="text" placeholder="聊天内容" value={this.state.content} onChange={this.textareaChange}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentAdd;
