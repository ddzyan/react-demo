/**
 * redux 提供一个高阶函数 createStore 和一个普通函数 combineReduce
 *
 * createStore 对外暴露了三个核心属性
 * 1)getState() 获取最新的state对象
 * 2)dispatch() 通过传入的 action 对象,修改state属性
 * 3)subscribe() 传入callback函数，在state更新的时候会执行，通知进行render
 *
 * combineReduce 参数为 reducers 对象，整合一个新的 reducer对象,返回为一个对象{}
 */
export const createStore = reducer => {
  // 初始化 state
  let state = reducer(undefined, { type: "redux@init" });
  // 回调函数队列数组
  const listenters = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    // 在reducer工厂函数中，传入 action ，获取最新的state 对象
    const newState = reducer(action);
    state = { ...newState };
    // 执行回调函数，通知状态更新
    listenters.forEach(callback => callback(newState));
  }

  function subscribe(callback) {
    listenters.push(callback);
  }
  return {
    getState,
    dispatch,
    subscribe
  };
};

/**
 * 包装整合多个reducer对象,返回一个总的reducer
 * 总的reducer管理状态对象为:{count,user}
 *
 */
export const combineReduce = reducers => {
  return (state = {}, action) => {
    // 返回一个新的state 对象
    const newState = Object.keys(reducers).reduce((pre, key) => {
      /**
       * 获取 reducers 的所有key
       * 递归遍历每个key,获取指定key的reducer方法，传入state和action
       * 这里的传入的state是总的state ，需要通过state[key] 获得指定的state，传入reducer
       * 返回值就是最新状态
       */
      pre[key] = reducers[key](state[key], action);

      return pre;
    }, {});
    return newState;
  };
};
