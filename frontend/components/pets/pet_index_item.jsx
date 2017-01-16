import React from 'react';
import { Link } from 'react-router';

class PetIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteCurrentPet = this.deleteCurrentPet.bind(this);
  }

  deleteCurrentPet() {
    this.props.deletePet(parseInt(this.props.petDetails.id));
  }

  render () {
    return (
      <li className="pet-index-item">
        <Link to={`/pets/${this.state.petDetails.id}`}>
          <img src={this.state.petDetails.image_url} alt={this.state.petDetails.name} />
          <span>{this.state.petDetails.name}</span>
          <button onClick={this.deleteCurrentPet}>Delete Pet</button>
        </Link>
      </li>
    );
  }
}

export default PetIndexItem;
