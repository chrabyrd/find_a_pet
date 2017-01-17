import { connect } from 'react-redux';
import { createPet, updatePet} from '../../actions/pet_actions';
import PetForm from './pet_form';


const mapStateToProps = ({ session, petDetails }) => ({
  session,
  petDetails
});

const mapDispatchToProps = (dispatch) => ({
    createPet: pet => dispatch(createPet(pet)),
    updatePet: pet => dispatch(updatePet(pet)),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetForm);
