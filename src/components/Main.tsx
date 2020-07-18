import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Types } from '../types';
import Home from './Home';
import Announcements from './Announcements';
import Messages from './Messages';
import Notifications from './Notifications';
import TopNavBar from './TopNavBar';
import DisplayNameModal from './DisplayNameModal';
import DirectMessageModal from './DirectMessageModal';
import Test from './Test';

const Main: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.post('/api/messages/all', {
          name: state.user.name,
        });
        console.log('fetching messages');
        if (data.length === state.user.messages.length) return;

        dispatch({
          type: Types.SetMessages,
          payload: { messages: data },
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (state.authenticated) {
      getMessages();
    }
  }, [state.user.messages, state.user.name, state.authenticated, dispatch]);

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
