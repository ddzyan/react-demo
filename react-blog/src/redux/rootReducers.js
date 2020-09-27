import { combineReducers } from 'redux';

import article from './article/reducer';
import user from './user/reducer';

// 组合多个 store 对象
export default combineReducers({
  user,
  article,
});
