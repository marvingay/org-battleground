import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { DirectMessage } from '../types';
import { formatRelative } from 'date-fns';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const MessageThread: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const [message, setMessage] = useState('');
  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };
  return (
    <Grid item md={6}>
      <Paper>
        <div>
          {state.user.activeThread.map((msg: DirectMessage, idx: number) => {
            // convert dates to distance from current
            const msgDate = new Date(msg.date);
            const currentDate = new Date();
            const fmtDate = formatRelative(msgDate, currentDate);
            return (
              <div key={idx}>
                {msg.sender.displayName} {msg.body} {fmtDate}{' '}
              </div>
            );
          })}
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
