import React from 'react';
import './App.scss';
import { Grid, Hidden, Paper } from '@material-ui/core';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {

  return (
    <Grid container spacing={1}>
      <Hidden smDown>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
      </Hidden>
      <Grid item xs={12} md='auto' >
        <Paper elevation={1} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paper>
      </Grid>
    </Grid>

  );
}

export default App;
