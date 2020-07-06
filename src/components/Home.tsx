import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Announcements from './Announcements';
import TopNavBar from './TopNavBar';
import DisplayNameModal from './DisplayNameModal';
import Test from './Test';

const Home: React.FC = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Grid className='Home' container>
      <TopNavBar />
      {state.showDisplayForm && <DisplayNameModal />}
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
