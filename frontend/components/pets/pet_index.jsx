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
    if (pet.shelter_id === this.state.shelter_id || this.state.shelter_id === "") {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const petList = this.props.pets.filter(pet => this.filterPet(pet));

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

    console.log(petImages);
    return (
      <div style={{height: '100%'}}>
        <ReactRpg imagesArray={petImages} columns={[ 1, 2, 5 ]} padding={0} />
      </div>
    );
  }
}

export default PetIndex;
