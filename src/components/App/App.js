import React from 'react';
import './App.css';
import  BatteriesList from '../BatteriesList/BatteriesList';
import SearchBar from '../SearchBar/SearchBar';




class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        batterylist: []
      };

  }

  onSearchTerm = event => {
    this.setState({batterylist: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <SearchBar onSearchTerm={this.handleSearch}/>
        </header>
          <BatteriesList/>
      </div>
    );
  }
}

export default App;
