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

  shelterActions() {
    if (this.props.session.user.id === this.props.shelterDetails.user_id) {
      return (
        <div className="shelter-actions-container">
          <PetFormContainer shelterDetails={this.props.shelterDetails} createPetForm="true"/>
          <ShelterFormContainer shelterDetails={this.props.shelterDetails}/>
          <button className="shelter-delete" onClick={this.deleteCurrentShelter}>Delete Shelter</button>

        </div>
      );
    }
  }

  render () {
    return (
      <div className="shelter-show">

        <div className="shelter-detail-container">
          <div className="show-img-container">
            {this.props.shelterDetails.shelter_image === "" ? "" : <img src={this.props.shelterDetails.shelter_image} alt="Shelter Photo"/>  }
          </div>

          <div className="shelter-info-container">
            <ShelterDetail shelter={this.props.shelterDetails} />
            { this.props.session.user ? this.shelterActions() : "" }
          </div>
        </div>

        <h1 className="pet-index-title">These pets are currently available in this shelter!</h1>
        <div style={{height: '100%', width: '100%'}}>
          <PetIndexContainer />
        </div>

        <div className="pet-links">
          <Link className="index-button" to="/">Back to Index</Link>
        </div>
      </div>
    );
  }
}

export default ShelterShow;
