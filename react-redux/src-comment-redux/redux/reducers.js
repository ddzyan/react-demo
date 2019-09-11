import { combineReducers } from 'redux';

import { ADD_COMMENT, DEL_COMMENT, RECEVICE_COMMENT } from './action-types';
const initComments = [];

const comments = (state = initComments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state];
    case DEL_COMMENT:
      return state.filter((value, index) => index !== action.data);
    case RECEVICE_COMMENT:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({ comments });
/**
 * 暴露的 state 数据结构为
 * {
 *  comments:[]
 * }
 */
