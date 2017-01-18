import React from 'react';
import { Link } from 'react-router';

const UserDetail = ({ session }) => {
  return (
    <div>
      <ul className='user-details'>
        <li><div className='user-detail-item'>{session.user.username}</div></li>
        <li><div className='user-detail-item'>{session.user.email}</div></li>
      </ul>
      <br/>
    </div>
  );
};

export default UserDetail;
