import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";
import App from "./app";
import store from "./redux/store";

const user = storageUtils.getUser();
memoryUtils.user = user;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
