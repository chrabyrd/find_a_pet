import { connect } from 'react-redux';
import { createShelter, updateShelter, clearShelterErrors } from '../../actions/shelter_actions';
import ShelterForm from './shelter_form';

const mapStateToProps = ({ session, shelterDetails }) => ({
  session,
  shelterDetails,
  errors: shelterDetails.errors
});

const mapDispatchToProps = (dispatch) => ({
    createShelter: shelter => dispatch(createShelter(shelter)),
    updateShelter: shelter => dispatch(updateShelter(shelter)),
    clearShelterErrors: () => dispatch(clearShelterErrors()),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterForm);
