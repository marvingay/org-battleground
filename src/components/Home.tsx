import React from 'react';
import { Grid } from '@material-ui/core';
import Announcements from './Announcements';
import TopNavBar from './TopNavBar';

const Home: React.FC = () => {

  return (
    <Grid container item xs={12} md={9}>
      <TopNavBar />
      <Announcements />
    </Grid>
  )
}

export default Home
