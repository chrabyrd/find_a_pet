import React from 'react';
import { Link } from 'react-router';

class PetImageShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const petImage = this.props.petImage;

    return (
      <div>
        <h3>{petImage.name}</h3>
        <p>{petImage.description}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default PetImageShow;
