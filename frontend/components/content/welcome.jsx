import React from 'react';
import { Link } from 'react-router';
import PetIndexContainer from '../pets/pet_index_container';

const Welcome = () => (
  <div>
    <h2>Here are some pets in your area:</h2>
    <PetIndexContainer />
  </div>
);


export default Welcome;
