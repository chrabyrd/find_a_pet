import React from 'react';
import { Link } from 'react-router';

class ShelterIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.shelter.shelter_name,
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
      <li className="shelters=-index-item">
        <Link to={`/shelters/${this.state.id}`}>
          <span>{this.state.name}</span>
        </Link>
        {(this.state.user_id === currentUser.id) ?
        <button onClick={this.deleteCurrentShelter}>Delete Shelter</button> : ""}
      </li>
    );
  }
}

export default ShelterIndexItem;
