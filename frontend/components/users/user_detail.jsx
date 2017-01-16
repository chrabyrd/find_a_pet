import React from 'react';
import { Link } from 'react-router';

const UserDetail = ({ session }) => {
  return (
    <div>
      <ul>
        <li>Name: {session.user.username}</li>
        <li>Email: {session.user.email}</li>
      </ul>
      <br/>
    </div>
  );
};

export default UserDetail;
