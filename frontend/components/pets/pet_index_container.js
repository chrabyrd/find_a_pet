import { connect } from 'react-redux';
import PetIndex from './pet_index';
import { fetchPets } from '../../actions/pet_actions';
import { selectAllPets } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pets: selectAllPets(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPets: () => dispatch(fetchPets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetIndex);
