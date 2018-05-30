import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
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




  filterList = (brand) => {
      
      console.log("works");

      console.log(brand)
      let filtered = this.state.batterylist.filter(battery => battery.brand === brand);
      console.log(filtered);
      
    
      this.setState({batterylist: filtered});
     
  }

  filterBySize = (size) => {

    let filtered = this.state.batterylist.filter(battery => battery.size === size);
    this.setState({batterylist: filtered});
    
    
}

  render() {
    console.log(this.state.batterylist, "batttery");
    return (
      <React.Fragment>
        <CssBaseline />
          <div className="Wrapper">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
              <SearchBar onSearchTerm={this.handleSearch}/>
            </header>
              <div className="filters-wrapper">

                <Filter 
                
                  label = "18650"
                  filterBy ={() => this.filterBySize('18650')}
                />

                <Filter
                  filter="20"
                  label="Sony"
                  
                  filterBy={() => this.filterList("Sony")}
                />
              </div>
              <BatteriesList batterylist={this.state.batterylist}/>
          </div>
        </React.Fragment>
    );
  }
}

export default App;
