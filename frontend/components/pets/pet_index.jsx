import React, { Component } from 'react';
import PetIndexItemContainer from './pet_index_item_container';

class PetIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shelter_id: ""
    };

    this.filterPetList = this.filterPetList.bind(this);
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

  filterPet(pet) {
    if (pet.shelter_id === this.state.shelter_id || this.state.shelter_id === "") {
      return true;
    } else {
      return false;
    }
  }

  filterPetList() {
    const petList = this.props.pets.filter(pet => this.filterPet(pet));

    return (
     petList.map( pet => <PetIndexItemContainer key={`pet${pet.id}`} petDetails={pet} /> )
    );
  }

  render() {

    return(
      <div className="pet-index-container">
        <ul className="pet-index">
          {this.filterPetList()}
        </ul>
      </div>
    );
  }
}

export default PetIndex;
