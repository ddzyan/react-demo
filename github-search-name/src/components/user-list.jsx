import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class UserList extends Component {
  static propTypes = {
    searchName: PropTypes.string.isRequired
  };

  state = {
    fistView: true,
    lodding: false,
    userList: null,
    error: null
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  async componentWillReceiveProps(nextProps) {
    const { searchName } = nextProps;
    const url = `https://api.github.com/search/users?q=${searchName}`;
    this.setState({
      fistView: false,
      lodding: true
    });
    try {
      const result = await axios.get(url);
      this.setState({
        userList: result.data.items,
        lodding: false
      });
    } catch (error) {
      this.setState({
        error: error.message,
        lodding: false
      });
    }
  }

  render() {
    const { fistView, lodding, userList, error } = this.state;
    if (fistView) {
      return <h3>请输入查询名称</h3>;
    } else if (lodding) {
      return <h3>加载中...</h3>;
    } else if (error) {
      return <h3>错误:{error}</h3>;
    } else {
      return (
        <div>
          {userList.map((value, index) => (
            <div key={index}>
              <a href={value.html_url}>
                <img src={value.avatar_url} alt="user"></img>
              </a>
              <p>{value.login}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default UserList;
