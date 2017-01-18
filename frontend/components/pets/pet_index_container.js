import { connect } from 'react-redux';
import PetIndex from './pet_index';
import { fetchPets, deletePet } from '../../actions/pet_actions';
import { clearShelters } from '../../actions/shelter_actions';
import { selectAllPets } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pets: selectAllPets(state),
  shelterDetails: state.shelterDetails
});

const mapDispatchToProps = dispatch => ({
  fetchPets: () => dispatch(fetchPets()),
  deletePet: (id) => dispatch(deletePet(id)),
  clearShelters: () => dispatch(clearShelters())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetIndex);
