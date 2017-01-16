import React from 'react';
import { Link } from 'react-router';

class PetIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.pet.name,
      id: this.props.pet.id
    };

    this.deleteCurrentPet = this.deleteCurrentPet.bind(this);
  }

  deleteCurrentPet() {
    this.props.deletePet(parseInt(this.props.pet.id));
  }

  render () {
    return (
      <li className="pet-index-item">
        <Link to={`/pets/${this.state.id}`}>
          <span>{this.state.name}</span>
        </Link>
        <button onClick={this.deleteCurrentPet}>Delete Pet</button>
      </li>
    );
  }
}

export default PetIndexItem;
