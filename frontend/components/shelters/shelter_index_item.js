import React from 'react';
import { Link } from 'react-router';

class ShelterIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.shelter.shelter_name,
      address: this.props.shelter.address,
      id: this.props.shelter.id,
      user_id: this.props.shelter.user_id
    };

    this.deleteCurrentShelter = this.deleteCurrentShelter.bind(this);
  }

  deleteCurrentShelter() {
    this.props.deleteShelter(parseInt(this.props.shelter.id));
  }

  render () {

    const currentUser = this.props.session.user || "";

    return (
      <div className="shelter-index-item-container" >
        <Link to={`/shelters/${this.state.id}`}>
          <li className="shelter-index-item">
            <div>{this.state.name}</div>
            <div>{this.state.address}</div>
            {(this.state.user_id === currentUser.id) ?
              <button className="shelter-buttons" onClick={this.deleteCurrentShelter}>Delete Shelter</button> : ""}
              </li>
            </Link>
      </div>
    );
  }
}

export default ShelterIndexItem;
