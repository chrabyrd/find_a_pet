import { connect } from 'react-redux';
import PetImageShow from './pet_image_show';
import { fetchPetImage } from '../../actions/pet_image_actions';

const mapStateToProps = petImage => ({
  petImage
});

const mapDispatchToProps = dispatch => ({
  fetchPetImage: id => dispatch(fetchPetImage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetImageShow);
