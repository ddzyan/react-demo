import React, { Component } from 'react';

import Search from './search';
import UserList from './user-list';

class App extends Component {
  state = { searchName: '' };

  setSearchName = searchName => {
    this.setState({
      searchName
    });
  };

  render() {
    return (
      <div>
        <Search setSearchName={this.setSearchName}></Search>
        <UserList searchName={this.state.searchName}></UserList>
      </div>
    );
  }
}

export default App;
