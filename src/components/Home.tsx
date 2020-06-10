import React from 'react';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Announcements from './Announcements';
import TopNavBar from './TopNavBar';
import Test from './Test';

const Home: React.FC = () => {
  return (
    <Grid container item xs={12} md={9}>
      <TopNavBar />
      <Switch>
        <Route exact path='/announcements' component={Announcements} />
        <Route exact path='/dashboard' component={Test} />
      </Switch>
    </Grid>
  );
};

export default Home;