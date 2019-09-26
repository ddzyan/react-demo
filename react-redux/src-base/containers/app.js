import { connect } from 'react-redux';

import { add, minus, asyncAdd } from '../redux/actions';
import counter from '../components/counter';

export default connect(
  state => ({ count: state }),
  {
    add,
    minus,
    asyncAdd
  }
)(counter);
