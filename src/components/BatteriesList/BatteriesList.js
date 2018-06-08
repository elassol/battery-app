import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './BatteriesList.css';
import selectBattery from '../../redux/actions/action_select_battery'
import Battery from '../Battery/Battery';

import {Grid, Paper } from '@material-ui/core';


class BatteriesList extends Component {

  renderList() {
    return this.props.batteries.map(battery => {
      return (
        <Grid item  xs={6} sm={4} lg={3}>
          <Paper>
            <Battery battery={battery} />
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
    batteries: state.batteries
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBattery: selectBattery}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BatteriesList);

