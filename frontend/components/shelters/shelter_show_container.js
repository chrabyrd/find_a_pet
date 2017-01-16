import { connect } from 'react-redux';
import ShelterShow from './shelter_show';
import { fetchShelter, deleteShelter } from '../../actions/shelter_actions';

const mapStateToProps = ({shelterDetails}) => ({
  shelterDetails
});

const mapDispatchToProps = dispatch => ({
  fetchShelter: id => dispatch(fetchShelter(id)),
  deleteShelter: id => dispatch(deleteShelter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterShow);
