import React from 'react';
import './App.scss';
import { Grid } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

const App: React.FC = () => {

  return (
    <Grid container spacing={0}>
      <Sidebar />
      <Home />

    </Grid>

  );
}

export default App;
