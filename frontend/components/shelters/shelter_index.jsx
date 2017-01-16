import React, { Component } from 'react';
import ShelterIndexItem from './shelter_index_item';

class ShelterIndex extends Component {
  componentDidMount() {
    this.props.fetchShelters();
  }

  render() {
    return(
      <section>
        <ul>
          {this.props.shelters.map(shelter => <ShelterIndexItem key={`shelter${shelter.id}`} shelter={shelter} />)}
        </ul>
      </section>
    );
  }
}

export default ShelterIndex;
