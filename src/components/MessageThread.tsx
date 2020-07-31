import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { DirectMessage, Types } from '../types';
import { formatDistance } from 'date-fns';
import axios from 'axios';
import MessageItem from './MessageItem';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    minHeight: '480px',
    minWidth: '40%',
    maxWidth: '50%',
  },
  button: {
    height: '100%',
    fontWeight: 'bold',
  },
  textbox: {
    width: '100%',
  },
}));

const MessageThread: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(GlobalContext);
  const [message, setMessage] = useState('');
  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };
  const activeRecipient = () => {
    const thread = state.user.activeThread;
    if (thread.length) {
      const msg = thread[0];
      return msg.sender.displayName !== state.user.name ? msg.sender.displayName : msg.recipient.displayName;
    }
    else {
      return null;
    }
  }
  // TODO: Implement "Send" Message on Thread
  const handleSendMessage = async () => {
    if (message.length === 0) return; // TODO: Error handling
    if (activeRecipient === null) return;
    try {
      await axios.post('/api/messages', { message, sender: state.user.name, recipient: activeRecipient() })
      dispatch({
        type: Types.GetMessages,
        payload: { getMessages: true }
      })

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Grid item md={6}>
      <Paper className={classes.container}>
        <Grid container>
          <Grid xs={9} item>
            <TextField
              className={classes.textbox}
              multiline
              onChange={handleChange}
              placeholder='Type your message here'
              required
              rowsMax={2}
              size='medium'
              variant='outlined'
            />
          </Grid>
          <Grid xs={3} item>
            <Button
              className={classes.button}
              color='primary'
              fullWidth
              onClick={handleSendMessage}
              variant='contained'
            >
              Send
            </Button>
          </Grid>

          <Grid container item>
            {state.user.activeThread.map((msg: DirectMessage, idx: number) => {
              // convert dates to distance from current
              const msgDate = new Date(msg.date);
              const currentDate = new Date();
              const fmtDate = formatDistance(msgDate, currentDate, {
                includeSeconds: true,
                addSuffix: true,
              });
              return (
                <MessageItem
                  key={idx}
                  displayName={msg.sender.displayName}
                  body={msg.body}
                  date={fmtDate}
                  user={state.user.name}
                />
              );
            })}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default MessageThread;
