import React from 'react';
import { Link } from 'react-router';

const PetDetail = ({ pet }) => {

  return (
    <div className="pet-details">
      <ul>
        <li>
          <div className="pet-description" >Name:</div>
          <div className="pet-detail">{pet.name}</div>
        </li>

        <li>
          <div className="pet-description" >Breed:</div>
          <div className="pet-detail">{pet.breed}</div>
        </li>

        <li>
          <div className="pet-description" >Age:</div>
          <div className="pet-detail">{pet.age} year(s) old</div>
        </li>

        <li>
          <div className="pet-description" >Gender:</div>
          <div className="pet-detail">{pet.gender}</div>
        </li>

        <li>
          <div className="pet-description" >Description:</div>
          <div className="pet-detail">{pet.description}</div>
        </li>

      </ul>
      <br/>
    </div>
  );
};

export default PetDetail;
