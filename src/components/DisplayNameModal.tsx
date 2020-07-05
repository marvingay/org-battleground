import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Types } from '../types';

const DisplayNameModal: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [displayName, setDisplayName] = useState('');

  const handleChange = (event: any) => {
    setDisplayName(event.target.value);
  };

  const handleClose = async (event: any) => {
    event.preventDefault();
    try {
      await axios.put('/auth', {
        currentName: state.user,
        updatedName: displayName,
      });
      dispatch({
        type: Types.RemoveDisplayForm,
      });
      dispatch({
        type: Types.SetUser,
        payload: { user: displayName },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={state.showDisplayForm}
      onClose={handleClose}
      aria-labelledby='display-name'
    >
      <DialogTitle id='display-name'>Choose a Display Name</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Choose a unique display name for your account. If you don't choose one
          now, you will be stuck with a default name!
        </DialogContentText>
        <TextField
          autoFocus
          onChange={handleChange}
          margin='dense'
          label='Display Name'
          type='text'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DisplayNameModal;
