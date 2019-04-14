import React from 'react';
import '../pages/HomePage.css'
import { Grid, Grow } from '@material-ui/core';
import SuburbPage from "../pages/SuburbPage";

class Comparison extends React.Component {
    render() {
        console.log("suburb", this.context.suburb);
      return (
        <Grow in timeout={750}>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item xs={6} sm={6} lg={6}>
            <SuburbPage suburb={this.props.suburb} suburb_state={this.props.suburb_state} reset={this.props.reset} onStartOver={this.props.onStartOver}/>
          </Grid>
          <Grid item xs={6} sm={6} lg={6}>
            <SuburbPage suburb={this.props.suburb} suburb_state={this.props.suburb_state} reset={this.props.reset} onStartOver={this.props.onStartOver}/>
          </Grid>
        </Grid>
        </Grow>
      );
    }
  }

export default Comparison;