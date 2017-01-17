import React from 'react';
import ShelterIndexItemContainer from './shelter_index_item_container';
import { Link } from 'react-router';

class ShelterIndex extends React.Component {
  componentDidMount() {
    this.props.fetchShelters();
  }

  render() {
    return(
      <section>
        <ul>
          {this.props.shelters.map(shelter => <ShelterIndexItemContainer key={`shelter${shelter.id}`} shelter={shelter} />)}
        </ul>

        <Link to="/pets">Back to Index</Link>

      </section>
    );
  }
}

export default ShelterIndex;
