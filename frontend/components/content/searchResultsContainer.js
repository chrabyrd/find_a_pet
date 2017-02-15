import { connect } from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = ({ searchResults }) => ({
  searchResults
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
