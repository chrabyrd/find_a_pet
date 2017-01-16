import { connect } from 'react-redux';
import PetShow from './pet_show';
import { fetchPet, deletePet, updatePet } from '../../actions/pet_actions';
import { selectPet } from '../../reducers/selectors';
import { fetchShelter } from '../../actions/shelter_actions';

const mapStateToProps = ({ petDetails }) => ({
  petDetails
});

const mapDispatchToProps = dispatch => ({
  fetchPet: id => dispatch(fetchPet(id)),
  updatePet: pet => dispatch(updatePet(pet)),
  deletePet: id => dispatch(deletePet(id)),
  fetchShelter: id => dispatch(fetchShelter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetShow);
