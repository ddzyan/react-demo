/**
 * 根据老的state和传入的action,生成新的state
 */
import { combineReducers } from "redux";
import { SET_HEAD_TITLE } from "./action-types";
import memoryUtils from "../utils/memoryUtils";

const initHeadTitle = "首页";
const headTitle = (state = initHeadTitle, action) => {
  switch (action.type) {
    case SET_HEAD_TITLE:
      return action.headTitle;
    default:
      return state;
  }
};
const initUser = memoryUtils.user;
const user = (state = initUser, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/**
 * 向外默认的暴露的是合并产生的总的reduce函数
 * 管理的 总和state的结构是
 * {
 *  headerTitle:'首页'，
 * user:{}
 * }
 */
export default combineReducers({
  headTitle,
  user
});
