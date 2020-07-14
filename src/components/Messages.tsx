import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import { Button } from '@material-ui/core';

const Messages: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: { meta: { ...state.meta, title: 'Messages' } },
    });
  }, []);

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
    </div>
  );
};

export default Messages;
