import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import  BatteriesList from '../../containers/BatteriesList/BatteriesList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchBar from '../../containers/SearchBar/SearchBar';
import Filter from '../Filter/Filter';

import {connect} from 'react-redux';
import types from '../../redux/Types';



class App extends React.Component {

  componentDidMount = () => {
    console.log(this.props, 'PORPSSSSSS');
  }

  onSearchTerm = event => {
    this.setState({ batterylist: event.target.value });
  }

  filterBySize = (size) => {
    let filtered = this.state.batterylist.filter(battery => battery.size === size);
    this.setState({batterylist: filtered});
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <div className="Wrapper">
            <Header />
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
              <SearchBar />
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
            
            <BatteriesList/>
            <Footer />
          </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  searchReducer: state.searchReducer
})

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (event) => {

    dispatch({
      type: types.UPDATE_SEARCH,
      txt: event.target.value,
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
