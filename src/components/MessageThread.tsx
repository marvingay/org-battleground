import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { DirectMessage } from '../types';
import { formatDistance } from 'date-fns';
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
  const { state } = useContext(GlobalContext);
  const [message, setMessage] = useState('');
  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  // TODO: Implement "Send" Message on Thread

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
