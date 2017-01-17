import { connect } from 'react-redux';
import { createShelter, updateShelter } from '../../actions/shelter_actions';
import ShelterForm from './shelter_form';


const mapStateToProps = ({ session, shelterDetails }) => ({
  session,
  shelterDetails
});

const mapDispatchToProps = (dispatch) => ({
    createShelter: shelter => dispatch(createShelter(shelter)),
    updateShelter: shelter => dispatch(updateShelter(shelter)),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterForm);
