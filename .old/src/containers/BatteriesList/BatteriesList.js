import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './BatteriesList.css';
import selectBattery from '../../redux/actions/action_select_battery'
import Battery from '../../components/Battery/Battery';

import {Grid, Paper } from '@material-ui/core';


class BatteriesList extends Component {

  renderList() {
    return this.props.batteries.map(battery => {
      return (
        <Grid item  xs={6} sm={4} lg={3} key={battery.name}>
          <Paper>
            <Battery 
              battery={battery} 
              onClick={() => this.props.selectBattery(battery)}
            />
          </Paper>
        </Grid>
      );
    });
  } 

  render() {
    return (
      <Grid container spacing={16}>
        {this.renderList()}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    batteries: state.batteries,
    searchbatteries: state.batteries
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBattery: selectBattery}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BatteriesList);

