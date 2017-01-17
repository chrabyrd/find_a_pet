import { connect } from 'react-redux';
import PetIndexItem from './pet_index_item.js';
import { deletePet } from '../../actions/pet_actions';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  deletePet: id => dispatch(deletePet(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetIndexItem);
