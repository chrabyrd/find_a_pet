import React from 'react';
import { Link } from 'react-router';

const ShelterIndexItem = ({ shelter, router }) => (
  <li className="shelter-index-item">
    <Link to={`/shelters/${shelter.id}`}>
      <span>{shelter.shelter_name}</span>
    </Link>
  </li>
);

export default ShelterIndexItem;
