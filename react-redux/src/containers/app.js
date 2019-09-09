import { connect } from 'react-redux';

import Counter from '../components/counter';
import { add, minus, asyncAdd } from '../redux/actions';

export default connect(
  state => ({ count: state.counter }),
  { add, minus, asyncAdd }
)(Counter);
