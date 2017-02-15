import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { selectAllPets } from '../../reducers/selectors';
import { search } from '../../actions/search_actions';

const mapStateToProps = state => ({
  pets: selectAllPets(state),
});

const mapDispatchToProps = dispatch => ({
  search: results => dispatch(search(results))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
