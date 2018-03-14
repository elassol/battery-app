import React from 'react';

class SearchBar extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      searchTerm: ''
    }
  }


  // We use an arrow function to bind the eventhandleer this is equal to
  // this.handleTermChange = this.handleTermChange.bind(this);
  handleTermChange = event => {
    this.setState({searchTerm: event.target.value});
  }

  

  render(){
    console.log(this.state.searchTerm, 'this should equal sony')
    return (
      <div className="SearchBar-fields">
        <input placeholder="Search batteries" onChange={this.handleTermChange} />
      </div>
    )
  }
}

export default SearchBar;
