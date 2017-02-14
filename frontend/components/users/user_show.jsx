import React from 'react';
import { Link } from 'react-router';
import UserDetail from './user_detail';
import ShelterIndexContainer from '../shelters/shelter_index_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    const imgUrl = this.props.session.user.user_image;

    return (
      <div className="user-show">
        <h1 className="local-pets">Your Personal Profile</h1>
        <div className="user-container">

          <div className="user-info">
            <div
              className="show-img-container"
              style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

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
