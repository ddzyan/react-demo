import { connect } from 'react-redux';

import Counter from '../components/counter';
import { addCount, minusCount } from '../redux/actions';

export default connect(
  state => ({ count: state.counter }),
  { addCount, minusCount }
)(Counter);
