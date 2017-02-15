import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => {
  return ({
    user: session.user,
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()).then(window.location.reload())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
