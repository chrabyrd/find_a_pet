import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { selectAllPets } from '../../reducers/selectors';

const mapStateToProps = state => ({
  pets: selectAllPets(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
