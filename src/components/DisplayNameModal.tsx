import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../context/types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DisplayNameModal: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleClose = async () => {
    // TODO: Add PUT request to set new user username
    // TODO: Handle JWT storage.
    dispatch({
      type: Types.RemoveDisplayForm,
    });
  };

  return (
    <Dialog
      open={state.showDisplayForm}
      onClose={handleClose}
      aria-labelledby='display-name'
    >
      <DialogTitle id='display-name'>Choose Display Name</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Choose a unique display name for your account. If you don't choose one
          now, you will be stuck with a default name!
        </DialogContentText>
        <TextField
          autoFocus
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
