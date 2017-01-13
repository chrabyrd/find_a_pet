import { connect } from 'react-redux';
import { login, logout, signupUser, signupShelter, clearErrors }
  from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  errors: session.errors,
});

const mapDispatchToProps = (dispatch) => ({
    processLogIn: user => dispatch(login(user)),
    processSignUpUser: user => dispatch(signupUser(user)),
    processSignupShelter: shelter => dispatch(signupShelter(shelter)),
    clearErrors: () => dispatch(clearErrors())
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
