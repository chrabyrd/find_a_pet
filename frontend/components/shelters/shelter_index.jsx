import React from 'react';
import ShelterIndexItemContainer from './shelter_index_item_container';
import { Link } from 'react-router';
import ShelterFormContainer from '../shelters/shelter_form_container';

class ShelterIndex extends React.Component {
  componentDidMount() {
    this.props.fetchShelters();
  }

  render() {
    return(
      <div className="shelter-index-container">

        <div className="shelter-list">
          <ul>
            {this.props.shelters.map(shelter => <ShelterIndexItemContainer key={`shelter${shelter.id}`} shelter={shelter} />)}
          </ul>
        </div>
        
        <ShelterFormContainer userDetails={this.props.session.user} createShelterForm="true"/>

      </div>
    );
  }
}

export default ShelterIndex;
