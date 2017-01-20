import React from 'react';
import { Link } from 'react-router';
import UserDetail from './user_detail';
import ShelterIndexContainer from '../shelters/shelter_index_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="user-show">
        <div className="user-container">

          <div className="user-info">
            <div className="show-img-container">
              {this.props.session.user.user_image === "" ? "" : <img src={this.props.session.user.user_image} alt="Shelter Photo"/>  }
            </div>

            <UserDetail session={this.props.session}/>
          </div>

          <ShelterIndexContainer />
        </div>

        <Link className="index-button" to="/">Back to Index</Link>

      </div>
    );
  }
}

export default UserShow;
