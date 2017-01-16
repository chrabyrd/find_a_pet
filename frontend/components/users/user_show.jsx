import React from 'react';
import { Link } from 'react-router';
import UserDetail from './user_detail';
import ShelterIndexContainer from '../shelters/shelter_index_container';
import ShelterFormContainer from '../shelters/shelter_form_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>

        <label>Shelters</label>
        <ShelterIndexContainer />
        <ShelterFormContainer userDetails={this.props.session.user} createShelterForm="true"/>

        <label>User Details</label>
        <UserDetail session={this.props.session}/>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default UserShow;
