import React from 'react';
import { Link } from 'react-router';

class ShelterShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const shelter = this.props.shelter;

    return (
      <div>
        <h3>{shelter.shelter_name}</h3>
        <p>{shelter.address}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default ShelterShow;
