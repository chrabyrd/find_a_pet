import React from 'react';
import { Link } from 'react-router';

class PetShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const pet = this.props.pet;

    return (
      <div>
        <h3>{pet.name}</h3>
        <p>{pet.description}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default PetShow;
