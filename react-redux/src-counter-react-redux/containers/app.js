/**
 *
 * connect() 返回的是一个高级组件，接收一个UI组件，生成一个容器组件
 * 容器组件的作用是向UI组件传入特定的属性
 */

import { connect } from "react-redux";

import { add, minus, asyncAdd } from "../redux/actions";
import counter from "../components/counter";

export default connect(
  state => ({ count: state }),
  {
    add,
    minus,
    asyncAdd
  }
)(counter);
