import React from 'react';
import { Link } from 'react-router';

const ShelterDetail = ({ shelter }) => {
  return (
    <div className="shelter-details">
      <ul>
        <li>
          <div className="shelter-description" >Name:</div>
          <div className="shelter-detail">{shelter.shelter_name}</div>
        </li>

        <li>
          <div className="shelter-description" >Email:</div>
          <div className="shelter-detail">{shelter.email}</div>
        </li>

        <li>
          <div className="shelter-description" >Address:</div>
          <div className="shelter-detail">{shelter.address}</div>
        </li>

        <li>
          <div className="shelter-description" >Phone:</div>
          <div className="shelter-detail">{shelter.phone_number}</div>
        </li>
      </ul>
    </div>
  );
};

export default ShelterDetail;
