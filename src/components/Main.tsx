import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
// import { getMessages } from '../utilities/messageHelper'
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Types, Announcement, Notification } from '../types';
import Home from './Home';
import Announcements from './Announcements';
import Messages from './Messages';
import TopNavBar from './TopNavBar';
import DisplayNameModal from './DisplayNameModal';
import DirectMessageModal from './DirectMessageModal';
import Help from './Help';

const Main: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  // Fetch Announcements
  useEffect(() => {
    const getAnnouncements = async (currentAnnouncements: Announcement[]) => {
      const { data } = await axios.get('/api/announcements');
      // Sort Announcements in most recent order
      data.sort((a: Announcement, b: Announcement) => (a.id < b.id ? 1 : -1));
      // Update announcements IF data differs from State
      if (data.length > currentAnnouncements.length) {
        dispatch({
          type: Types.SetAnnouncements,
          payload: { announcements: data },
        });
      }
    };

    getAnnouncements(state.announcements);
  }, [dispatch, state.announcements]);

  // Fetch messages, if logged in.
  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.post('/api/messages/all', {
          name: state.user.name,
        });
        if (data.length === state.user.messages.length) return;

        dispatch({
          type: Types.SetMessages,
          payload: { messages: data },
        });

      } catch (error) {
        console.log(error);
      }
    }

    if (!state.user.name.length) return;
    if (state.authenticated && state.user.name.length) {
      getMessages();
    }
  }, [dispatch, state.authenticated, state.user.messages, state.user.name]);

  useEffect(() => {
    if (!state.authenticated && !state.user.name.length) return;
    const getNotifications = async () => {
      try {

        const { data } = await axios.post('/api/notifications', {
          action: 'GET',
          user: state.user.name,
        });
        const notifCount = data.filter(
          (notif: Notification) => notif.read === false
        ).length;

        dispatch({
          type: Types.SetNotifications,
          payload: { notifications: data },
        });
        dispatch({
          type: Types.SetNotificationCount,
          payload: { notificationCount: notifCount },
        });
      } catch (error) {
        console.log(error);
      }
    };
    getNotifications();
  }, [state.meta.title, state.user.notificationCount, state.authenticated, state.user.name, dispatch]);

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
        <Route exact path={'/help'}>
          <Help />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </Grid>
  );
};

export default Main;
