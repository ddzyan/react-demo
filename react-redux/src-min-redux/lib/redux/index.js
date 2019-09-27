/**
 * 自定义redux库
 * 对外暴露三个核心方法
 * 1）createStore() 参数为 reducer ，创建一个 store 对象
 * 2)combineReducers() 整合多个reducer，对外暴露的数据结构是{}里面包含多个state
 * 3）applyMiddleware() 中间件
 *
 * store 对象核心的三个方法
 * 1)getState() 获取最新的state
 * 2)dispatch() 参数为 action,根据action对象，修改state
 * 3)subscribe() 参数为callback，如果state更新，则执行回调函数
 */

export const createStore = reducer => {
  let state = reducer(undefined, { type: "init" }); // 初始化state
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    const newState = reducer(state, action);

    state = newState;

    listeners.forEach(callback => callback(state));
  }

  function subscribe(callback) {
    listeners.push(callback);
  }

  return {
    getState,
    dispatch,
    subscribe
  };
};

/**
 * 合多个reducer，对外暴露的数据结构是{}里面包含多个state
 * 新的reducer管理的总状态:{}
 */
export const combineReducers = reducers => {
  return (state = {}, action) => {
    /**
     * key 就是{counter,user}
     */
    const newState = Object.keys(reducers).reduce((preState, key) => {
      // 遍历执行 reducers 中每个 reducer 返回最新的状态,并添加到一个对象容器中：总状态对象
      preState[key] = reducers[key](state[key], action);
      return preState;
    }, {});
    return newState;
  };
};
