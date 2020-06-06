import React from 'react';
import './App.scss';
import { Grid } from '@material-ui/core';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {

  return (
    <Grid container spacing={1}>
      <Sidebar />
    </Grid>

  );
}

export default App;
