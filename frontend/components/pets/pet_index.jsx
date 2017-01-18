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

  filter(pet) {
    if (pet.shelter_id === this.state.shelter_id || this.state.shelter_id === "") {
      return true;
    } else {
      return false;
    }
  }

  filterPetList() {
    const petList = this.props.pets.filter(pet => this.filter(pet));

    return (
     petList.map( pet => <PetIndexItemContainer key={`pet${pet.id}`} petDetails={pet} /> )
    );
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return(
      <section>
        <ul className="pet-index">
          {this.filterPetList()}
        </ul>
      </section>
    );
  }
}

export default PetIndex;
