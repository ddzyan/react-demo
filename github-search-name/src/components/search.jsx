import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  };

  search = () => {
    const value = this.nameInput.value.trim();
    this.props.setSearchName(value);
    this.nameInput.value.trim();
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="名字" ref={input => (this.nameInput = input)}></input>
        <button type="button" onClick={this.search}>
          查询
        </button>
      </div>
    );
  }
}

export default Search;
