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
            <div className="delete-button" style={{width:'100%', margin:'0', padding:'20px'}} onClick={this.deleteCurrentPet}>Delete Pet</div>
          </div>
        </div>
      );
    }
  }

  render () {

    const imgUrl = this.props.petDetails.pet_image;

    return (
      <div className="pet-show">
        <h1 className="local-pets">Pet Information</h1>
        <div className="pet-container">
          <div className="pet-actions-container">

            <div
              className="show-img-container"
              style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%'
              }}
              />

            {this.props.session.user ? this.petActions() : "" }

            <Link className="shelter-link-button" to={`/shelters/${this.props.petDetails.shelter_id}`}>
              <div>
                Shelter Page
              </div>
            </Link>
          </div>

          <div className="pet-detail-container">
            <PetDetail pet={this.props.petDetails} />
          </div>

        </div>
        <Link className="index-button" to="/">Back to Index</Link>
      </div>
    );
  }
}

export default PetShow;
