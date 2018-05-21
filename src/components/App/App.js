import React from 'react';
import './App.css';
import  BatteriesList from '../BatteriesList/BatteriesList';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import data from '../../data/data.json';



class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        batterylist: data.batteries,
      };

  }

  onSearchTerm = event => {
    this.setState({batterylist: event.target.value});
  }



  filterList = () => {
    
    
      this.state.batterylist.map(battery => {
        if (battery.CDR > 20) {
          this.setState({batterylist})
        }
        
      })
    
  }


  render() {
    return (
      <div className="Wrapper">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <SearchBar onSearchTerm={this.handleSearch}/>
        </header>
          <div className="filters">
            <Filter  label="test"/>
          </div>
          <BatteriesList batterylist={this.state.batterylist}/>
      </div>
    );
  }
}

export default App;
