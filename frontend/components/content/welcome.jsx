import React from 'react';
import { Link } from 'react-router';
import PetIndexContainer from '../pets/pet_index_container';


const Welcome = () => (

  <div className="welcome-container">

    <div className="local-pets-container">
      <h1 className="local-pets">Pets in your area:</h1>
      <PetIndexContainer />
    </div>

  </div>

);


export default Welcome;
