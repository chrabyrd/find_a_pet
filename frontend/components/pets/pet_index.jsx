import React, { Component } from 'react';
import { ReactRpg } from 'react-rpg';
import { hashHistory } from 'react-router';

class PetIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shelter_id: ""
    };

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
    if (pet.shelter_id === this.state.shelter_id || !this.state.shelter_id) {
      return true;
    } else {
      return false;
    }
  }

  filterType(pet) {
    if (pet.pet_type === this.props.searchResults.pet_type || !this.props.searchResults.pet_type) {
      return true;
    } else {
      return false;
    }
  }

  filterBreed(pet) {
    if (pet.breed === this.props.searchResults.breed || !this.props.searchResults.breed) {
      return true;
    } else {
      return false;
    }
  }

  filterGender(pet) {
    if (pet.gender === this.props.searchResults.gender || !this.props.searchResults.gender) {
      return true;
    } else {
      return false;
    }
  }

  render() {

    let petList = this.props.pets;

    if (this.props.searchResults) {
      petList = petList.filter(pet => this.filterType(pet));
      petList = petList.filter(pet => this.filterBreed(pet));
      petList = petList.filter(pet => this.filterGender(pet));
    }

    petList = petList.filter(pet => this.filterPet(pet));

    const petImages = petList.map(item => ({
      url: item.pet_image,
      id: item.id,

      clickHandler: (imgUrl) => {
        const petId = petImages.find(image => {
          return image.url === imgUrl;
        }).id;

        hashHistory.push(`/pets/${petId}`);
      }
    }));

    return (
      <div style={{height: '100%'}}>
        <ReactRpg imagesArray={petImages} columns={[ 1, 2, 5 ]} padding={0} />
      </div>
    );
  }
}

export default PetIndex;
