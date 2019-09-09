import { combineReducers } from 'redux';
import { ADD_COUNT, MINUS_COUNT } from './action-types';

const counter = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return state + action.number;
    case MINUS_COUNT:
      return state - action.number;
    default:
      return state;
  }
};

export default combineReducers({ counter });
