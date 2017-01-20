import React from 'react';
import ShelterIndexItemContainer from './shelter_index_item_container';
import { Link } from 'react-router';
import ShelterFormContainer from '../shelters/shelter_form_container';

class ShelterIndex extends React.Component {
  constructor (props) {
    super(props);

    this.filterShelterList = this.filterShelterList.bind(this);
  }

  componentDidMount() {
    this.props.fetchShelters();
  }

  filterShelter(shelter) {
    if (shelter.user_id === this.props.session.user.id) {
      return true;
    } else {
      return false;
    }
  }

  filterShelterList() {
    const shelterList = this.props.shelters.filter(shelter => this.filterShelter(shelter));

    return (
     shelterList.map( shelter => <ShelterIndexItemContainer key={`shelter${shelter.id}`} shelter={shelter} /> )
    );
  }

  render() {
    return(
      <div className="shelter-index-container">

        <div className="shelter-index">
          <div className="shelter-index-title">Shelters You're Assisting</div>
          <ul>
            {this.filterShelterList()}
          </ul>
        </div>

        <ShelterFormContainer userDetails={this.props.session.user} createShelterForm="true"/>

      </div>
    );
  }
}

export default ShelterIndex;
