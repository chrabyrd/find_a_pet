import React from 'react';
import AutoComplete from 'react-autocomplete';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
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
        background: '#854442',
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

  uniqueNameList () {
    return (
      $.uniqueSort(this.props.pets.map((pet) => pet.name))
    );
  }

  render () {

    const matchName = (petName, value) => {
      // console.log(this.props);
      // console.log(petName);
      // console.log(this.state);
      // console.log(value);
      return petName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    };

    console.log(this.state);
    console.log(this.uniqueNameList());
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input className="search-button" type="submit" value="Search" autoFocus/>

          <AutoComplete
            items={this.uniqueNameList()}
            getItemValue={(item) => item}
            inputProps={{placeholder: "Type"}}
            renderItem={this.handleRenderItem.bind(this)}
            value={this.state.name}
            shouldItemRender={matchName}
            onChange={this.update('name')}
            onSelect={state => {this.setState({name: state});}}
            />

          <AutoComplete
            items={this.uniqueNameList()}
            getItemValue={(item) => item}
            inputProps={{placeholder: "Breed"}}
            renderItem={this.handleRenderItem.bind(this)}
            value={this.state.name}
            shouldItemRender={matchName}
            onChange={this.update('name')}
            onSelect={state => {this.setState({name: state});}}
            />

          <AutoComplete
            items={this.uniqueNameList()}
            getItemValue={(item) => item}
            inputProps={{placeholder: "Gender"}}
            renderItem={this.handleRenderItem.bind(this)}
            value={this.state.name}
            shouldItemRender={matchName}
            onChange={this.update('name')}
            onSelect={state => {this.setState({name: state});}}
            />


        </form>
      </div>
    );
  }
}

export default SearchBar;
