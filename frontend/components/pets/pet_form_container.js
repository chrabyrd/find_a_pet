import { connect } from 'react-redux';
import { createPet, updatePet, fetchPet, clearPetErrors } from '../../actions/pet_actions';
import PetForm from './pet_form';

const mapStateToProps = ({ session, petDetails }) => ({
  session,
  petDetails,
  errors: petDetails.errors
});

const mapDispatchToProps = (dispatch) => ({
    createPet: pet => dispatch(createPet(pet)),
    fetchPet: id => dispatch(fetchPet(id)),
    updatePet: pet => dispatch(updatePet(pet)),
    clearPetErrors: () => dispatch(clearPetErrors()),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetForm);
