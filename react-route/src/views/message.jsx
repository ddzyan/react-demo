import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import MessageDetail from './message-detail';
class Message extends Component {
  state = {
    messageList: []
  };
  // 模拟异步加载
  componentDidMount() {
    setTimeout(() => {
      const messageList = [{ index: 1, title: '00001' }, { index: 2, title: '00002' }];
      this.setState({
        messageList
      });
    }, 1000);
  }

  pushClick = index => {
    const { path } = this.props.match;
    this.props.history.push(`${path}/messageDeatil/${index}`);
  };

  replaceClick = index => {
    const { path } = this.props.match;
    this.props.history.replace(`${path}/messageDeatil/${index}`);
  };

  render() {
    const { path } = this.props.match;
    const { messageList } = this.state;
    const display = messageList.length > 0 ? 'none' : 'block';
    return (
      <div>
        <h1 style={{ display }}>正在加载...</h1>
        <div>
          {messageList.map((value, index) => (
            <div key={index}>
              <Link to={`${path}/messageDeatil/${value.index}`}>{value.title}</Link>
              <button onClick={() => this.pushClick(value.index)}>查看详情(push)</button>
              <button onClick={() => this.replaceClick(value.index)}>查看详情(replace)</button>
            </div>
          ))}
        </div>
        <div>
          <Route path={`${path}/messageDeatil/:id`} component={MessageDetail}></Route>
        </div>
      </div>
    );
  }
}

export default Message;
