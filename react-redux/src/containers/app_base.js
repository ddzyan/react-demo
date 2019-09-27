/**
 *
 * connect() 返回的是一个高级组件，接收一个UI组件，生成一个容器组件
 * 容器组件的作用是向UI组件传入特定的属性
 */

import { connect } from "react-redux";

import { add, minus, asyncAdd } from "../redux/actions";
import counter from "../components/counter";

/**
 * 用来将 redux 管理的 state 数据，映射成UI组件的 props 属性
 */
function mapStateToProps(state) {
  return {
    count: state
  };
}

/**
 * 用来将包含dispatch的代码函数，映射成UI组件的props属性
 */
function mapDispatchToProps(dispatch) {
  return {
    add: number => dispatch(add(number)),
    minus: number => dispatch(minus(number)),
    asyncAdd: number => dispatch(asyncAdd(number))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(counter);
