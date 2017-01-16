import React from 'react';
import { Link } from 'react-router';

const PetIndexItem = ({ pet, router }) => (
  <li className="pet-index-item">
    <Link to={`/pets/${pet.id}`}>
      <img src={pet.image_url} alt={pet.name} />
      <span>{pet.name}</span>
    </Link>
  </li>
);

export default PetIndexItem;
