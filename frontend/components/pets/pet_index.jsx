import React, { Component } from 'react';
import PetIndexItemContainer from './pet_index_item_container';

class PetIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearShelters();
    this.props.fetchPets();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      shelter_id: newProps.shelterDetails.id || ""
    });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
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
