import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types, SendMessage } from '../types';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  msg: {
    marginTop: 30,
  },
}));

const DirectMessageModal: React.FC = () => {
  const classes = useStyles();

  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const { state, dispatch } = useContext(GlobalContext);

  const handleNameChange = (event: any) => {
    setRecipient(event.target.value);
  };

  const handleMsgChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleClose = () => {
    dispatch({
      type: Types.RemoveMsgForm,
    });
  };

  const handleSend = async () => {
    // TODO: Send POST to backend;
    try {
      const sendMessage: SendMessage = {
        sender: state.user.name,
        recipient: recipient,
        message: message,
      };
      await axios.post('/api/messages', sendMessage);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={state.showMsgForm}
      onClose={handleClose}
      aria-labelledby='direct-message'
    >
      <DialogTitle id='direct-message'>Direct Message</DialogTitle>
      <DialogContent>
        <TextField
          onChange={handleNameChange}
          label='To:'
          size='small'
          required
        />
        <TextField
          className={classes.msg}
          autoFocus
          onChange={handleMsgChange}
          margin='dense'
          label='Message'
          type='text'
          multiline
          rows={4}
          size='medium'
          variant='outlined'
          fullWidth
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSend} variant='contained' color='primary'>
          Send
        </Button>
        <Button onClick={handleClose} color='secondary'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DirectMessageModal;
