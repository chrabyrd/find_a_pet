import React from 'react';
import { Link } from 'react-router';
import ShelterFormContainer from './shelter_form_container';
import ShelterDetail from './shelter_detail';
import PetIndexContainer from '../pets/pet_index_container';
import PetFormContainer from '../pets/pet_form_container';

class ShelterShow extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCurrentShelter = this.fetchCurrentShelter.bind(this);
    this.deleteCurrentShelter = this.deleteCurrentShelter.bind(this);
    this.updateCurrentShelter = this.updateCurrentShelter.bind(this);
  }

  fetchCurrentShelter() {
    this.props.fetchShelter(parseInt(this.props.params.shelterId));
  }

  updateCurrentShelter() {
    this.props.updateShelter(this.fetchCurrentShelter());
  }

  deleteCurrentShelter() {
    this.props.deleteShelter(parseInt(this.props.params.shelterId));
  }

  componentWillMount() {
    this.fetchCurrentShelter();
  }

  render () {

    return (
      <div>
        <label>Actions</label>
        <ShelterFormContainer shelterDetails={this.props.shelterDetails}/>
        <button onClick={this.deleteCurrentShelter}>Delete Shelter</button>
        <PetFormContainer shelterDetails={this.props.shelterDetails} createPetForm="true"/>

        <label>Pets</label>
        <PetIndexContainer />

        <label>Shelter Details</label>
        <ShelterDetail shelter={this.props.shelterDetails} />
        <Link to="/shelters">Back to Index</Link>
        <Link to={`/users/${this.props.shelterDetails.user_id}`}>Back to User Account</Link>
      </div>
    );
  }
}

export default ShelterShow;
