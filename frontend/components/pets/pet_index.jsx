import React, { Component } from 'react';
import PetIndexItemContainer from './pet_index_item_container';

class PetIndex extends Component {
  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return(
      <section>
        <ul>
          {this.props.pets.map(pet => <PetIndexItemContainer key={`pet${pet.id}`} pet={pet} />)}
        </ul>
      </section>
    );
  }
}

export default PetIndex;
