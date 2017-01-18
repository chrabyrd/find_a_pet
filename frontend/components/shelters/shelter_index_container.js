import { connect } from 'react-redux';
import ShelterIndex from './shelter_index';
import { fetchShelters } from '../../actions/shelter_actions';
import { selectAllShelters } from '../../reducers/selectors';

const mapStateToProps = state => ({
  shelters: selectAllShelters(state),
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchShelters: () => dispatch(fetchShelters())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterIndex);
