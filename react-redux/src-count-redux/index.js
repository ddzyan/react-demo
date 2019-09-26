import React from "react";
import ReactDOM from "react-dom";

import store from "./redux/store";
import App from "./App";
ReactDOM.render(<App store={store} />, document.getElementById("root"));

store.subscribe(() => {
  // 监听redux管理的state的修改，重新渲染组件
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
});
