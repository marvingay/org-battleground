import React from 'react';
import './App.scss';
import { Grid } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { GlobalProvider } from './context/GlobalState';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Grid container spacing={0}>
        <Sidebar />
        <Home />
      </Grid>
    </GlobalProvider>
  );
};

export default App;
