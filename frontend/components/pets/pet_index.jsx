import React, { Component } from 'react';
import PetIndexItemContainer from './pet_index_item_container';

class PetIndex extends Component {
  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return(
      <section>
        <ul className="pet-index">
          {this.props.pets.map(pet => <PetIndexItemContainer key={`pet${pet.id}`} petDetails={pet} />)}
        </ul>
      </section>
    );
  }
}

export default PetIndex;
