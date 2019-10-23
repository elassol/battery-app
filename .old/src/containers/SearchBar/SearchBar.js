import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchBattery  } from  '../../redux/actions/action_search_battery';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { searchTerm: '' };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchBattery(this.state.searchTerm);
    this.setState({ searchTerm: '' });
}

  render(){
    console.log(this.state.searchTerm, '== State search term ===')
    return (
      <div className="SearchBar-fields">
        <form  onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Search for a battery name"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchBattery }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
