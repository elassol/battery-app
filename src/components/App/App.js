import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  BatteriesList from '../BatteriesList/BatteriesList';
import SearchBar from '../SearchBar/SearchBar';



class App extends Component {

  state: { batterylist: '' }

  handleSearch = (listTerm) => {
    this.setState({batterylist: listTerm});
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
