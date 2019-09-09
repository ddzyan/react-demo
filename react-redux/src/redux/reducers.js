import { combineReducers } from 'redux';
import { ADD, MINUS } from './action-types';

const counter = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + action.number;
    case MINUS:
      return state - action.number;
    default:
      return state;
  }
};

export default combineReducers({ counter });
