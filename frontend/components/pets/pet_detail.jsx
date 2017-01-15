import React from 'react';
import { Link } from 'react-router';

const PetDetail = ({ pet }) => {
  return (
    <div>
      <ul>
        <li>Name: {pet.name}</li>
        <li>Type: {pet.pet_type}</li>
        <li>Breed: {pet.breed}</li>
        <li>Age: {pet.age}</li>
        <li>Gender: {pet.gender}</li>
      </ul>
      <br/>
    </div>
  );
};

export default PetDetail;
