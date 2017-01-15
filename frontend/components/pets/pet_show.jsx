import React from 'react';
import { Link } from 'react-router';

import PetDetail from './pet_detail';

class PetShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchPet(parseInt(this.props.params.petId));
  }

  render () {

    return (
      <div>
        <PetDetail pet={this.props.petDetails} />
        <Link to="/pets">Back to Index</Link>
      </div>
    );
  }
}

export default PetShow;
