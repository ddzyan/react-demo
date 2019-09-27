/* 1. react-redux 向外暴露的接口
   1. Provider 组件
   2. connect() 函数
2. Provider
   1. 接收 store 属性
   2. 让所有容器组件都可以看到 store,从而通过 store 读取/更新状态
3. connect()
   1. 接收 2 个参数：mapStateToProps , mapDispatchToProps
   2. mapStateToProps :向 UI 组件 props 传递一般属性
   3. mapDispatchToProps:向 UI 组件 props 传递函数属性
   4. connect() 执行的返回值为一个高阶组件：包装 UI 组件，返回一个新的容器组件，组件会向 UI 组件传递一般/函数属性 */

/**
 * 1) 对外暴露 Provider 组件和 connect 高阶函数
 * 2) 使用组件 context 属性，对子组件暴露 store
 */
import PropTypes from "prop-types";
import React, { Component } from "react";

/**
 * 定义 Provider 组件，接收 store 属性
 * 使用 context 向子组件传递 store 属性
 */
export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired // 声明接收的 store的数据类型
  };

  // 声明提供的context的属性类型
  static childContextTypes = {
    store: PropTypes.object
  };

  //向所有组件提供包含要传递数据的context对象
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    console.log("Provider store :", this.props.store);
    // 返回渲染 Provider 的子组件
    return this.props.children;
  }
}

/**
 * 定义 connect 高阶函数，接收 mapStateToProps 和 mapDispatchToProps ，返回一个高阶组件函数
 * 接收一个 UI 组件，返回一个具有 state 和 action 的容器组件
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  // 返回一个高阶组件函数
  return UIcomponent => {
    return class ContainerComponent extends Component {
      // 声明接收的context数据的名称和类型
      static contextTypes = {
        store: PropTypes.object
      };

      constructor(props, context) {
        super(props);
        console.log("ContainerComponent constructor()", context.store);
        const { store } = context;
        // 获得一般属性对象
        const stateProps = mapStateToProps(store.getState());
        console.log("stateProps :", stateProps);
        // this.state 状态属性
        this.state = { ...stateProps };
        // 获得函数属性对象
        /**
         * 遍历获得 mapDispatchToProps 的所有keys
         * 递归遍历每个 key对应的 action 方法为 actionCreator
         * 采用闭包函数打包store.dispatch 函数，并将 actionCreator 传入
         * 闭包函数的参数采用...args获取，并且传入 actionCreator 中
         * 最后将这个闭包函数，传入总的pre 函数属性对象中
         */

        /**
         * 判断 mapDispatchToProps 类型，function 或者 object
         */
        let dispatchProps;
        if (typeof mapDispatchToProps === "function") {
          dispatchProps = mapDispatchToProps(store.dispatch);
        } else {
          dispatchProps = Object.keys(mapDispatchToProps).reduce((pre, key) => {
            // 通过调用执行action create 返回一个 action 对象
            const actionCreator = mapDispatchToProps[key];
            pre[key] = (...args) => store.dispatch(actionCreator(...args));
            return pre;
          }, {});
        }

        this.dispatchProps = dispatchProps;
        store.subscribe(() => {
          const newState = mapStateToProps(store.getState());
          console.log("store.subscribe :", newState);
          this.setState({ ...newState });
        });
      }
      render() {
        return <UIcomponent {...this.state} {...this.dispatchProps} />;
      }
    };
  };
}
