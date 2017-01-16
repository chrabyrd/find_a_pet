import React, { Component } from 'react';
import PetIndexItem from './pet_index_item';

class PetIndex extends Component {
  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return(
      <section>
        <ul>
          {this.props.pets.map(pet => <PetIndexItem key={`pet${pet.id}`} pet={pet} />)};
        </ul>
      </section>
    );
  }
}

export default PetIndex;
