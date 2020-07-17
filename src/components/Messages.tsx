import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { createMessageThreads } from '../utilities/messageHelper';

// TODO: Implement utility to sort user's messages into unique threads per possible recipient (accounting for received but not sent messages)

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
    const getMessages = async () => {
      if (state.user.messages.length) return;
      const { data } = await axios.post('/api/messages/all', {
        name: state.user.name,
      });
      console.log(data);
      dispatch({
        type: Types.SetMessages,
        payload: { messages: data },
      });
    };
    getMessages();
  }, []);

  const openMsgForm = () => {
    dispatch({
      type: Types.ShowMsgForm,
    });
  };

  console.log(createMessageThreads(state.user.messages, state.user.name));
  return (
    <div>
      <Button onClick={openMsgForm} variant='contained'>
        Write new message
      </Button>

      {state.user.messages.map((message) => {
        return (
          <div>
            From: {message.sender.displayName} <br /> Body: {message.body}
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
