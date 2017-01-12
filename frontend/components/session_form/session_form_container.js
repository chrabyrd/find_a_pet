import { connect } from 'react-redux';
import { login, logout, signup, clearErrors }
  from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
    processLogIn: user => dispatch(login(user)),
    processSignUp: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
