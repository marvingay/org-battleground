import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Announcements from './Announcements';
import Messages from './Messages';
import Notifications from './Notifications';
import TopNavBar from './TopNavBar';
import DisplayNameModal from './DisplayNameModal';
import DirectMessageModal from './DirectMessageModal';
import Test from './Test';

const Main: React.FC = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Grid className='Home' container>
      <TopNavBar />
      {state.showDisplayForm && <DisplayNameModal />}
      {state.showMsgForm && <DirectMessageModal />}
      <Switch>
        <Route exact path={'/home'}>
          <Home />
        </Route>
        <Route exact path={'/announcements'}>
          <Announcements />
        </Route>
        <Route exact path={'/messages'}>
          <Messages />
        </Route>
        <Route exact path={'/notifications'}>
          <Notifications />
        </Route>
        <Route path={'/'}>
          <Test />
        </Route>
      </Switch>
    </Grid>
  );
};

export default Main;
