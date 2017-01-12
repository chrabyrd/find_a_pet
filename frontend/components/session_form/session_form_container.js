import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
    processLogIn: user => dispatch(login(user)),
    processSignUp: user => dispatch(signup(user)),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
