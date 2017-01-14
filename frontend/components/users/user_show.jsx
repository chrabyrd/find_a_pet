import React from 'react';
import { Link } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const user = this.props.user;

    return (
      <div>
        <h3>{user.username}</h3>
        <p>{user.address}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default UserShow;
