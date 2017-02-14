import React from 'react';
import AutoComplete from 'react-autocomplete';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pet_type: "",
      breed: "",
      gender: "",
    };

    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
  }

  handleRenderItem(pet, isHighlighted) {

    const listStyles = {
      pet: {
        padding: '10px',
        background: '#fff4e6',
        cursor: 'default'
      },

      highlightedItem: {
        color: '#fff4e6',
        background: '#41658A',
        padding: '10px',
        cursor: 'default',      }
    };

    return (
      <div
        style={isHighlighted ? listStyles.highlightedItem : listStyles.pet}
        key={pet.id}
        id={pet.id}
      >{pet}</div>
    );
  }

  uniqueTypeList (input) {
    return (
      $.uniqueSort(this.props.pets.map((pet) => pet[input]))
    );
  }

  render () {

    const matchField = (field, value) => {
      return field.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    };

    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input className="search-button" type="submit" value="Find a Pet!" autoFocus/>

          <AutoComplete
            items={this.uniqueTypeList('pet_type')}
            getItemValue={(item) => item}
            inputProps={{placeholder: "Type"}}
            renderItem={this.handleRenderItem.bind(this)}
            menuStyle={{ position: 'absolute', zIndex: 1}}
            value={this.state.pet_type}
            shouldItemRender={matchField}
            onChange={this.update('pet_type')}
            onSelect={state => {this.setState({pet_type: state});}}
            />

          <AutoComplete
            items={this.uniqueTypeList('breed')}
            getItemValue={(item) => item}
            inputProps={{placeholder: "Breed"}}
            renderItem={this.handleRenderItem.bind(this)}
            menuStyle={{ position: 'absolute', zIndex: 1}}
            value={this.state.breed}
            shouldItemRender={matchField}
            onChange={this.update('breed')}
            onSelect={state => {this.setState({breed: state});}}
            />

          <AutoComplete
            items={this.uniqueTypeList('gender')}
            getItemValue={(item) => item}
            inputProps={{placeholder: "Gender"}}
            renderItem={this.handleRenderItem.bind(this)}
            menuStyle={{ position: 'absolute', zIndex: 1}}
            value={this.state.gender}
            shouldItemRender={matchField}
            onChange={this.update('gender')}
            onSelect={state => {this.setState({gender: state});}}
            />

        </form>
      </div>
    );
  }
}

export default SearchBar;
