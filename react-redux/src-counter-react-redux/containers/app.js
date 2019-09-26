import { connect } from "react-redux";

import { add, minus, asyncAdd } from "../redux/actions";
import counter from "../components/counter";

function mapStateToProps(state) {
  return {
    count: state
  };
}

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
