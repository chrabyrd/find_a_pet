import { connect } from 'react-redux';
import PetShow from './pet_show';
import { fetchPet } from '../../actions/pet_actions';

const mapStateToProps = pet => ({
  pet
});

const mapDispatchToProps = dispatch => ({
  fetchPet: id => dispatch(fetchPet(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetShow);
