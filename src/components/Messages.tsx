import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import { Button } from '@material-ui/core';
import { createMessageThreads } from '../utilities/messageHelper';
import Inbox from './Inbox';

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

  const openMsgForm = () => {
    dispatch({
      type: Types.ShowMsgForm,
    });
  };

  return (
    <div>
      <Button onClick={openMsgForm} variant='contained'>
        Write new message
      </Button>

      <Inbox />
    </div>
  );
};

export default Messages;
