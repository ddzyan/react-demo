/**
 * react-redux 的目的是简化使用redux
 *
 * 对外暴露一个组件 Provider 和一个高阶函数 connect
 *
 * Provider
 * 有 store 属性，通过 context 向 容器组件传递 store 对象
 *
 * connect 参数为 mapStateProps 和 mapDispathProps ,返回一个高阶组件函数，参数为UI组件，返回一个容器组件
 * mapStateProps 是向UI组件传入一般属性
 * mapDispathProps 是向UI组件传入函数属性
 *
 */

import React, { Component } from "react";

export class Provider extends Component {
  render() {
    // 返回渲染子组件
    return this.props.children;
  }
}

export const connect = (mapStateProps, mapDispathProps) => {
  return UIcomponent => {
    return class ContainerComponent extends Component {
      render() {
        return <UIcomponent />;
      }
    };
  };
};
