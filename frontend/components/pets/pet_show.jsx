import React from 'react';
import { Link } from 'react-router';
import PetFormContainer from './pet_form_container';
import PetDetail from './pet_detail';

class PetShow extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCurrentPet = this.fetchCurrentPet.bind(this);
    this.deleteCurrentPet = this.deleteCurrentPet.bind(this);
    this.updateCurrentPet = this.updateCurrentPet.bind(this);
  }

  fetchCurrentPet() {
    this.props.fetchPet(parseInt(this.props.params.petId));
  }

  updateCurrentPet() {
    this.props.updatePet(this.fetchCurrentPet());
  }

  deleteCurrentPet() {
    this.props.deletePet(parseInt(this.props.params.petId));
  }

  componentWillMount() {
    this.fetchCurrentPet();
  }

  petActions() {
    if (this.props.session.user.id === this.props.petDetails.user_id) {
      return (
        <div className="pet-actions">
          <PetFormContainer />

        <div className="pet-delete">
          <div className="pet-buttons" onClick={this.deleteCurrentPet}>Delete Pet</div>
        </div>
        </div>
      );
    }
  }

  render () {

    return (
      <div className="pet-show">
        <div className="pet-container">

          <div className="show-img-container">
            {this.props.petDetails.pet_image === "" ? "" : <img src={this.props.petDetails.pet_image} alt="Pet Photo"/>  }
          </div>

          <div className="pet-detail-container">
            <PetDetail pet={this.props.petDetails} />

            <Link className="pet-shelter-link" to={`/shelters/${this.props.petDetails.shelter_id}`}>
              <div>
                Shelter Page
              </div>
            </Link>

            {this.props.session.user ? this.petActions() : "" }
          </div>

        </div>
        <Link className="index-button" to="/">Back to Index</Link>

      </div>
    );
  }
}

export default PetShow;
