import React, { Component } from 'react';
import PropTypes from 'prop-types';

const messageDetails = [
  {
    index: 1,
    content: '中国'
  },
  {
    index: 2,
    content: '美国'
  }
];

class MessageDetail extends Component {
  static propsTypes = {
    message: PropTypes.object.isRequired
  };
  render() {
    const { id } = this.props.match.params;

    const m = messageDetails.find(value => value.index === Number.parseInt(id));
    return (
      <div>
        <ul>
          <li>{m.content}</li>
        </ul>
      </div>
    );
  }
}

export default MessageDetail;
