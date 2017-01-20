import React from 'react';
import { Link } from 'react-router';

const UserDetail = ({ session }) => {
  return (
    <div className="user-details-container">
      <ul className='user-details'>
        <li>{session.user.username}</li>
        <li>{session.user.email}</li>
      </ul>
      <br/>
    </div>
  );
};

export default UserDetail;
