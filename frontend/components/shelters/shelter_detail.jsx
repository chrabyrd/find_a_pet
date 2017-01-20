import React from 'react';
import { Link } from 'react-router';

const ShelterDetail = ({ shelter }) => {
  return (
    <div className="shelter-details">
      <ul>
        <li>{shelter.shelter_name}</li>
        <li>{shelter.email}</li>
        <li>{shelter.address}</li>
        <li>{shelter.phone_number}</li>
      </ul>
    </div>
  );
};

export default ShelterDetail;
