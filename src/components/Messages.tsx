import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import { createMessageThreads } from '../utilities/messageHelper';
import axios from 'axios';
import Inbox from './Inbox';
import MessageThread from './MessageThread';
import NewMessageButton from './NewMessageButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
    if (state.user.getMessages) {
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
          dispatch({
            type: Types.GetMessages,
            payload: { getMessages: false }
          })

        } catch (error) {
          console.log(error);
        }
      }

      getMessages();
    } // eslint-disable-next-line
  }, [state.user.getMessages])

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
