import { connect } from 'react-redux';
import ShelterShow from './shelter_show';
import { fetchShelter } from '../../actions/shelter_actions';

const mapStateToProps = shelter => ({
  shelter
});

const mapDispatchToProps = dispatch => ({
  fetchShelter: id => dispatch(fetchShelter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterShow);
