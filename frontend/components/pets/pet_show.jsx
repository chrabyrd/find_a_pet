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

  render () {
    console.log(this.props);
    return (
      <div>
        {(this.props.session.user.id === this.props.petDetails.user_id) ?
          <button onClick={this.deleteCurrentPet}>Delete Pet</button> : "" }
        <PetFormContainer />
        <PetDetail pet={this.props.petDetails} />
        <Link to="/pets">Back to Index</Link>
        <br />
        <Link to={`/shelters/${this.props.petDetails.shelter_id}`}>Shelter Page</Link>
      </div>
    );
  }
}

export default PetShow;
