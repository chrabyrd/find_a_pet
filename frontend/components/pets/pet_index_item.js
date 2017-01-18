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
      <div className="pet-index-item">
        <label className="pet-name">{this.state.name}</label>
        <li>
          <Link to={`/pets/${this.state.id}`}>
            <div className="index-img-container">
              {this.props.petDetails.pet_image === "" ? "" : <img src={this.props.petDetails.pet_image} alt="Pet Photo"/>  }
            </div>
          </Link>
        </li>
      </div>
    );
  }
}

export default PetIndexItem;
