import React from 'react';
import AutoComplete from 'react-autocomplete';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "name": ""
    };

    this.update = this.update.bind(this);
  }

  update(field) {
    console.log(this.state);
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
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: 'blue',
        padding: '2px 6px',
        cursor: 'default'
      }
    };

    return (
      <div
        style={isHighlighted ? listStyles.highlightedItem : listStyles.pet}
        key={pet.id}
        id={pet.id}
      >{pet}</div>
    );
  }

  uniqueNameList () {
    return (
      $.uniqueSort(this.props.pets.map((pet) => pet.name))
    );
  }

  render () {

    const matchName = (petName, value) => {
      // console.log(this.props);
      // console.log(petName);
      console.log(this.state);
      // console.log(value);
      return petName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    };

    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <AutoComplete
            items={this.uniqueNameList()}
            inputProps={{name: 'name'}}
            getItemValue={(pet) => pet.name}
            shouldItemRender={matchName}
            renderItem={this.handleRenderItem.bind(this)}
            onChange={this.update('name')}
            onSelect={this.update('name')}
            value={this.state.name}
            />

          <input className="search-button" type="submit" value="Submit" autoFocus/>

        </form>
      </div>
    );
  }
}

export default SearchBar;
