import { createStore } from "../lib/redux";

import reducers from "./reducers";

// 使用 reducers 创建 store 对象时，内部会调用一次reducers 用于初始化 state 状态
export default createStore(reducers);
