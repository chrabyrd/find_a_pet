import React from 'react';
import { Link } from 'react-router';

const ShelterDetail = ({ shelter }) => {
  return (
    <div className="pet-details">
      <ul>
        <li>Name: {shelter.shelter_name}</li>
        <li>Email: {shelter.email}</li>
        <li>Address: {shelter.address}</li>
        <li>Phone Number: {shelter.phone_number}</li>
      </ul>
      <br/>
    </div>
  );
};

export default ShelterDetail;
