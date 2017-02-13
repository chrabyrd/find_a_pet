import React from 'react';
import { Link } from 'react-router';
import PetIndexContainer from '../pets/pet_index_container';
import PetSlider from './petSlider';


const Welcome = () => (

  <div className="welcome-container">

    <div>
      <PetSlider />
    </div>

    <div>
      <PetIndexContainer />
    </div>

  </div>

);


export default Welcome;
