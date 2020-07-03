import React, { useContext, useEffect } from 'react';
import { Types } from '../context/types';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Announcements from './Announcements';
import TopNavBar from './TopNavBar';
import Test from './Test';

const Home: React.FC = () => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { status } = await axios.get('/auth');
        if (status === 200) {
          dispatch({ type: Types.SetAuthenticated });
          return;
        } else return;
      } catch (error) {
        console.log(error);
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
    <Grid container item xs={12} md={9}>
      <TopNavBar />
      <Switch>
        <Route exact path={'/announcements'}>
          <Announcements />
        </Route>
        <Route path={'/'}>
          <Test />
        </Route>
      </Switch>
    </Grid>
  );
};

export default Home;
