import { connect } from 'react-redux';

import { getComments, addComment, delComment } from '../redux/actions';
import App from '../components/app';
export default connect(
  state => ({ comments: state.comments }),
  { getComments, addComment, delComment }
)(App);
