import { connect } from 'react-redux';
import ShelterShow from './shelter_show';
import { fetchShelter, deleteShelter } from '../../actions/shelter_actions';

const mapStateToProps = ({shelterDetails, session}) => ({
  shelterDetails,
  session
});

const mapDispatchToProps = dispatch => ({
  fetchShelter: id => dispatch(fetchShelter(id)),
  deleteShelter: id => dispatch(deleteShelter(id)).then(window.location = "/")
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterShow);
