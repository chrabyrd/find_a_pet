import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  user: session.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);