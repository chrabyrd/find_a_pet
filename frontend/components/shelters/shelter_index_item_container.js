import { connect } from 'react-redux';
import ShelterIndexItem from './shelter_index_item';
import { deleteShelter } from '../../actions/shelter_actions';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  deleteShelter: id => dispatch(deleteShelter(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterIndexItem);
