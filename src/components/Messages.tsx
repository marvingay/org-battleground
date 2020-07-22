import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import { createMessageThreads } from '../utilities/messageHelper';
import Inbox from './Inbox';
import MessageThread from './MessageThread';
import NewMessageButton from './NewMessageButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// TODO: Test createMessageThreads for proper sorting functionality.

const Messages: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (state.meta.title === 'Messages') return;

    dispatch({
      type: Types.SetPageTitle,
      payload: { meta: { ...state.meta, title: 'Messages' } },
    });
  }, [dispatch, state.meta]);

  useEffect(() => {
    if (!state.user.messages.length) return;
    console.log('generating threads');
    const messageThreads = createMessageThreads(
      state.user.messages,
      state.user.name
    );
    dispatch({
      type: Types.SetMsgThreads,
      payload: { threads: messageThreads },
    });
  }, [state.user.messages, state.user.name, dispatch]);

  return (
    <Container>
      <Grid container spacing={0} item>
        <Grid container item xs={12}>
          <NewMessageButton />
        </Grid>

        <Inbox />
        <MessageThread />
      </Grid>
    </Container>
  );
};

export default Messages;
