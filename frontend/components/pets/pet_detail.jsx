import React from 'react';
import { Link } from 'react-router';

const PetDetail = ({ pet }) => {

  return (
    <div className="pet-details">
      <ul>
        <li>{pet.name}</li>
        <li>{pet.breed}</li>
        <li>{pet.age} years old</li>
        <li>{pet.gender}</li>
        <li>{pet.description}</li>
      </ul>
      <br/>
    </div>
  );
};

export default PetDetail;
