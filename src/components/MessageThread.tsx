import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DirectMessage } from '../types';

const MessageThread: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const [message, setMessage] = useState('');
  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };
  return (
    <Grid md={6}>
      <Paper>
        <div>
          {state.user.activeThread.map((msg: DirectMessage, idx: number) => (
            <div key={idx}>
              {msg.sender.displayName} {msg.body} {msg.date}{' '}
            </div>
          ))}
        </div>
        <TextField
          multiline
          onChange={handleChange}
          placeholder='Type your message here'
          required
          rowsMax={4}
          size='medium'
          variant='outlined'
        />
      </Paper>
    </Grid>
  );
};

export default MessageThread;
