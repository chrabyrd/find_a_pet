import React from 'react';
import { Link } from 'react-router';

class PetIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.petDetails.name,
      id: this.props.petDetails.id,
      user_id: this.props.petDetails.user_id,
    };

    this.deleteCurrentPet = this.deleteCurrentPet.bind(this);
  }

  deleteCurrentPet() {
    this.props.deletePet(parseInt(this.props.petDetails.id));
  }

  render () {

    const currentUser = this.props.session.user || "";
    
    return (
      <li className="pet-index-item">
        <Link to={`/pets/${this.state.id}`}>
          <span>{this.state.name}</span>
        </Link>
        {(this.state.user_id === currentUser.id) ?
          <button onClick={this.deleteCurrentPet}>Delete Pet</button> : "" }
      </li>
    );
  }
}

export default PetIndexItem;
