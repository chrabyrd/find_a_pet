import React, { Component } from 'react';
import ShelterIndexItemContainer from './shelter_index_item_container';

class ShelterIndex extends Component {
  componentDidMount() {
    this.props.fetchShelters();
  }

  render() {
    return(
      <section>
        <ul>
          {this.props.shelters.map(shelter => <ShelterIndexItemContainer key={`shelter${shelter.id}`} shelter={shelter} />)}
        </ul>
      </section>
    );
  }
}

export default ShelterIndex;
