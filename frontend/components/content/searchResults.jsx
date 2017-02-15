import React from 'react';
import PetIndexContainer from '../pets/pet_index_container';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div style={{height: "100%", width: "100%"}}>
        <div style={{width: "100%", display: "flex", justifyContent: "center" }}>
          <h1 className="local-pets">Your Search Results</h1>
        </div>
        <PetIndexContainer searchResults={this.props.searchResults} />
      </div>
    );
  }

}


export default SearchResults;
